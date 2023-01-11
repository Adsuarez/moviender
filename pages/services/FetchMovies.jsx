import { useState, useEffect } from "react";
import Image from "next/image";
import { ActionButtons } from "../components/ActionButtons";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/popular";
const LANGUAGE = "es-CO";
const IMG_SRC = "https://image.tmdb.org/t/p/original";
const INITIAL_PAGE = 1;

export function FetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));

    console.log("en el useEffect");
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Image
            width={80}
            height={100}
            alt={movie.title}
            src={`${IMG_SRC}${movie.poster_path}`}
          ></Image>
          <ActionButtons />
        </div>
      ))}
    </>
  );
}
