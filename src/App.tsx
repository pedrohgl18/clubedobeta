import { AuthWidget } from './AuthWidget';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IconSparkles, IconRocket, IconShieldCheck } from '@tabler/icons-react';
import { Dialog } from '@headlessui/react';
import { useEffect, useMemo, useState, lazy, Suspense } from 'react';

// Code splitting: carregar seções em chunks separados
const Depoimentos = lazy(() => import('./sections/Depoimentos'));
const FAQ = lazy(() => import('./sections/FAQ'));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full border-b border-gray-200 bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
        <a href="#" className="font-extrabold text-gray-900">Clube do Beta</a>
        <div className="hidden md:flex gap-4 text-gray-700">
          <a className="hover:text-indigo-700" href="#como-funciona">Como funciona</a>
          <a className="hover:text-indigo-700" href="#beneficios">Benefícios</a>
          <a className="hover:text-indigo-700" href="#empresas">Para empresas</a>
          <a className="hover:text-indigo-700" href="#planos">Planos</a>
          <a className="hover:text-indigo-700" href="#faq">FAQ</a>
        </div>
        <div className="hidden md:block">
          <AuthWidget />
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <Bars3Icon className="w-6 h-6 text-slate-800" />
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="md:hidden">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-gray-900">Clube do Beta</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <XMarkIcon className="w-6 h-6 text-slate-800" />
            </button>
          </div>
          <nav className="flex flex-col gap-3 text-slate-700">
            <a onClick={() => setOpen(false)} href="#como-funciona">Como funciona</a>
            <a onClick={() => setOpen(false)} href="#beneficios">Benefícios</a>
            <a onClick={() => setOpen(false)} href="#empresas">Para empresas</a>
            <a onClick={() => setOpen(false)} href="#planos">Planos</a>
            <a onClick={() => setOpen(false)} href="#faq">FAQ</a>
          </nav>
          <div>
            <AuthWidget />
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)]">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-indigo-200 opacity-60 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-sky-200 opacity-60 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto text-center px-5 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">Clube dos Beta Testers</h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600">Participe de testes exclusivos, ajude a melhorar produtos e ganhe benefícios!</p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700" href="#planos">Quero ser Beta Tester</a>
          <a className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100" href="#empresas">Sou uma empresa</a>
        </div>
        {/* Captura de e-mail (Netlify Forms) */}
        <form name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-8 max-w-md mx-auto flex gap-2">
          <input type="hidden" name="form-name" value="newsletter" />
          <p className="hidden"><label>Não preencha: <input name="bot-field" /></label></p>
          <input required name="email" type="email" placeholder="Seu e-mail" className="flex-1 rounded-full border border-slate-300 px-4 py-2" />
          <button className="rounded-full bg-indigo-600 text-white px-5 py-2 font-semibold hover:bg-indigo-700" type="submit">Quero novidades</button>
        </form>
      </div>
    </header>
  );
}

function SectionComoFunciona() {
  return (
    <section id="como-funciona" className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Como funciona</h2>
        <ol className="list-decimal ml-5 space-y-2 text-slate-700">
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
    <section id="beneficios" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Benefícios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconSparkles size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Testes exclusivos</h3>
            <p className="text-slate-600">Acesso a lançamentos antes do público.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconShieldCheck size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Recompensas</h3>
            <p className="text-slate-600">Badges, sorteios e reconhecimento.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconRocket size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Impacto real</h3>
            <p className="text-slate-600">Ajude produtos a ficarem melhores com seu feedback.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEmpresas() {
  return (
    <section id="empresas" className="py-12">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Para empresas</h2>
          <p className="text-slate-700">Cadastre seu produto e receba feedbacks qualificados de uma comunidade engajada de beta testers.</p>
        </div>
  <div aria-hidden className="rounded-2xl h-56 bg-gradient-to-br from-indigo-50 to-blue-100 shadow-inner" />
      </div>
    </section>
  );
}

function SectionPlanos() {
  const [periodo, setPeriodo] = useState<'mensal' | 'anual'>('mensal');
  const preco = useMemo(() => ({ mensal: 19, anual: 190 }), []);
  return (
    <section id="planos" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-indigo-700">Planos</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className={periodo==='mensal' ? 'font-semibold text-slate-900' : 'text-slate-500'}>Mensal</span>
            <button onClick={() => setPeriodo(p => p==='mensal' ? 'anual' : 'mensal')} className="relative w-14 h-7 rounded-full bg-slate-200">
              <span className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${periodo==='anual' ? 'translate-x-7' : ''}`}></span>
            </button>
            <span className={periodo==='anual' ? 'font-semibold text-slate-900' : 'text-slate-500'}>Anual <em className="not-italic text-green-600">(economize ~2 meses)</em></span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Gratuito</h3>
            <p className="text-slate-600">Acesso a testes públicos</p>
            <strong className="block mt-2 text-slate-900">R$ 0/mês</strong>
          </div>
          <div className="rounded-xl border-2 border-indigo-500 bg-indigo-50 p-4">
            <h3 className="font-semibold text-slate-900">Premium</h3>
            <p className="text-slate-700">Acesso antecipado, badges, sorteios e prioridade</p>
            <strong className="block mt-2 text-slate-900">R$ {periodo==='mensal' ? preco.mensal : preco.anual}/
              {periodo==='mensal' ? 'mês' : 'ano'}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

// (seções Depoimentos e FAQ estão em ./sections e carregadas via lazy)

function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-slate-500">
      <div className="max-w-6xl mx-auto px-5">
        <form name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="max-w-md mx-auto mb-4 flex gap-2">
          <input type="hidden" name="form-name" value="newsletter" />
          <p className="hidden"><label>Não preencha: <input name="bot-field" /></label></p>
          <input required name="email" type="email" placeholder="Seu e-mail" className="flex-1 rounded-full border border-slate-300 px-4 py-2" />
          <button className="rounded-full bg-indigo-600 text-white px-5 py-2 font-semibold hover:bg-indigo-700" type="submit">Assinar</button>
        </form>
        <small>© {new Date().getFullYear()} Clube dos Beta Testers. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Logos />
      <SectionComoFunciona />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Carregando...</div>}>
        <SectionBeneficios />
      </Suspense>
      <SectionEmpresas />
      <SectionPlanos />
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Carregando depoimentos...</div>}>
        <Depoimentos />
      </Suspense>
      <Suspense fallback={<div className="text-center py-12 text-slate-500">Carregando FAQ...</div>}>
        <FAQ />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

// Componentes adicionais
function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const dismissed = localStorage.getItem('announce.dismiss');
    if (dismissed === '1') setOpen(false);
  }, []);
  const close = () => { setOpen(false); localStorage.setItem('announce.dismiss','1'); };
  if (!open) return null;
  return (
    <div className="w-full bg-indigo-600 text-white text-sm">
      <div className="max-w-6xl mx-auto px-5 py-2 flex items-center justify-between">
        <span>Novidade: Lançamento do Premium com desconto de estreia.</span>
        <button onClick={close} className="opacity-80 hover:opacity-100">Fechar</button>
      </div>
    </div>
  );
}

function Logos() {
  const marcas = ['Acme', 'Globex', 'Umbrella', 'Initech', 'Hooli', 'Soylent'];
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-center text-slate-500 mb-4">Marcas que confiam</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center opacity-80">
          {marcas.map((m) => (
            <div key={m} className="text-center text-slate-400 font-semibold border border-slate-200 rounded-lg py-3 bg-white">{m}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
