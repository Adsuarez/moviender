import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PosterImage from "./components/PosterImage";
import styles from '../styles/PageMoviendering.module.css'

export default function MovienderingPage() {
  const { schedule } = useContext(UserContext);

  return (
    <div className={styles.div}>
      <h1>Lets Moviendering</h1>
      <h2>Schedule movies appointment</h2>
      {schedule.map((date) => (
        <section key={date}>
          <h3>{date.title}</h3>
          <p>{date.getUTCDate()}</p>
          <p>{date.getUTCMonth() + 1}</p>
          <p>{date.getUTCFullYear()}</p>
        </section>
      ))}
    </div>
  );
}
