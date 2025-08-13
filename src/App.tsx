import { AuthWidget } from './AuthWidget';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="nav-left">
          <a href="#" className="logo">Clube do Beta</a>
        </div>
        <div className="nav-center">
          <a href="#como-funciona">Como funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#empresas">Para empresas</a>
          <a href="#planos">Planos</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="nav-right">
          <AuthWidget />
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <h1>Clube dos Beta Testers</h1>
        <p>Participe de testes exclusivos, ajude a melhorar produtos e ganhe benefícios!</p>
        <div className="hero-ctas">
          <a className="cta-btn" href="#planos">Quero ser Beta Tester</a>
          <a className="cta-secondary" href="#empresas">Sou uma empresa</a>
        </div>
      </div>
    </header>
  );
}

function SectionComoFunciona() {
  return (
    <section id="como-funciona" className="homepage-section">
      <div className="container">
        <h2>Como funciona</h2>
        <ol>
          <li>Cadastre-se gratuitamente ou faça login.</li>
          <li>Escolha testes de produtos e participe.</li>
          <li>Envie feedbacks e ganhe recompensas.</li>
          <li>Premium: acesso antecipado e benefícios exclusivos.</li>
        </ol>
      </div>
    </section>
  );
}

function SectionBeneficios() {
  return (
    <section id="beneficios" className="homepage-section">
      <div className="container">
        <h2>Benefícios</h2>
        <div className="cards">
          <div className="card-feature"><h3>Testes exclusivos</h3><p>Acesso a lançamentos antes do público.</p></div>
          <div className="card-feature"><h3>Recompensas</h3><p>Badges, sorteios e reconhecimento.</p></div>
          <div className="card-feature"><h3>Impacto real</h3><p>Ajude produtos a ficarem melhores com seu feedback.</p></div>
        </div>
      </div>
    </section>
  );
}

function SectionEmpresas() {
  return (
    <section id="empresas" className="homepage-section">
      <div className="container two-col">
        <div>
          <h2>Para empresas</h2>
          <p>Cadastre seu produto e receba feedbacks qualificados de uma comunidade engajada de beta testers.</p>
        </div>
        <div className="illustration" aria-hidden>
          {/* Espaço para imagem/ilustração futura */}
        </div>
      </div>
    </section>
  );
}

function SectionPlanos() {
  return (
    <section id="planos" className="homepage-section">
      <div className="container">
        <h2>Planos</h2>
        <div className="pricing">
          <div className="price-card">
            <h3>Gratuito</h3>
            <p>Acesso a testes públicos</p>
            <strong>R$ 0/mês</strong>
          </div>
          <div className="price-card destaque">
            <h3>Premium</h3>
            <p>Acesso antecipado, badges, sorteios e prioridade</p>
            <strong>R$ 19/mês</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDepoimentos() {
  return (
    <section id="depoimentos" className="homepage-section">
      <div className="container">
        <h2>Depoimentos</h2>
        <blockquote>“Participei de 3 testes e adorei ver meu feedback virar features.” — Ana</blockquote>
        <blockquote>“Recebemos insights valiosos antes do lançamento.” — Empresa X</blockquote>
      </div>
    </section>
  );
}

function SectionFAQ() {
  return (
    <section id="faq" className="homepage-section">
      <div className="container">
        <h2>FAQ</h2>
        <details>
          <summary>O que é o Clube dos Beta Testers?</summary>
          <p>Uma comunidade que conecta testers e empresas para validar produtos.</p>
        </details>
        <details>
          <summary>Como viro Premium?</summary>
          <p>Em breve integraremos pagamentos. Por ora, acompanhe as novidades.</p>
        </details>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="homepage-footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Clube dos Beta Testers. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="homepage-container">
      <Navbar />
      <Hero />
      <SectionComoFunciona />
      <SectionBeneficios />
      <SectionEmpresas />
      <SectionPlanos />
      <SectionDepoimentos />
      <SectionFAQ />
      <Footer />
    </div>
  );
}

export default App;
