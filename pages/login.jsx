import { useContext, useRef, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import styles from '../styles/Login.module.css'

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const LoginBtnRef = useRef();
  const LogoutBtnRef = useRef();

  // //pendiente
  // useEffect(() => {
  //   return user
  // }, [user])
  

  const login = (event) => {
    event.preventDefault();

    LoginBtnRef.current.classList.remove("visible")
    LoginBtnRef.current.classList.add("hidden")
    console.log(LoginBtnRef)
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
    LogoutBtnRef.current.classList.remove("hidden")
    LogoutBtnRef.current.classList.add("visible")
    return setUser(null);
  };

  return (
    <div>
      <h1>Login in Moviender</h1>
      <form>
        <button ref={LoginBtnRef} className={styles.visible} onClick={login}>Login</button>
        <button ref={LogoutBtnRef} className={styles.visible} onClick={logout}>Logout</button>
      </form>
    </div>
  );
}
