//react
import { useContext, useState } from "react";

//next
import { useRouter } from "next/router";

//styles
//import styles from "styles/Buttons.module.css";
import styles from "styles/Form.module.css";

//context
import { UserContext } from "context/UserContext";
import { getUser, createUser } from "services/users.js";

export default function Auth({ onLogin }) {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const signin = (event) => {
    event.preventDefault();

    createUser({ email, password }).then((response) => {
      if (!response) return console.log(response?.message);
      return console.log(response);
    });
  };

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
    <>
      <p>{user?.userName}</p>
      <p>{user?.email}</p>
      {!user ? (
        <>
          <div className={styles.div}>
            <h2>Login</h2>
            <form className={styles.form}>
              <input type="text" placeholder="Write your email" />
              <input placeholder="Write your password" type="password" />
              <p>
                🙁 We are under construction 👨‍💻, please just click on the Log in
                button 👇
              </p>
              <button onClick={login}>Log in</button>
            </form>
          </div>
          <div className={styles.div}>
            <h2>Register</h2>
            <form className={styles.form}>
              <input
                name="email"
                type="text"
                placeholder="Write your email"
                onChange={handleEmail}
              />
              <input
                name="password"
                type="password"
                placeholder="Write your password"
                onChange={handlePassword}
              />
              <button onClick={signin}>Sign in</button>
            </form>
          </div>
        </>
      ) : (
        <form className={styles.form}>
          <button onClick={logout}>Logout</button>
        </form>
      )}
    </>
  );
}
