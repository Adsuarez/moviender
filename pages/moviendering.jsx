import FetchMovies from "./services/FetchMovies.jsx";
import { useEffect } from "react";

export default function MovienderingPage() {
  /*const movies = Promise.resolve(FetchMovies()).then((values) => {
    console.log(values);
  });*/

  //console.log(movies); // -> aqui es una promesa
  //FetchMovies();
  return (
    <div>
      <h1>Lets Moviendering</h1>
      <FetchMovies />
    </div>
  );
}
