import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import { FeelControl } from "./FeelControl";

export function ActionButtons({ movie }) {
  const { user, setMyMovies, myMovies } = useContext(UserContext);
  const router = useRouter();

  const handleClick = (event) => {
    if (!user) return router.push("/login");

    movie.feeling = FeelControl(event.target.name);

    if (myMovies.length === 0) return setMyMovies([movie]);

    const evaluateRepetId = myMovies.map(
      (myMovie) => myMovie.id !== movie.id || false
    );

    if (evaluateRepetId.every((item) => item === true))
      return setMyMovies([...myMovies, movie]);
  };

  return (
    <>
      <button name="likeButton" onClick={handleClick}>
        Like ❤️
      </button>
      <button name="desireButton" onClick={handleClick}>
        Desire 👀📽️
      </button>
      <button name="dislikeButton" onClick={handleClick}>
        Dislike ❌
      </button>
    </>
  );
}
