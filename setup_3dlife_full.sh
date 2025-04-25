#!/bin/bash

echo "🚀 Iniciando instalação do 3D Life..."

# Atualizações e dependências
sudo apt update && sudo apt install -y python3 python3-venv python3-pip postgresql postgresql-contrib git nodejs npm

# Configuração do banco
DB_NAME="3dlife"
DB_USER="3dlife_user"
DB_PASS="senhaSuperSegura"

echo "📦 Criando banco de dados PostgreSQL..."
sudo -u postgres psql <<EOF
DO
$$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$DB_USER') THEN
      CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';
   END IF;
END
$$;
CREATE DATABASE $DB_NAME OWNER $DB_USER;
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOF

# BACKEND SETUP
echo "📦 Configurando Backend..."
cd backend-3dlife
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python3 -c "from db import Base, engine; import models; Base.metadata.create_all(bind=engine)"
deactivate
cd ..

# FRONTEND SETUP
echo "📦 Instalando dependências do Frontend..."
cd frontend-3dlife
npm install
cd ..

echo "✅ Instalação concluída!"
echo ""
echo "Para iniciar o backend:"
echo "cd backend-3dlife && source venv/bin/activate && uvicorn main:app --host 0.0.0.0 --port 8000"
echo ""
echo "Para iniciar o frontend:"
echo "cd frontend-3dlife && npm run dev"