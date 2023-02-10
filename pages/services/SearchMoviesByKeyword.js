//https://api.themoviedb.org/3/search/keyword?api_key=3d74f79a7a72cdfde4ba40b495bdde84&query=bat&page=1

import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3";
const END_POINT = "/search/keyword";
const LANGUAGE = "es-CO";

export default function SearchMoviesByKeyword(keyword) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}${END_POINT}?api_key=${API_KEY}&query=${keyword}page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, [keyword]);

  return movies;
}
