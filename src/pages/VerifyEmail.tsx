import { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export default function VerifyEmailPage() {
  useEffect(() => {
    // Garante que o widget esteja pronto para capturar o token quando o usuário clicar no link do e-mail.
    netlifyIdentity.init();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-xl mx-auto px-5 py-16 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900">Confirme seu e-mail</h1>
        <p className="mt-2 text-slate-600">
          Enviamos um link de confirmação para o seu e-mail. Abra a mensagem e clique em "Confirmar" para ativar sua conta.
        </p>
        <div className="mt-6">
          <p className="text-sm text-slate-600">Após confirmar, você será redirecionado de volta e faremos seu onboarding automaticamente.</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/" className="text-slate-600 hover:text-slate-800">Voltar à página inicial</a>
        </div>
      </div>
    </main>
  );
}
