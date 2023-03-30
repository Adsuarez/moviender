//react
import { useContext, useEffect } from "react";

//next
import { useRouter } from "next/router";

//styles
import styles from "styles/Buttons.module.css";

//context
import { UserContext } from "context/UserContext";
import { getUser } from "services/users.js";

export default function Login({ onLogin }) {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const login = (event) => {
    event.preventDefault();

    getUser().then((userInProcess) => {
      setUser(userInProcess);
      userInProcess !== null && router.push("/"); //Navigate to home
    });

    onLogin && onLogin(); //to close Modal

    return user;
  };

  const logout = (event) => {
    event.preventDefault();
    return setUser(null);
  };

  return (
    <div className={styles.div}>
      <p>{user?.userName}</p>
      <p>{user?.email}</p>
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
