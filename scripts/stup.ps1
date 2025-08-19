# scripts/setup.ps1

Write-Host "🔄 Iniciando entorno Mi Buen Despertar..."

# Cambiar a rama develop
git checkout develop

# Instalar dependencias si existe package.json
if (Test-Path "package.json") {
    Write-Host "🛠️ Ejecutando npm install..."
    npm install
}

# Abrir VS Code si está configurado
Write-Host "🚀 Abriendo Visual Studio Code..."
code .
