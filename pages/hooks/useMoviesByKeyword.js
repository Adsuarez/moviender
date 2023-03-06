//react
import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3";
const END_POINT = "/search/movie";
const LANGUAGE = "es-US";

export function useMoviesByKeyword(keyword) {
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    if (keyword === "") return setFoundMovies([]);

    fetch(
      `${API}${END_POINT}?api_key=${API_KEY}&language=${LANGUAGE}&query=${keyword}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setFoundMovies(data))
      .catch((error) => console.error(error));
  }, [keyword]);

  return foundMovies.results;
}
