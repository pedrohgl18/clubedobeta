# Clube dos Beta Testers

Portal em React + Vite com autenticação via Netlify Identity (com Google) e deploy no Netlify. Conecta testers e empresas para validar produtos, com plano gratuito e premium.

## Homepage — Estrutura e Seções

A página inicial foi construída com foco em conversão e clareza. Ela contém:

- Navbar: logo, âncoras (Como funciona, Benefícios, Planos, FAQ) e login/logout (Netlify Identity).
- Hero: título, subtítulo e CTA “Quero ser Beta Tester” + CTA para empresas.
- Como funciona: passo a passo simples (cadastro → escolha testes → envie feedback → receba benefícios).
- Benefícios/Valor: cartões com vantagens para testers e empresas.
- Para empresas: bloco dedicado explicando como cadastrar testes e receber feedbacks.
- Planos: Free vs Premium (acesso antecipado, badges, sorteios, prioridade).
- Compromissos: princípios (feedback honesto, privacidade, transparência).
- FAQ: respostas rápidas às dúvidas comuns.
- Footer: direitos, contatos e links úteis.

IDs das seções para navegação por âncora: `#como-funciona`, `#beneficios`, `#empresas`, `#planos`, `#faq`.

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

Tela de login/cadastro customizada (Headless UI) com opção “Continuar com Google”.

Como configurar no Netlify:

1) Settings → Identity → Enable Identity.
2) Identity → Services → habilite “Google”.
3) Identity → Registration → escolha “Open” (ou “Invite only” se preferir).
4) Garanta que o domínio do site (Site settings → Domain management) é o mesmo usado no fluxo (o OAuth depende disso).

Fluxo no app:

- Botão “Entrar” abre um modal com: Google, Entrar com e-mail, Criar conta.
- Google: redireciona para `/.netlify/identity/authorize?provider=google`.
- E-mail: usa `netlifyIdentity.open('login'|'signup')` do widget para os fluxos nativos.

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
