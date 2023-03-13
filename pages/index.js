//React
import { useContext, useState } from "react";

//next
import Head from "next/head";

//styles
import styles from "../styles/MoviesList.module.css";

//context
import { UserContext } from "context/UserContext";

//components
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

//hooks
import useMoviesByKeyword from "hooks/useMoviesByKeyword";

export default function Home() {
  const { myMovies, user } = useContext(UserContext);
  const [keyword, setKeyword] = useState("");
  const foundMovies = useMoviesByKeyword(keyword);

  return (
    <>
      <Head>
        <title>Moviender</title>
        <meta name="Home" content="Find movies you want to watch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.divMovies}>
        <h1>Welcome to Movienderingverse</h1>
        <SearchForm setKeyword={setKeyword} />
        <div className={styles.movies}>
          {keyword === "" ? (
            <MoviesList myMovies={myMovies} user={user} />
          ) : (
            <MoviesList
              myMovies={myMovies}
              user={user}
              foundMovies={foundMovies}
            />
          )}
        </div>
      </div>
    </>
  );
}
