import FetchMovies from "../services/FetchMovies";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";
import FeelingIdFinder, { FEELINGS } from "../services/FeelingIdFInder";

export default function MoviesList({ myMovies }) {
  const { movies } = FetchMovies();
  let feelingMessage = null;
  return (
    <>
      {movies.map((movie) => {
        const emoji = FeelingIdFinder(movie.id, myMovies);
        emoji
          ? (feelingMessage = `i ${emoji} this`)
          : (feelingMessage = null);

        return (
          <div key={movie.id} className="singleMovie">
            <p>{movie.title}</p>
            <p>{feelingMessage}</p>
            <section className="movieImgButtons">
              <PosterImage path={movie.poster_path} title={movie.title} />
              {emoji ?? <ActionButtons id={movie.id} />}
            </section>
          </div>
        );
      })}
    </>
  );
}
