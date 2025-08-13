import { Link } from 'react-router-dom';

export default function EmpresasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-gray-900">Clube do Beta</Link>
          <nav className="hidden md:flex gap-4 text-gray-700">
            <Link className="hover:text-indigo-700" to="/">Início</Link>
            <a className="hover:text-indigo-700" href="#como-funciona">Como funciona</a>
            <a className="hover:text-indigo-700" href="#faq">FAQ</a>
          </nav>
          <Link to="/" className="rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-semibold">Quero testar</Link>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Valide seu produto com testers qualificados</h1>
            <p className="mt-3 text-slate-700">Conecte-se com pessoas reais, receba feedbacks acionáveis e evolua antes de lançar.</p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc pl-5">
              <li>Recrutamento e triagem de testers.</li>
              <li>Roteiros e templates para feedbacks objetivos.</li>
              <li>Curadoria de insights e priorização.</li>
            </ul>
          </div>
          <div className="rounded-2xl h-56 bg-[radial-gradient(600px_200px_at_50%_-40%,rgba(99,102,241,0.2),transparent),linear-gradient(to_bottom_right,#eef2ff,#e0f2fe)] shadow-inner border border-white" />
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-xl font-bold text-slate-900">Como funciona</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-slate-700">
            <li>Definimos objetivos e público-alvo.</li>
            <li>Selecionamos testers e configuramos o fluxo.</li>
            <li>Coletamos, curamos e priorizamos feedbacks.</li>
            <li>Entregamos um sumário executivo com próximos passos.</li>
          </ol>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-xl font-bold text-slate-900">Fale com a gente</h2>
          <form name="parcerias" method="POST" data-netlify="true" netlify-honeypot="campo-extra" className="mt-4 grid md:grid-cols-2 gap-3 max-w-2xl">
            <input type="hidden" name="form-name" value="parcerias" />
            <p className="hidden"><label>Não preencher: <input name="campo-extra" /></label></p>
            <input required name="empresa" placeholder="Empresa" className="rounded-lg border border-slate-300 px-3 py-2" />
            <input required type="email" name="email" placeholder="E-mail" className="rounded-lg border border-slate-300 px-3 py-2" />
            <input name="site" placeholder="Site (opcional)" className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2" />
            <textarea name="objetivos" placeholder="Objetivos (breve)" className="rounded-lg border border-slate-300 px-3 py-2 md:col-span-2" rows={3} />
            <button type="submit" className="md:col-span-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700">Enviar</button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500">
        <p>© {new Date().getFullYear()} Clube dos Beta Testers</p>
      </footer>
    </main>
  );
}
