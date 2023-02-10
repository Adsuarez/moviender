import styles from "../../styles/MoviesList.module.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";
import SearchSingleMovie from "../services/SearchSingleMovie";

export function Category({ feeling }) {
  const { myMovies, user } = useContext(UserContext);

  const getIdsList = (feeling) => {
    if (myMovies.length === 0) return [];

    const [feelObject] = myMovies.filter(
      (item) => Object.keys(item)[0] === feeling
    );

    if (feelObject) return Object.values(feelObject)[0];
  };

  const idsList = getIdsList(feeling);

  return (
    <>
      {user && (
        <div key={feeling}>
          <h3>Movies i {feeling}</h3>
          {idsList.length > 0 ? (
            <section className={styles.movies}>
              {idsList.map((itemId) => {
                const { title, poster_path } = SearchSingleMovie(itemId);
                return (
                  <div key={itemId} className={styles.singleMovie}>
                    <p>{title}</p>
                    <section className={styles.movieImgButtons}>
                      <PosterImage path={poster_path} title={title} />
                      <CalendarButton myMovie={SearchSingleMovie(itemId)} />
                    </section>
                  </div>
                );
              })}
            </section>
          ) : (
            <p>Here will appear the movies you chose in home page</p>
          )}
        </div>
      )}
    </>
  );
}
