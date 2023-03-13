//react
import { useContext } from "react";

//next
import { useRouter } from "next/router";

//styles
import styles from "styles/Buttons.module.css";

//context
import { UserContext } from "context/UserContext";

export default function Login({ onLogin }) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const login = (event) => {
    event.preventDefault();

    /*Here will be conection to BD to get the real user*/

    router.push("/"); //Navigate to home

    onLogin && onLogin();

    //Test user
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
      <form className={styles.actionButtons}>
        {!user ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </form>
    </div>
  );
}
