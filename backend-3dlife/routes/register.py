from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from passlib.context import CryptContext
import smtplib
from email.message import EmailMessage
import secrets

from db import SessionLocal
from models import PendingUser, User

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

SMTP_SERVER = "smtp.3dlifevirtual.com.br"
SMTP_PORT = 587
SMTP_USER = "no-reply@3dlifevirtual.com.br"
SMTP_PASSWORD = "SUA_SENHA_SMTP"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    captcha_answer: int
    captcha_expected: int

@router.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):
    if data.captcha_answer != data.captcha_expected:
        raise HTTPException(status_code=400, detail="Captcha incorreto")

    if db.query(User).filter_by(email=data.email).first():
        raise HTTPException(status_code=400, detail="Email já registrado")

    if db.query(PendingUser).filter_by(email=data.email).first():
        raise HTTPException(status_code=400, detail="Cadastro pendente. Verifique seu email.")

    token = secrets.token_urlsafe(32)
    hashed_password = pwd_context.hash(data.password)

    db_pending = PendingUser(
        name=data.name,
        email=data.email,
        hashed_password=hashed_password,
        token=token
    )
    db.add(db_pending)
    db.commit()

    msg = EmailMessage()
    msg["Subject"] = "Confirme seu cadastro - 3DLife"
    msg["From"] = SMTP_USER
    msg["To"] = data.email
    msg.set_content(f"""
Olá {data.name},

Clique no link abaixo para confirmar seu cadastro:
http://localhost:3000/verify-email?token={token}

Se não foi você, ignore esta mensagem.
""")

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao enviar email: {str(e)}")

    return {"msg": "Verifique seu e-mail para ativar a conta."}

@router.get("/verify-email")
def verify_email(token: str, db: Session = Depends(get_db)):
    pending = db.query(PendingUser).filter_by(token=token).first()
    if not pending:
        raise HTTPException(status_code=404, detail="Token inválido")

    new_user = User(
        name=pending.name,
        email=pending.email,
        hashed_password=pending.hashed_password,
        is_active=True,
        role="user"
    )
    db.add(new_user)
    db.delete(pending)
    db.commit()

    return {"msg": "Cadastro confirmado com sucesso!"}