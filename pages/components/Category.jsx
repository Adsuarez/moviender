import styles from "../../styles/PageMyMovies.module.css";

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
          <section className={`styles.section movies`}>
            {idsList.map((itemId) => {
              const { title, poster_path } = SearchSingleMovie(itemId);
              return (
                <div key={itemId} className="singleMovie">
                  <section className={styles.sectionMovie}>
                    <p>{title}</p>
                    <CalendarButton myMovie={SearchSingleMovie(itemId)} />
                    <PosterImage path={poster_path} title={title} />
                  </section>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}
