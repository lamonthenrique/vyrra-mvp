"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-3xl font-semibold">VYRRA</h1>

        <p className="mt-2 text-white/70">
          Seu maior inimigo é a versão de ontem.
        </p>

        <button
          onClick={signInWithGoogle}
          className="mt-6 w-full rounded-xl bg-white text-black font-medium py-3 hover:bg-white/90"
        >
          Entrar com Google
        </button>

        <p className="mt-4 text-xs text-white/50">
          Beta fechado.
        </p>
      </div>
    </main>
  );
}