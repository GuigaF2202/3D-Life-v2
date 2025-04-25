# 3D Life - Plataforma Virtual

Este projeto é composto por um backend FastAPI + PostgreSQL e um frontend Next.js com Tailwind CSS.

## 🚀 Requisitos

- Ubuntu 22.04+ ou 24.04
- Python 3.9+
- PostgreSQL 14+
- Node.js 18+
- npm

## 📦 Instalação rápida

1. Faça o download e extraia o projeto:
```bash
unzip 3dlife_project_full.zip
cd 3D\ Life
```

2. Torne o instalador executável e rode:
```bash
chmod +x setup_3dlife_full.sh
./setup_3dlife_full.sh
```

3. Inicie os serviços:

```bash
# Backend
cd backend-3dlife
source venv/bin/activate
uvicorn main:app --host 0.0.0.0 --port 8000

# Frontend
cd ../frontend-3dlife
npm run dev
```

## 🔐 Variáveis de ambiente

Edite `.env.example` com os dados reais:
- SMTP_SERVER
- DATABASE_URL
- JWT_SECRET

Copie para `.env` no backend e `.env.local` no frontend.

## 🛠️ Estrutura

- `backend-3dlife/`: API com FastAPI
- `frontend-3dlife/`: Interface com Next.js
- `setup_3dlife_full.sh`: Instalador automático
- `update_3dlife.sh`: Script de atualização