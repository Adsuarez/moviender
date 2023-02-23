//React
import { useState } from "react";

//styles
import styles from "../styles/MoviesList.module.css";

//components
import { Category } from "./components/Category";
import SearchForm from "./components/SearchForm";

//hooks
import useRedirect from "./hooks/useRedirect";

export default function MyMoviesPage() {
  useRedirect();
  const [keyword, setKeyword] = useState("");

  return (
    <div className={styles.divMovies}>
      <h1>These are my movies</h1>
      <SearchForm setKeyword={setKeyword} />
      <Category feeling={"desire"} keyword={keyword.toLowerCase()} />
      <Category feeling={"like"} keyword={keyword.toLowerCase()} />
      <Category feeling={"dislike"} keyword={keyword.toLowerCase()} />
    </div>
  );
}
