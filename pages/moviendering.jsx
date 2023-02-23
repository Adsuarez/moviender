import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PosterImage from "./components/PosterImage";
import useRedirect from "./hooks/useRedirect";

export default function MovienderingPage() {
  useRedirect();
  const { schedule } = useContext(UserContext);

  return (
    <div className="mainDiv">
      <h1>Lets Moviendering</h1>
      <h2>Schedule movies appointment</h2>
      {schedule.map((item) => (
        <section key={Number(item.id)+Math.random()}>
          <h3>{item.title}</h3>
          <p>{item.date.getUTCDate()}</p>
          <p>{item.date.getUTCMonth() + 1}</p>
          <p>{item.date.getUTCFullYear()}</p>
        </section>
      ))}
    </div>
  );
}
