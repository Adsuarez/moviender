import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import styles from "../../styles/Buttons.module.css";
import ModalAuth from "./ModalAuth";
import Login from "./Login";

export function ActionButtons({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { user, setMyMovies, myMovies } = useContext(UserContext);
  const router = useRouter();

  const handleClick = (event) => {
    //if (!user) return router.push("/login");
    if (!user) return setShowModal(true);

    movie.feeling = event.target.name;

    if (myMovies.length === 0) return setMyMovies([movie]);

    const evaluateRepetId = myMovies.map(
      (myMovie) => myMovie.id !== movie.id || false
    );

    if (evaluateRepetId.every((item) => item === true))
      return setMyMovies([...myMovies, movie]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.actionButtons}>
      <button name="like" onClick={handleClick}>
        Like ❤️
      </button>
      <button name="desire" onClick={handleClick}>
        Desire 🍿
      </button>
      <button name="dislike" onClick={handleClick}>
        Dislike ❌
      </button>
      {showModal && (
        <ModalAuth onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </ModalAuth>
      )}
    </section>
  );
}
