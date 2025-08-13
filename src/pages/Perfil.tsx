import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

export default function PerfilPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(() => netlifyIdentity.currentUser());
  const [displayName, setDisplayName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [notify, setNotify] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const u = netlifyIdentity.currentUser() as any;
    if (!u) { navigate('/'); return; }
    setUser(u);
    const meta = u?.user_metadata || {};
    setDisplayName(meta.displayName || '');
    setInterests(Array.isArray(meta.interests) ? meta.interests : []);
    setNotify(typeof meta.notify === 'boolean' ? meta.notify : true);
  }, [navigate]);

  const save = async () => {
    if (!user) return;
    setSaving(true); setMsg('');
    try {
      await user.update({ data: { displayName, interests, notify, onboarded: true } });
      setMsg('Perfil atualizado com sucesso.');
    } catch {
      setMsg('Não foi possível atualizar.');
    } finally {
      setSaving(false);
    }
  };

  const toggleInterest = (v: string) => {
    setInterests((prev) => (prev.includes(v) ? prev.filter((i) => i !== v) : [...prev, v]));
  };

  const tags = ['Mobile', 'Web', 'IA', 'Games', 'Fintech', 'Educação'];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-extrabold text-slate-900">Seu perfil</h1>
        <p className="text-slate-600 mt-1">E-mail: {user?.email}</p>
        <div className="mt-6 space-y-4 bg-white rounded-xl border border-slate-200 p-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Nome público</label>
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Interesses</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <button type="button" key={t} onClick={() => toggleInterest(t)} className={`px-3 py-1 rounded-full text-sm border ${interests.includes(t) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300'}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input id="notify" type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} />
            <label htmlFor="notify" className="text-sm text-slate-700">Receber convites por e-mail</label>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={save} disabled={saving} className="rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-50">Salvar</button>
            <button onClick={() => navigate('/')} className="text-slate-600 hover:text-slate-800">Voltar</button>
          </div>
          {msg && <p className="text-sm text-slate-700">{msg}</p>}
        </div>
      </div>
    </main>
  );
}
