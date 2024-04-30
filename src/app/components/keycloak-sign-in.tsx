import { signIn } from "@/auth";

export function SignIn2() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <button type="submit">Signin with KeyCloak</button>
    </form>
  );
}
