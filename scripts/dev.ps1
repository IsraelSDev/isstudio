# Mata servidores Next na porta 3000/3001, limpa cache e inicia dev
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

foreach ($port in 3000, 3001) {
  Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
}

node scripts/clean-cache.mjs
pnpm dev
