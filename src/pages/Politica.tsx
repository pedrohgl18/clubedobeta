import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import netlifyIdentity from 'netlify-identity-widget';

const POLICY_VERSION = 'v1.0-2025-08-13';

export default function PoliticaPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<any>(() => netlifyIdentity.currentUser());
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const u = netlifyIdentity.currentUser();
    if (!u) { navigate('/'); return; }
    setUser(u);
  }, [navigate]);

  const accept = async () => {
    if (!user) return;
    setSaving(true); setMsg('');
    try {
      await user.update({ data: { acceptedPolicyVersion: POLICY_VERSION, acceptedPolicyAt: new Date().toISOString() } });
      setMsg('Política aceita.');
      const backTo = (location.state as any)?.from || '/onboarding';
      navigate(backTo);
    } catch (e) {
      setMsg('Não foi possível registrar seu aceite.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-extrabold text-slate-900">Política de Privacidade e NDA</h1>
        <p className="text-slate-600 mt-2">Versão {POLICY_VERSION}</p>

        <section className="mt-6 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">1. Introdução</h2>
          <p className="text-slate-700 text-sm">Nós valorizamos sua privacidade e a confidencialidade dos projetos compartilhados para testes. Esta política explica como tratamos seus dados e estabelece um Acordo de Confidencialidade (NDA) entre você e o Clube dos Beta Testers.</p>

          <h2 className="text-lg font-bold text-slate-900">2. Dados que coletamos</h2>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>Dados de conta: e-mail, nome público (displayName).</li>
            <li>Preferências: áreas de interesse e preferências de comunicação.</li>
            <li>Uso do serviço: métricas de interação necessárias à operação da plataforma.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900">3. Uso dos dados</h2>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>Gerenciar sua conta e oferecer testes alinhados ao seu perfil.</li>
            <li>Comunicar convites, atualizações e pesquisas de satisfação (opt-in).</li>
            <li>Melhorar nossos serviços, sempre respeitando a legislação aplicável.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900">4. Compartilhamento</h2>
          <p className="text-slate-700 text-sm">Compartilhamos dados mínimos necessários com empresas parceiras para execução dos testes, como seu displayName e respostas enviadas. Jamais venderemos seus dados pessoais.</p>

          <h2 className="text-lg font-bold text-slate-900">5. Retenção e segurança</h2>
          <p className="text-slate-700 text-sm">Armazenamos os dados pelo tempo necessário à finalidade informada ou exigência legal, aplicando práticas de segurança razoáveis para protegê-los.</p>

          <h2 className="text-lg font-bold text-slate-900">6. Seus direitos</h2>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>Acessar, corrigir ou excluir seus dados, dentro dos limites legais e técnicos.</li>
            <li>Revogar consentimentos a qualquer momento.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900">7. NDA — Acordo de Confidencialidade</h2>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>Você concorda em manter confidenciais todas as informações, materiais, builds, ideias, roadmaps, credenciais e quaisquer dados não públicos aos quais tiver acesso durante os testes.</li>
            <li>Não é permitido copiar, fotografar, gravar, distribuir, publicar ou compartilhar conteúdo dos testes sem autorização prévia por escrito.</li>
            <li>A obrigação de confidencialidade permanece por 5 anos após o término da sua participação ou até que as informações se tornem públicas por meios legítimos.</li>
            <li>Em caso de violação, você poderá ser removido do programa e responsabilizado por perdas e danos, conforme a legislação aplicável.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900">8. Aceite</h2>
          <p className="text-slate-700 text-sm">Ao clicar em “Aceitar e continuar”, você declara ter lido e concordado com esta Política de Privacidade e com o NDA, autorizando o tratamento dos dados conforme descrito.</p>

          {msg && <p className="text-sm text-slate-700">{msg}</p>}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={accept} disabled={saving} className="rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-50">Aceitar e continuar</button>
            <button onClick={() => navigate(-1)} className="text-slate-600 hover:text-slate-800">Voltar</button>
          </div>
        </section>
      </div>
    </main>
  );
}
