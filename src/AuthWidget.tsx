import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react';

type IdentityUser = { email?: string } | null;

export function AuthWidget() {
  const [user, setUser] = useState<IdentityUser>(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('login', (u: any) => {
      setUser(u);
      netlifyIdentity.close();
    });
    netlifyIdentity.on('logout', () => {
      setUser(null);
    });
    setUser(netlifyIdentity.currentUser());
    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  return (
    <div style={{ margin: '1rem 0' }}>
      {user ? (
        <>
          <span>Bem-vindo, {user.email}!</span>
          <button onClick={() => netlifyIdentity.logout()} style={{ marginLeft: 8 }}>
            Sair
          </button>
        </>
      ) : (
        <button onClick={() => netlifyIdentity.open()}>Entrar / Registrar</button>
      )}
    </div>
  );
}
