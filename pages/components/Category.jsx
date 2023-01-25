import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import styles from "../../styles/MyMovies.module.css";
// import CalendarButton from "./CalendarButton";
import Schedule from "./Schedule";

function CategoryOrganizer(myMovies, feel) {
  const [active, setActive] = useState(true);
  const visibleCLick = () => {
    setActive(!active);
  };
  
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
                <button onClick={visibleCLick}>Show 🗓️</button>
                {active && <Schedule visible={true} myMovie={myMovie}/>}
                {/* <CalendarButton myMovie={myMovie} /> */}
                <PosterImage path={myMovie.poster_path} title={myMovie.title} className={styles.poster}/>
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
