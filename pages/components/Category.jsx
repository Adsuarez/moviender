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
//import useMovieById from "../hooks/useMovieById";
import useMovie from "../hooks/useMovie";

export function Category({ feeling, keyword = "" }) {
  const { myMovies, user } = useContext(UserContext);
  const { getById, movie } = useMovie();

  const getIdsList = (feeling) => {
    if (myMovies.length === 0) return [];

    /*parece innecesario este paso*/
    const [feelObject] = myMovies.filter(
      (item) => Object.keys(item)[0] === feeling
    );

    if (feelObject) return Object.values(feelObject)[0]; //quizas solo con feeling puedo hacer esto
  };

  const idsList = getIdsList(feeling);

  /*
    Estructura que funciona para no hacer llamada infinita
    const ID = 312110;
    <button onClick={() => getById(ID)}>llamar</button>
    {movie && <p>show id: {movie?.title}</p>}
*/
  const getTitle = (itemId) => {
    //console.log(getById(itemId));
    return getById(itemId);
  };

  return (
    <>
      {user && (
        <div key={feeling}>
          <h3>Movies i {feeling}</h3>
          {idsList.length > 0 ? (
            <section className={styles.movies}>
              {idsList.map((itemId) => {
                let title = "pepito";
                let poster_path = "www";

                //title = getTitle(itemId)?.title;
                //title = getById(itemId)?.title;
                //console.log(title);

                return (
                  <div key={itemId} className={styles.singleMovie}>
                    <p>{title}</p>
                    <section className={styles.movieImgButtons}>
                      <PosterImage path={poster_path} title={title} />
                      {/*<CalendarButton myMovie={searchById(itemId)} />*/}
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

/*
{user && (
        <div key={feeling}>
          <h3>Movies i {feeling}</h3>
          {idsList.length > 0 ? (
            <section className={styles.movies}>
              {idsList.map((itemId) => {
                 setID(itemId);
                if (foundMovie !== null) {
                  let { title, poster_path } = foundMovie;
                  return (
                    <div key={itemId} className={styles.singleMovie}>
                      <p>{title}</p>
                      <section className={styles.movieImgButtons}>
                        <PosterImage path={poster_path} title={title} />
                        { <CalendarButton myMovie={searchById(itemId)} /> }
                      </section>
                    </div>
                  );
                }
              
              })}
              </section>
            ) : (
              <p>Here will appear the movies you chose in home page</p>
            )}
          </div>
        )}
*/
