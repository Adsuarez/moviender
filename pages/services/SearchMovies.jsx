import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/popular";
const LANGUAGE = "es-CO";
const INITIAL_PAGE = 1;

export default function FetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return { movies };
}
