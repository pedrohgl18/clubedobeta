import { AuthWidget } from './AuthWidget';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { IconSparkles, IconRocket, IconShieldCheck } from '@tabler/icons-react';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-4xl md:text-6xl font-extrabold text-slate-900">Clube dos Beta Testers</motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.1}} className="mt-4 text-lg md:text-xl text-slate-600">Participe de testes exclusivos, ajude a melhorar produtos e ganhe benefícios!</motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}} className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700" href="#planos">Quero ser Beta Tester</a>
          <a className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100" href="#empresas">Sou uma empresa</a>
        </motion.div>
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
          <motion.div whileHover={{y:-4}} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconSparkles size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Testes exclusivos</h3>
            <p className="text-slate-600">Acesso a lançamentos antes do público.</p>
          </motion.div>
          <motion.div whileHover={{y:-4}} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconShieldCheck size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Recompensas</h3>
            <p className="text-slate-600">Badges, sorteios e reconhecimento.</p>
          </motion.div>
          <motion.div whileHover={{y:-4}} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <IconRocket size={20} />
            </div>
            <h3 className="font-semibold text-slate-900">Impacto real</h3>
            <p className="text-slate-600">Ajude produtos a ficarem melhores com seu feedback.</p>
          </motion.div>
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
  return (
    <section id="planos" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Planos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-900">Gratuito</h3>
            <p className="text-slate-600">Acesso a testes públicos</p>
            <strong className="block mt-2 text-slate-900">R$ 0/mês</strong>
          </div>
          <div className="rounded-xl border-2 border-indigo-500 bg-indigo-50 p-4">
            <h3 className="font-semibold text-slate-900">Premium</h3>
            <p className="text-slate-700">Acesso antecipado, badges, sorteios e prioridade</p>
            <strong className="block mt-2 text-slate-900">R$ 19/mês</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDepoimentos() {
  return (
    <section id="depoimentos" className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Depoimentos</h2>
        <blockquote className="rounded-xl border border-slate-200 bg-white p-4 mb-3">“Participei de 3 testes e adorei ver meu feedback virar features.” — Ana</blockquote>
        <blockquote className="rounded-xl border border-slate-200 bg-white p-4">“Recebemos insights valiosos antes do lançamento.” — Empresa X</blockquote>
      </div>
    </section>
  );
}

function SectionFAQ() {
  return (
    <section id="faq" className="py-12">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">FAQ</h2>
        <details className="rounded-lg border border-slate-200 bg-white p-4 mb-3">
          <summary className="cursor-pointer">O que é o Clube dos Beta Testers?</summary>
          <p className="text-slate-700 mt-2">Uma comunidade que conecta testers e empresas para validar produtos.</p>
        </details>
        <details className="rounded-lg border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer">Como viro Premium?</summary>
          <p className="text-slate-700 mt-2">Em breve integraremos pagamentos. Por ora, acompanhe as novidades.</p>
        </details>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-6 text-center text-slate-500">
      <div className="max-w-6xl mx-auto px-5">
        <small>© {new Date().getFullYear()} Clube dos Beta Testers. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
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
