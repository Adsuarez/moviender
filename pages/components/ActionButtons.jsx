import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "../../styles/Buttons.module.css";
import ModalAuth from "./ModalAuth";
import Login from "./Login";

export function ActionButtons({ id }) {
  const [showModal, setShowModal] = useState(false);
  const { user, setMyMovies, myMovies } = useContext(UserContext);

  const handleClick = (event) => {
    if (!user) return setShowModal(true);

    const feeling = event.target.name;

    if (myMovies.length === 0)
      return setMyMovies([
        {
          id,
          feeling,
        },
      ]);

    const evaluateRepetId = myMovies.map(
      (myMovie) => myMovie.id !== id || false
    );

    if (evaluateRepetId.every((item) => item === true))
      return setMyMovies([
        ...myMovies,
        {
          id,
          feeling,
        },
      ]);
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
