import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const user = useMemo(() => netlifyIdentity.currentUser() as any, []);
  const [displayName, setDisplayName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [notify, setNotify] = useState(true);
  const [agree, setAgree] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    const meta = user?.user_metadata || {};
    if (meta.onboarded) {
      navigate('/perfil');
      return;
    }
    if (meta.displayName) setDisplayName(meta.displayName);
    if (Array.isArray(meta.interests)) setInterests(meta.interests);
    if (typeof meta.notify === 'boolean') setNotify(meta.notify);
  }, [user, navigate]);

  const toggleInterest = (v: string) => {
    setInterests((prev) => (prev.includes(v) ? prev.filter((i) => i !== v) : [...prev, v]));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!agree) { setError('É necessário aceitar os termos.'); return; }
    setSaving(true); setError('');
    try {
      await user.update({ data: { displayName, interests, notify, onboarded: true } });
      navigate('/perfil');
    } catch (err) {
      setError('Não foi possível salvar suas preferências.');
    } finally {
      setSaving(false);
    }
  };

  const tags = ['Mobile', 'Web', 'IA', 'Games', 'Fintech', 'Educação'];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-extrabold text-slate-900">Bem-vindo! Vamos configurar seu perfil</h1>
        <p className="text-slate-600 mt-1">Conte um pouco sobre você para sugerirmos testes compatíveis.</p>
        <form onSubmit={submit} className="mt-6 space-y-4 bg-white rounded-xl border border-slate-200 p-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Como quer ser chamado?</label>
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Seu nome ou apelido" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Áreas de interesse</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <button type="button" key={t} onClick={() => toggleInterest(t)} className={`px-3 py-1 rounded-full text-sm border ${interests.includes(t) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300'}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input id="notify" type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} />
            <label htmlFor="notify" className="text-sm text-slate-700">Quero receber convites por e-mail</label>
          </div>
          <div className="flex items-center gap-2">
            <input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label htmlFor="agree" className="text-sm text-slate-700">Li e aceito os termos e a política de privacidade</label>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex items-center gap-3">
            <button type="submit" disabled={saving || !agree} className="rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-50">Salvar e continuar</button>
            <button type="button" onClick={() => navigate('/')} className="text-slate-600 hover:text-slate-800">Cancelar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
