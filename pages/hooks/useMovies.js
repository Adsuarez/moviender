import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/popular";
const LANGUAGE = "es-CO";
const INITIAL_PAGE = 1;

export default function useMovies(foundMovies) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  //setMovies((prev) => [...prev, ...data.results])//Add new movies when is

  useEffect(() => {
    if (foundMovies === null) {
      fetch(`${API}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`)
        .then((response) => response.json())
        .then((data) =>
          setMovies((prev) => {
            if (prev.find(element => element === data.results[0]) === undefined) return [...prev, ...data.results];
          })
        )
        .catch((error) => console.error(error));
    }
  }, [page, foundMovies]);

  const handleScroll = () => {
    const height = document.documentElement.scrollHeight;
    const top = document.documentElement.scrollTop;
    const screen = window.innerHeight;

    if (screen + top + 1 >= height) return setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //unsuscribe
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { movies };
}
