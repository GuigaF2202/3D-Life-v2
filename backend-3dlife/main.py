from fastapi import FastAPI
from routes.auth import router as auth_router
from routes.register import router as register_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(register_router)