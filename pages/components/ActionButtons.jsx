import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'

export function ActionButtons({ movie }) {
  const { user, setMyMovies, myMovies } = useContext(UserContext);
  const router = useRouter();

  const handleClick = (event) => {
    if (!user) return router.push("/login");

    movie.feeling = event.target.name;

    if (myMovies.length === 0) return setMyMovies([movie]);

    const evaluateRepetId = myMovies.map(
      (myMovie) => myMovie.id !== movie.id || false
    );

    if (evaluateRepetId.every((item) => item === true))
      return setMyMovies([...myMovies, movie]);
  };

  return (
    <section className={styles.singleMovie}>
      <button name="like" onClick={handleClick}>
        Like ❤️
      </button>
      <button name="desire" onClick={handleClick}>
        Desire 👀📽️
      </button>
      <button name="dislike" onClick={handleClick}>
        Dislike ❌
      </button>
    </section>
  );
}
