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

  return (
    <>
      {myMovies.map((item) => (
        <ul key={Object.keys(item)[0]}>
          <h3>Movies i {Object.keys(item)[0]}</h3>
          {Object.values(item)[0].map((itemId) => (
            <li key={itemId}>{itemId}</li>
          ))}
        </ul>
      ))}
    </>
  );
}

/*
const idList = myMovies.map((myMovie) => myMovie.id);
  const feelingsList = [...new Set(myMovies.map((myMovie) => myMovie.feeling))];

<div>
        {feelingsList.map((feeling) => (
          <div key={feeling}>
            <h2>Movies i {feeling}</h2>
            {idList.map((itemID) => (
              <section key={itemID}>
                { {myMovies.filter(myMovie => myMovie.id === itemID)} }
                <h3>{SearchMovies(itemID).title}</h3>
                </section>
                ))}
            </div>
          ))}
        </div> */
