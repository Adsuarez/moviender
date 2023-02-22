import { useState, useEffect } from "react";

const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/";
const LANGUAGE = "en-US";

export default function useMovie() {
  const [movie, setMovie] = useState(null);

  const getById = (id) => {
    fetch(`${API}${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));

    return movie;
  };
  //console.log(movie)
  return { getById, movie };
}

/*export default function useMovieById(ID) {
  const [foundMovie, setFoundMovie] = useState(null);

  useEffect(() => {
    if(ID === null) return setFoundMovie(null);

    fetch(`${API}${ID}?api_key=${API_KEY}&language=${LANGUAGE}`)
      .then((response) => response.json())
      .then((data) => setFoundMovie(data))
      .catch((error) => console.error(error));
  }, [ID]);

  return foundMovie;

}*/

/*const searchById = (id) => {
    fetch(`${API}${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));

    return movie;
  };

  return {
    searchById,
  };*/
