import Head from "next/head";

import LoginView from "../components/auth";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyRealFood - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginView />
    </div>
  );
}
