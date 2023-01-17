import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const login = (event) => {
    event.preventDefault();

    //conect to BD to get the user

    //Navigate to home
    router.push("/");

    return setUser({
      id: "1001000",
      name: "Miler",
      email: "usuario@usuario.com",
      instagram: "https://www.instagram.com/usuario_usuario/",
    });
  };

  const logout = (event) => {
    event.preventDefault();
    return setUser(null);
  };

  return (
    <div>
      <h1>Login in Moviender</h1>
      <form className={styles.buttons}>
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </form>
    </div>
  );
}
