import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/find/";
const LANGUAGE = "es-CO";
const INITIAL_PAGE = 1;
//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US&external_source=imdb_id

export default function FetchMovies(ID) {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    fetch(`${API}{${ID}}?api_key=${API_KEY}&language=${LANGUAGE}&external_source=imdb_id`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [ID]);

  return movie;
}
