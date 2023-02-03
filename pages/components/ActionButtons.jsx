import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "../../styles/Buttons.module.css";
import ModalAuth from "./ModalAuth";
import Login from "./Login";
import MyMoviesSaver from "../services/MyMoviesSaver";

export function ActionButtons({ id }) {
  const [showModal, setShowModal] = useState(false);
  const { user, setMyMovies, myMovies } = useContext(UserContext);

  const handleClick = (event) => {
    if (!user) return setShowModal(true);
    const feeling1 = event.target.name;

    return MyMoviesSaver(id, feeling1, myMovies, setMyMovies);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.actionButtons}>
      <button name={"like"} onClick={handleClick}>
        Like ❤️
      </button>
      <button name={"desire"} onClick={handleClick}>
        Desire 🍿
      </button>
      <button name={"dislike"} onClick={handleClick}>
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
