import FetchMovies from "../services/FetchMovies";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";

export default function MoviesList() {
  const { movies } = FetchMovies();

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="singleMovie">
          <p>{movie.title}</p>
          <section className="movieImgButtons">
            <PosterImage path={movie.poster_path} title={movie.title} />
            <ActionButtons id={movie.id} />
          </section>
        </div>
      ))}
    </>
  );
}
