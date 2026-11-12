import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import bolt from "@/assets/bolt.png";
import { useApplyTheme } from "@/components/settings";
import { Splash } from "@/components/splash";
import { Button } from "@/components/ui/button";
import { authClient, authEnabled, GROK_PROVIDERS, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  useApplyTheme();
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <Splash />;
  if (user) return <Navigate to="/" />;
  return <Login />;
}

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("A palavra-passe precisa de pelo menos 8 caracteres.");
      return;
    }
    setBusy(true);
    const result =
      mode === "up"
        ? await authClient.signUp.email({
            email: email.trim(),
            password,
            name: name.trim() || email.trim().split("@")[0] || "Aluno",
            callbackURL: "/",
          })
        : await authClient.signIn.email({
            email: email.trim(),
            password,
            callbackURL: "/",
          });
    if (result.error) {
      setBusy(false);
      setError(messageFor(result.error.message, mode));
      return;
    }
    window.location.assign("/");
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-5 py-10">
      <img src={bolt} alt="" className="h-16 w-16" />
      <p className="mt-5 text-sm font-bold tracking-wide text-primary">SharpTech Academy</p>
      <h1 className="font-display mt-2 text-4xl">{mode === "in" ? "Entra na tua conta." : "Cria a tua conta."}</h1>
      <p className="mt-3 text-muted">O percurso, o XP e a sequência ficam ligados a ti.</p>

      {authEnabled ? (
        <>
          <form onSubmit={onSubmit} className="mt-6 grid gap-3">
            {mode === "up" ? (
              <label className="grid gap-1 text-sm font-bold">
                Nome
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value.slice(0, 40))}
                  autoComplete="name"
                  className="h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
                />
              </label>
            ) : null}
            <label className="grid gap-1 text-sm font-bold">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className="h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
              />
            </label>
            <label className="grid gap-1 text-sm font-bold">
              Palavra-passe
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete={mode === "up" ? "new-password" : "current-password"}
                className="h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
              />
            </label>
            {error ? <p className="rounded-2xl bg-bad-bg px-4 py-3 text-sm font-semibold text-bad">{error}</p> : null}
            <Button type="submit" disabled={busy}>
              {busy ? "A entrar..." : mode === "in" ? "Entrar" : "Criar conta"}
            </Button>
          </form>
          <button
            type="button"
            className="press mt-3 h-12 text-sm font-bold text-primary"
            onClick={() => {
              setMode((value) => (value === "in" ? "up" : "in"));
              setError(null);
            }}
          >
            {mode === "in" ? "Ainda não tenho conta" : "Já tenho conta"}
          </button>
          <div className="my-5 flex items-center gap-3 text-sm text-muted">
            <span className="h-px flex-1 bg-line" />
            ou
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="grid gap-3">
            {GROK_PROVIDERS.map((provider) => (
              <Button
                key={provider.providerId}
                variant="surface"
                onClick={() => {
                  void signIn(provider.providerId, { callbackURL: "/" }).catch((reason: unknown) => {
                    setError(reason instanceof Error ? reason.message : "Não foi possível entrar.");
                  });
                }}
              >
                Continuar com {provider.label}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-6 text-sm text-muted">O início de sessão ainda não está ativo.</p>
      )}
    </main>
  );
}

function messageFor(raw: string | undefined, mode: "in" | "up") {
  const text = (raw ?? "").toLowerCase();
  if (text.includes("invalid") || text.includes("password") || text.includes("credential")) {
    return mode === "in" ? "Email ou palavra-passe incorretos." : "Não foi possível criar a conta. Confirma o email.";
  }
  if (text.includes("exist")) return "Já existe uma conta com este email.";
  return raw || "Não foi possível entrar.";
}
