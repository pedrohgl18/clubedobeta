export default function FAQ() {
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
