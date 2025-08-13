# Clube dos Beta Testers

Portal em React + Vite com autenticação via Netlify Identity e deploy no Netlify. Conecta testers e empresas para validar produtos, com plano gratuito e premium.

## Homepage — Estrutura e Seções

A página inicial foi construída com foco em conversão e clareza. Ela contém:

- Navbar: logo, âncoras (Como funciona, Benefícios, Planos, FAQ) e login/logout (Netlify Identity).
- Hero: título, subtítulo e CTA “Quero ser Beta Tester” + CTA para empresas.
- Como funciona: passo a passo simples (cadastro → escolha testes → envie feedback → receba benefícios).
- Benefícios/Valor: cartões com vantagens para testers e empresas.
- Para empresas: bloco dedicado explicando como cadastrar testes e receber feedbacks.
- Planos: Free vs Premium (acesso antecipado, badges, sorteios, prioridade).
- Depoimentos: feedbacks reais (mock) para prova social.
- FAQ: respostas rápidas às dúvidas comuns.
- Footer: direitos, contatos e links úteis.

IDs das seções para navegação por âncora: `#como-funciona`, `#beneficios`, `#empresas`, `#planos`, `#depoimentos`, `#faq`.

## Como rodar localmente

```powershell
npm install
npm run dev
```

## Build e preview

```powershell
npm run build
npm run preview
```

## Tailwind CSS

- Configurações: `tailwind.config.js` e `postcss.config.js`.
- Entrypoint: `src/index.css` com `@tailwind base; @tailwind components; @tailwind utilities;`.
- Estilos antigos de `src/App.css` foram removidos; a homepage usa classes utilitárias no JSX.

## Autenticação (Netlify Identity)

- O login/logout é feito via Netlify Identity com o widget embutido.
- Após publicar no Netlify, ative “Identity” no painel do site.

## Deploy no Netlify

1. Add new site → Import from Git → selecione o repositório `clubedobeta`.
2. Build command: `npm run build` | Publish directory: `dist`.
3. Após o primeiro deploy, ative “Identity”.

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS (utilitários) + PostCSS/Autoprefixer
- Netlify Identity (auth) e Netlify (deploy)

## Próximos passos sugeridos

- Dashboard do usuário e listagem de testes.
- Formulário de envio de feedback.
- Cadastro de testes (empresas) com workflow de aprovação.
- Integração de pagamentos para Premium (Stripe/PayPal/MercadoPago).
