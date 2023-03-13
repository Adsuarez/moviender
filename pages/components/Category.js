//public
import { FILM } from "utils/icons.js";

//Styles
import styles from "../../styles/MoviesList.module.css";
import stylesButton from "../../styles/Buttons.module.css";

//components
import PosterImage from "./PosterImage";
import CalendarButton from "./CalendarButton";

//services
import SearchSingleMovie from "services/SearchSingleMovie";

//hooks
import useIdsList from "hooks/useIdsList";
import useSchedule from "hooks/useSchedule";

export function Category({ feeling, keyword = "" }) {
  const idsList = useIdsList(feeling);
  const { getScheduleOfMovie } = useSchedule();

  return (
    <div key={feeling}>
      <h3>Movies i {feeling}</h3>
      {idsList.length > 0 ? (
        <section className={styles.movies}>
          {idsList.map((itemId) => {
            const movie = SearchSingleMovie(itemId);
            const { title, poster_path } = movie;

            if (title?.toLowerCase().includes(keyword)) {
              const { isScheduled, date } = getScheduleOfMovie(itemId);

              return (
                <div key={itemId} className={styles.singleMovie}>
                  <p>{title}</p>
                  <section className={styles.movieImgButtons}>
                    <PosterImage path={poster_path} title={title} />
                    {isScheduled ? (
                      <p>
                        {<i className={FILM} />}{" "}
                        {date.toString().substring(0, 15)}
                      </p>
                    ) : (
                      <section className={stylesButton.actionButtons}>
                        <CalendarButton myMovie={movie} />
                      </section>
                    )}
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
