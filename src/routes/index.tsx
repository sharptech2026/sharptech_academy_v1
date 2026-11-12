import { createFileRoute } from "@tanstack/react-router";
import { Academy } from "@/components/academy";
import { Splash } from "@/components/splash";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <Splash />;
  if (!user) return <RedirectToSignIn />;
  return <Academy />;
}
