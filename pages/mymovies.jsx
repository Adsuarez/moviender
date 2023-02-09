import styles from "../styles/MoviesList.module.css";
import { Category } from "./components/Category";

export default function MyMoviesPage() {
  return (
    <div className={styles.divMovies}>
      <h1>These are my movies</h1>
      <Category feeling={"desire"} />
      <Category feeling={"like"} />
      <Category feeling={"dislike"} />
    </div>
  );
}
