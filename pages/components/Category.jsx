//React
import { useContext, useState } from "react";

//context
import { UserContext } from "../context/UserContext";

//Styles
import styles from "../../styles/MoviesList.module.css";

//components
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";

//services
import SearchSingleMovie from "../services/SearchSingleMovie";

//hooks
import useIdsList from "../hooks/useIdsList";

export function Category({ feeling, keyword = "" }) {
  const idsList = useIdsList(feeling);

  return (
    <div key={feeling}>
      <h3>Movies i {feeling}</h3>
      {idsList.length > 0 ? (
        <section className={styles.movies}>
          {idsList.map((itemId) => {
            const movie = SearchSingleMovie(itemId);
            const { title, poster_path } = movie;

            if (title?.toLowerCase().includes(keyword)) {
              return (
                <div key={itemId} className={styles.singleMovie}>
                  <p>{title}</p>
                  <section className={styles.movieImgButtons}>
                    <PosterImage path={poster_path} title={title} />
                    <CalendarButton myMovie={movie} />
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
  );
}
