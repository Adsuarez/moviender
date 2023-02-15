//https://api.themoviedb.org/3/discover/movie?api_key=3d74f79a7a72cdfde4ba40b495bdde84&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=bat&with_watch_monetization_types=flatrate

import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3";
const END_POINT = "/discover/movie";
const FILTER_DEFAULT_OPTIONS = "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const FINAL_DEFAULT_OPTIONS = "with_watch_monetization_types=flatrate"
const LANGUAGE = "es-US";

export function useMoviesByKeyword(keyword) {
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}${END_POINT}?api_key=${API_KEY}&language=${LANGUAGE}&${FILTER_DEFAULT_OPTIONS}&with_keywords=${keyword}&${FINAL_DEFAULT_OPTIONS}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [keyword]);

  return foundMovies;
}

/*
const END_POINT = "/search/keyword";
const LANGUAGE = "es-CO";

export function useMoviesByKeyword(keyword) {
  const [foundMovies, setFoundMovies] = useState([]);

  useEffect(() => {
    fetch(`${API}${END_POINT}?api_key=${API_KEY}&query=${keyword}page=1`)
      .then((response) => response.json())
      .then((data) => setFoundMovies(data))
      .catch((error) => console.error(error));
  }, [keyword]);

  return foundMovies;
}
*/