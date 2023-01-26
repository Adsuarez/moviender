import styles from '../styles/PageMyMovies.module.css'
import { Category } from "./components/Category";

export default function MyMoviesPage() {
  return (
    <div className={styles.div}>
      <h1>These are my movies</h1>
      <Category />
    </div>
  );
}
