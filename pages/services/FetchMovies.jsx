import { useState, useEffect } from "react";
import { ActionButtons } from "../components/ActionButtons";
import PosterImage from "../components/PosterImage";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/popular";
const LANGUAGE = "es-CO";
const INITIAL_PAGE = 1;

export function FetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="singleMovie">
          <p>{movie.title}</p>
          <section className="movieImgButtons">
            <PosterImage path={movie.poster_path} title={movie.title} />
            <ActionButtons movie={movie} />
          </section>
        </div>
      ))}
    </>
  );
}
