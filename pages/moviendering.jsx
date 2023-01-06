import { FetchMovies } from "./services/FetchMovies.jsx";
import { useEffect } from "react";

export default function MovienderingPage() {
  /*
  const movies = {
    then(OnResolve, OnReject) {
      OnResolve({
        then(onResolve, onReject) {
          onResolve(FetchMovies());
        },
      });
    },
  };

  console.log(Promise.resolve(movies));

  */

  //const movies = FetchMovies;
  //console.log(movies);

  return (
    <div>
      <h1>Lets Moviendering</h1>
      <FetchMovies />
    </div>
  );
}
