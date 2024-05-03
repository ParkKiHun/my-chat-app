import ChatPage from "@/app/api/(chat)/page";
import type { Session } from "next-auth";

export default function SessionData({ session }: { session: Session | null }) {
  if (session?.user) {
    return <ChatPage />;
  }

  return (
    <p>
      No session data, please <em>Sign In</em> first.
    </p>
  );
}
