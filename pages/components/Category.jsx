import styles from "../../styles/PageMyMovies.module.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PosterImage from "../components/PosterImage";
import CalendarButton from "./CalendarButton";
import SearchSingleMovie from "../services/SearchSingleMovie";
import { FEELINGS } from "../services/FeelingIdFInder";

function CategoryOrganizer(myMovies, feel) {
  const [feelObject] = myMovies.filter((item) => Object.keys(item)[0] === feel);

  let idsList = [];

  if (feelObject) {
    idsList = Object.values(feelObject)[0];
  }

  return (
    <>
      <h3>Movies i {feel} {FEELINGS[feel]}</h3>
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
