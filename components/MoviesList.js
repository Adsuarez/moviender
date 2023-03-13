//styles
import styles from "styles/MoviesList.module.css";

//components
import ActionButtons from "./ActionButtons";
import PosterImage from "./PosterImage";

//services
import FeelingIdFinder from "services/FeelingIdFInder";

//hooks
import useMovies from "hooks/useMovies";

//utils
import { LIKE, DESIRE, DISLIKE } from "utils/icons.js";

const FEELINGS_ICONS = {
  like: LIKE,
  desire: DESIRE,
  dislike: DISLIKE,
};

export default function MoviesList({ myMovies, user, foundMovies = null }) {
  const { movies = [] } = useMovies(foundMovies);

  const listMaker = (movie) => {
    const feelingResponse = FeelingIdFinder(movie.id, myMovies);

    return (
      <div key={movie.id} className={styles.singleMovie}>
        <p>{movie.title}</p>
        <section className={styles.movieImgButtons}>
          <PosterImage path={movie.poster_path} title={movie.title} />
          {user === null || feelingResponse === undefined ? (
            <ActionButtons id={movie.id} />
          ) : (
            <i className={FEELINGS_ICONS[feelingResponse]} />
          )}
        </section>
      </div>
    );
  };

  return (
    <>
      {foundMovies
        ? foundMovies.map((movie) => listMaker(movie))
        : movies.map((movie) => listMaker(movie))}
    </>
  );
}
