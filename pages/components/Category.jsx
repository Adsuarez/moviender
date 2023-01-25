import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import styles from "../../styles/MyMovies.module.css";
import CalendarButton from "./CalendarButton";

function CategoryOrganizer(myMovies, feel) {
  return (
    <>
      <h3>Movies i {feel}</h3>
      <section className={`styles.section movies`}>
        {myMovies
          .filter((item) => item.feeling === feel)
          .map((myMovie) => (
            <div key={myMovie.id} className="singleMovie">
              <section className={styles.sectionMovie}>
                <p>{myMovie.title}</p>
                <CalendarButton myMovie={myMovie} />
                <PosterImage
                  path={myMovie.poster_path}
                  title={myMovie.title}
                  className={styles.poster}
                />
              </section>
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
