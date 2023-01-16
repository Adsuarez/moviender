import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PosterImage from "./components/PosterImage";

export default function MovienderingPage() {
  const { schedule } = useContext(UserContext);
  console.log(schedule);
  return (
    <div>
      <h1>Lets Moviendering</h1>
      <h2>Schedule movies appointment</h2>
      {schedule.map(date => (
        <section key={date}>
          <h3>Titulo</h3>
          <p>{date.getUTCDate()}</p>
          <p>{date.getUTCMonth()+1}</p>
          <p>{date.getUTCFullYear()}</p>
        </section>
      ))}
    </div>
  );
}
