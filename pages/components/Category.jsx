import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import styles from "./Category.module.css";
import ScheduleAppointment from "./ScheduleAppointment";

function CategoryOrganizer(myMovies, feel) {
  return (
    <section className={styles.section}>
      <h3>Movies i {feel}</h3>
      {myMovies
        .filter((item) => item.feeling === feel)
        .map((myMovie) => (
          <div key={myMovie.id}>
            <PosterImage path={myMovie.poster_path} title={myMovie.title} />
            <p>{myMovie.title}</p>
            {feel === "desire" && <ScheduleAppointment myMovie={myMovie}/>}
          </div>
        ))}
    </section>
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
