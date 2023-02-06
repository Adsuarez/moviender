import FetchMovies from "../services/FetchMovies";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";
import FeelingIdFinder from "../services/FeelingIdFInder";

export default function MoviesList({myMovies}) {
  const { movies } = FetchMovies();

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="singleMovie">
          <p>{movie.title}</p>
          <p>{FeelingIdFinder(movie.id, myMovies)}</p>
          <section className="movieImgButtons">
            <PosterImage path={movie.poster_path} title={movie.title} />
            <ActionButtons id={movie.id} />
          </section>
        </div>
      ))}
    </>
  );
}
