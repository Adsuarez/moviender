import FetchMovies from "../services/FetchMovies";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";
import FeelingIdFinder from "../services/FeelingIdFInder";
import styles from "../../styles/MoviesList.module.css";

const FEELINGS_ICONS = {
  like: "fa-solid fa-heart",
  desire: "fa-solid fa-box-open",
  dislike: "fa-solid fa-thumbs-down",
};

export default function MoviesList({ getAllMovies, myMovies, user }) {
  let movies = [];

  if (getAllMovies) {
    movies = FetchMovies();
  }

  return (
    <>
      {movies.map((movie) => {
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
      })}
    </>
  );
}
