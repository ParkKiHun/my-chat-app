import { SignIn } from "./components/github-sign-in";
import { SignIn2 } from "./components/keycloak-sign-in";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SignIn />
      <SignIn2 />
    </main>
  );
}
