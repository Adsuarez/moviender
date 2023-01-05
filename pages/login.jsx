import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import styles from "../styles/Login.module.css";

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  const login = (event) => {
    event.preventDefault();
    //conect to BD to get the user
    return setUser({
      id: "1001000",
      name: "Andres",
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
          <button onClick={login}>
            Login
          </button>
        ) : (
          <button onClick={logout}>
            Logout
          </button>
        )}
      </form>
    </div>
  );
}