import CustomLink from "@/components/custom-link";
import SessionData from "@/components/session-data";
import { auth } from "auth";

export default async function Page() {
  const session = await auth();
  return <SessionData session={session} />;
}
