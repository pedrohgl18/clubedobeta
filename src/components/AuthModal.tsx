import { Dialog } from '@headlessui/react';
import netlifyIdentity from 'netlify-identity-widget';

type Props = { open: boolean; onClose: () => void };

export default function AuthModal({ open, onClose }: Props) {
  const goGoogle = async () => {
    // Verifica se o provedor Google está habilitado antes de redirecionar
    try {
      const res = await fetch('/.netlify/identity/settings');
      if (res.ok) {
        const cfg = await res.json();
        const enabled = cfg?.external?.providers?.includes?.('google') || cfg?.external?.google?.enabled === true;
        if (enabled) {
          window.location.href = '/.netlify/identity/authorize?provider=google';
          return;
        }
      }
    } catch {}
    // Fallback: abre login padrão se Google não estiver habilitado
    netlifyIdentity.open('login');
    onClose();
  };
  const goLogin = () => {
    netlifyIdentity.open('login');
    onClose();
  };
  const goSignup = () => {
    netlifyIdentity.open('signup');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
          <Dialog.Title className="text-lg font-semibold text-slate-900">Entrar no Clube</Dialog.Title>
          <p className="mt-1 text-sm text-slate-600">Escolha como deseja continuar</p>
          <div className="mt-6 space-y-3">
            <button onClick={goGoogle} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5" />
              Continuar com Google
            </button>
            <button onClick={goLogin} className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700">Entrar com e-mail</button>
            <button onClick={goSignup} className="w-full rounded-lg bg-indigo-50 text-indigo-700 px-4 py-2 font-semibold hover:bg-indigo-100">Criar conta</button>
          </div>
          <p className="mt-4 text-xs text-slate-500">Ao continuar, você concorda com nossos termos e política de privacidade.</p>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
