import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PosterImage } from "../components/PosterImage";

export function Category({ title = "movies you like" }) {
  const { myMovies, setMyMovies } = useContext(UserContext);
  console.log(myMovies);
  return (
    <div>
      <h2>{title}</h2>
      <section>
        {myMovies.map((myMovie) => (
          <div key={myMovie.id}>
            <PosterImage path={myMovie.poster_path} title={myMovie.title} />
            <p>{myMovie.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
