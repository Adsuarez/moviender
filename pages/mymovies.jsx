import { useState } from "react";

import styles from "../styles/MoviesList.module.css";

import { Category } from "./components/Category";
import SearchForm from "./components/SearchForm";

export default function MyMoviesPage() {
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
