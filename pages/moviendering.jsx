import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import PosterImage from "./components/PosterImage";

export default function MovienderingPage() {
  const { schedule } = useContext(UserContext);
  return (
    <div>
      <h1>Lets Moviendering</h1>
      <h2>Schedule movies appointment</h2>
      {schedule.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <PosterImage path={movie.poster_path} title={movie.title} />
        </div>
      ))}
    </div>
  );
}
