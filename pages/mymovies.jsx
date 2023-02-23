//React
import { useState } from "react";

//next
import Head from "next/head";

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
    <>
      <Head>
        <title>My movies</title>
        <meta name="my movies" content="schedule your movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.divMovies}>
        <h1>These are my movies</h1>
        <SearchForm setKeyword={setKeyword} />
        <Category feeling={"desire"} keyword={keyword.toLowerCase()} />
        <Category feeling={"like"} keyword={keyword.toLowerCase()} />
        <Category feeling={"dislike"} keyword={keyword.toLowerCase()} />
      </div>
    </>
  );
}
