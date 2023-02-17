import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/";
const LANGUAGE = "en-US";

export default function useMovieById() {
  const [movie, setMovie] = useState({});

  const searchById = (id) => {
    fetch(`${API}${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));

    return movie;
  };

  return {
    searchById,
  };
}
