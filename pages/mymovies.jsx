import styles from "../styles/PageMyMovies.module.css";
import { Category } from "./components/Category";
//import FetchMovies from "./services/FetchMovies";

export default function MyMoviesPage() {
//  const { movies } = FetchMovies();

  return (
    <div className={styles.div}>
      <h1>These are my movies</h1>
      <Category />
    </div>
  );
}
