# ISSTUDIO TECH — Site institucional

Site moderno da agência ISSTUDIO TECH, construído com Next.js 15.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

**Importante (OneDrive):** não rode `pnpm dev` e `pnpm build` ao mesmo tempo. Se der erro `Cannot find module` ou `routes-manifest.json`, feche todos os terminais e use:

```powershell
pnpm run dev:clean
```

Ou o script completo:

```powershell
.\scripts\dev.ps1
```

Use sempre **pnpm** (não misture com npm). O ideal é mover o projeto para `C:\dev\isstudio-site` (fora do OneDrive).

Abra [http://localhost:3000](http://localhost:3000).

## Produção

```bash
npm run build
npm start
```

## Deploy

Compatível com Vercel, Netlify ou qualquer host que suporte Next.js.
