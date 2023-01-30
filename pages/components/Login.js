import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ComponentStyles from "../../styles/Buttons.module.css";
import { useRouter } from "next/router";
import styles from "../../styles/PageLogin.module.css";

export default function Login({ onLogin }) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const login = (event) => {
    event.preventDefault();

    //conect to BD to get the user

    //Navigate to home
    router.push("/");
    
    onLogin && onLogin();

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
    <div className={styles.div}>
      <form className={ComponentStyles.actionButtons}>
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </form>
    </div>
  );
}