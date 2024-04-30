import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_ID as string,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET as string,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER as string,
    }),
  ],
});
