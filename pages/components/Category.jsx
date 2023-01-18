import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import styles from "../../styles/Category.module.css";
import CalendarButton from "./CalendarButton";

function CategoryOrganizer(myMovies, feel) {
  return (
    <>
      <h3>Movies i {feel}</h3>
      <section className={`styles.section movies`}>
        {myMovies
          .filter((item) => item.feeling === feel)
          .map((myMovie) => (
            <div key={myMovie.id}>
              <PosterImage path={myMovie.poster_path} title={myMovie.title} />
              <p>{myMovie.title}</p>
              <CalendarButton myMovie={myMovie} />
            </div>
          ))}
      </section>
    </>
  );
}

export function Category({ title = "movies you like" }) {
  const { myMovies, setMyMovies } = useContext(UserContext);

  return (
    <div>
      {CategoryOrganizer(myMovies, "desire")}
      {CategoryOrganizer(myMovies, "like")}
      {CategoryOrganizer(myMovies, "dislike")}
    </div>
  );
}
