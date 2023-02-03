import styles from "../../styles/PageMyMovies.module.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";
import SearchSingleMovie from "../services/SearchSingleMovie";
import { FEELINGS } from "../services/MyMoviesSaver";

function CategoryOrganizer(myMovies, feel) {
  const [feelObject] = myMovies.filter((item) => Object.keys(item)[0] === feel);

  let idsList = [];

  if (feelObject) {
    idsList = Object.values(feelObject)[0];
  }

  return (
    <>
      <h3>Movies i {feel}</h3>
      <section className={`styles.section movies`}>
        {idsList.map((itemId) => (
          <div key={itemId} className="singleMovie">
            <section className={styles.sectionMovie}>
              {/* <p>{myMovie.title}</p> */}
              <p>{itemId}</p>
              {/* <CalendarButton myMovie={myMovie} /> */}
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

  return (
    <>
      {CategoryOrganizer(myMovies, "like")}
      {CategoryOrganizer(myMovies, "desire")}
      {CategoryOrganizer(myMovies, "dislike")}
    </>
  );
}

/*
return (
    <>
      <h3>Movies i {feel}</h3>
      <section className={`styles.section movies`}>
        {myMovies
          .filter((item) => Object.keys(item)[0] === feel)
          .map((myMovie) => (
            <div key={myMovie.id} className="singleMovie">
              <section className={styles.sectionMovie}>
                { <p>{myMovie.title}</p> }
                <CalendarButton myMovie={myMovie} />
                { <PosterImage
                  path={myMovie.poster_path}
                  title={myMovie.title}
                  className={styles.poster}
                /> }
              </section>
            </div>
          ))}
      </section>
    </>
  );
*/
