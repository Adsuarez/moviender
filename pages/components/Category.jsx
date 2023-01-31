import styles from "../../styles/PageMyMovies.module.css";

import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";
import SearchMovies from "../services/SearchMovies";

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
                {/* <p>{myMovie.title}</p> */}
                <CalendarButton myMovie={myMovie} />
                {/* <PosterImage
                  path={myMovie.poster_path}
                  title={myMovie.title}
                  className={styles.poster}
                /> */}
              </section>
            </div>
          ))}
      </section>
    </>
  );
}

export function Category() {
  const { myMovies, setMyMovies } = useContext(UserContext);
  //const [movie, setMovie] = useState(SearchMovies());
  const ID = 315162;
  console.log(SearchMovies(ID));

  return (
    <div>
      {CategoryOrganizer(myMovies, "desire")}
      {CategoryOrganizer(myMovies, "like")}
      {CategoryOrganizer(myMovies, "dislike")}
    </div>
  );
}
