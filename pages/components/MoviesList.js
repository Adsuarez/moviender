import FetchMovies from "../services/FetchMovies";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";
import FeelingIdFinder, { FEELINGS } from "../services/FeelingIdFInder";

const FEELINGS_ICONS = {
  "❤️": "fa-solid fa-heart",
  "🍿": "fa-solid fa-popcorn",
  "❌": "fa-solid fa-thumbs-down",
};

export default function MoviesList({ myMovies }) {
  const { movies } = FetchMovies();
  let feelingMessage = null;
  return (
    <>
      {movies.map((movie) => {
        const feelingResponse = FeelingIdFinder(movie.id, myMovies);
        console.log(feelingResponse);
        return (
          <div key={movie.id} className="singleMovie">
            <p>{movie.title}</p>
            <section className="movieImgButtons">
              <PosterImage path={movie.poster_path} title={movie.title} />
              {feelingResponse === undefined ? (
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

/*
const emoji = FeelingIdFinder(movie.id, myMovies);
        emoji ? (feelingMessage = `i ${emoji} this`) : (feelingMessage = null);

        <p>{feelingMessage}</p>

              {emoji ?? <ActionButtons id={movie.id} />}
*/
