import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react';

export function AuthWidget() {
  const [user, setUser] = useState<null | { email: string }>(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on('login', (user) => {
      setUser(user);
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
