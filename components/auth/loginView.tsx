import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Styles from "./loginView.module.css";
import Button from "../ui/buttons/";

import { GlobalContext } from "../../services/context";

import { loginWithGoogle } from "../../services/firebase/auth";

export default function LoginView() {
  const { user, setUser } = useContext(GlobalContext);
  const router = useRouter();

  const handleClick = () => {
    loginWithGoogle()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Object.keys(user).length > 0 && router.push("main");
  }, [user]);

  return (
    <div className={Styles.container}>
      <h1>Task manager</h1>
      {Object.keys(user).length === 0 && (
        <Button onClick={handleClick}>Login with Google</Button>
      )}
    </div>
  );
}
