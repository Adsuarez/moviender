import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PosterImage } from "../components/PosterImage";

function CategoryOrganizer(myMovies, feel) {
  return (
    <section>
      <h3>Movies i {feel}</h3>
      {myMovies
        .filter((item) => item.feeling === feel)
        .map((myMovie) => (
          <div key={myMovie.id}>
            <PosterImage path={myMovie.poster_path} title={myMovie.title} />
            <p>{myMovie.title}</p>
          </div>
        ))}
    </section>
  );
}

export function Category({ title = "movies you like" }) {
  const { myMovies, setMyMovies } = useContext(UserContext);
  console.log(myMovies);
  return (
    <div>
      {CategoryOrganizer(myMovies, "like")}
      {CategoryOrganizer(myMovies, "desire")}
      {CategoryOrganizer(myMovies, "dislike")}
    </div>
  );
}
