import { FetchMovies } from "./services/FetchMovies.jsx";
import { useEffect } from "react";

export default function MovienderingPage() {
  const movies = FetchMovies();
  console.log(typeof(movies));

  return (
    <div>
      <h1>Lets Moviendering</h1>
    </div>
  );
}
