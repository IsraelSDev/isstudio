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
pnpm run build
pnpm start
```

Deploy na [Vercel](https://vercel.com) conectando o repositório. O projeto já inclui **Vercel Analytics** e **Speed Insights**.

Após o deploy:

1. No painel do projeto → **Analytics** → ative Web Analytics (plano Hobby inclui métricas básicas)
2. Em **Speed Insights** → ative para ver Core Web Vitals
3. Os dados aparecem em algumas horas após o primeiro tráfego em produção

Em desenvolvimento local (`pnpm dev`) o tracking não envia dados — só funciona no domínio publicado.

## SEO (após publicar)

1. Confirme que o site está em `https://www.isstudio.com.br`
2. [Google Search Console](https://search.google.com/search-console) — adicione a propriedade e `GOOGLE_SITE_VERIFICATION` no `.env.local`
3. Envie o sitemap: `https://www.isstudio.com.br/sitemap.xml`
4. Cadastre o negócio no [Google Perfil da Empresa](https://business.google.com) com o mesmo NAP (nome, endereço, telefone) do site
5. Crie imagem OG 1200×630 (`public/og-image.jpg`) para redes sociais — recomendado

Ranquear em 1º lugar depende também de conteúdo, backlinks e concorrência; o site já está otimizado tecnicamente (meta tags, Schema.org, FAQ, sitemap, local SEO Goiânia).

## Deploy

Compatível com Vercel, Netlify ou qualquer host que suporte Next.js.
