//React
import { useContext, useState } from "react";

//context
import { UserContext } from "../context/UserContext";

//Styles
import styles from "../../styles/MoviesList.module.css";

//components
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";

//Hooks
import useMovieById from "../hooks/useMovieById";

export function Category({ feeling, keyword = "" }) {
  const { myMovies, user } = useContext(UserContext);
  const [ID, setID] = useState(null);
  const foundMovie = useMovieById(ID);

  const getIdsList = (feeling) => {
    if (myMovies.length === 0) return [];

    /*parece innecesario este paso*/
    const [feelObject] = myMovies.filter(
      (item) => Object.keys(item)[0] === feeling
    );

    if (feelObject) return Object.values(feelObject)[0]; //quizas solo con feeling puedo hacer esto
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
                setID(itemId);
                if (foundMovie !== null) {
                  let { title, poster_path } = foundMovie;
                }

                return (
                  <div key={itemId} className={styles.singleMovie}>
                    <p>{title}</p>
                    <section className={styles.movieImgButtons}>
                      <PosterImage path={poster_path} title={title} />
                      {/* <CalendarButton myMovie={searchById(itemId)} /> */}
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
