export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade – VYRRA</h1>

      <p className="mb-4">
        A VYRRA respeita sua privacidade. Esta Política descreve como coletamos,
        usamos e protegemos suas informações.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Dados coletados</h2>
      <p className="mb-4">
        Coletamos nome, e-mail e foto de perfil fornecidos via autenticação
        com Google (OAuth).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso das informações</h2>
      <p className="mb-4">
        Utilizamos seus dados exclusivamente para autenticação e acesso ao
        sistema. Não vendemos nem compartilhamos informações com terceiros.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Armazenamento</h2>
      <p className="mb-4">
        Os dados são armazenados com segurança utilizando infraestrutura
        Supabase.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Exclusão de dados</h2>
      <p className="mb-4">
        Você pode solicitar a exclusão da sua conta entrando em contato pelo
        e-mail: lamont.henrique@gmail.com
      </p>

      <p className="mt-8 text-sm opacity-60">
        Última atualização: 2026
      </p>
    </main>
  );
}