import styles from "./header.module.css";

import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { GlobalContext } from "../../../services/context";
import Button from "../../ui/buttons";

export default function Header() {
  const router = useRouter();
  const { user, setUser } = useContext(GlobalContext);

  const handleClick = () => {
    setUser({});
  };

  useEffect(() => {
    Object.keys(user).length === 0 && router.push("/");
  }, [user]);

  return (
    <header className={styles.container}>
      <div className={styles.invisible}></div>
      <h1 className={styles.title}>MyRealFood Test</h1>
      <div className={styles.user}>
        {Object.keys(user).length > 0 && (
          <>
            <p>{user.nombre}</p>
            <img src={user.imagen} className={styles.avatar} />
            <Button onClick={handleClick}>Log out</Button>
          </>
        )}
      </div>
    </header>
  );
}
