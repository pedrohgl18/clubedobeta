import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from './components/AuthModal';

type IdentityUser = { email?: string } | null;

export function AuthWidget() {
  const [user, setUser] = useState<IdentityUser>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('login', (u: any) => {
      setUser(u);
      netlifyIdentity.close();
      const meta = u?.user_metadata || {};
      const accepted = Boolean(meta.acceptedPolicyVersion);
      if (!accepted) {
        navigate('/politica', { state: { from: '/onboarding' } } as any);
        return;
      }
      const onboarded = meta.onboarded === true;
      navigate(onboarded ? '/perfil' : '/onboarding');
    });
    netlifyIdentity.on('signup', () => {
      // Após cadastro com e-mail/senha o usuário precisa confirmar o e-mail.
      netlifyIdentity.close();
      navigate('/verifique-email');
    });
    netlifyIdentity.on('logout', () => {
      setUser(null);
    });
    setUser(netlifyIdentity.currentUser());
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('signup');
      netlifyIdentity.off('logout');
    };
  }, []);

  return (
    <div>
      {user ? (
        <div className="inline-flex items-center gap-2">
          <span className="text-sm text-slate-700">{user.email}</span>
          <button onClick={() => netlifyIdentity.logout()} className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-sm hover:bg-slate-200">Sair</button>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700">Entrar</button>
        </div>
      )}
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
