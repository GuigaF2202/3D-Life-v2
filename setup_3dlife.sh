#!/bin/bash

# Atualiza pacotes do sistema
sudo apt update && sudo apt upgrade -y

# Instala Python, venv, pip, PostgreSQL e utilitários
sudo apt install -y python3 python3-venv python3-pip postgresql postgresql-contrib git

# Configurações do banco
DB_NAME="3dlife"
DB_USER="3dlife_user"
DB_PASS="senhaSuperSegura"

# Criação do banco e usuário
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

echo "✅ Banco $DB_NAME e usuário $DB_USER criados."

# Cria ambiente virtual e instala dependências
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip

# Assume que o projeto já está no diretório
pip install -r requirements.txt

# Cria tabelas no banco
python3 -c "from db import Base, engine; import models; Base.metadata.create_all(bind=engine)"

echo "✅ Projeto 3DLife backend configurado!"
echo "Use agora: source venv/bin/activate && uvicorn main:app --host 0.0.0.0 --port 8000"
