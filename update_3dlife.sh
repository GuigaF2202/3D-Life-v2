#!/bin/bash
echo "🔁 Atualizando projeto 3D Life..."

cd backend-3dlife
source venv/bin/activate
git pull origin main
pip install -r requirements.txt
deactivate

cd ../frontend-3dlife
git pull origin main
npm install

echo "✅ Atualização concluída!"