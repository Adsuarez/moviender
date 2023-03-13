//react
import { useContext } from "react";

//context
import { UserContext } from "context/UserContext";

export default function useIdsList(feeling) {
  const { myMovies } = useContext(UserContext);

  if (myMovies.length === 0) return [];

  const [feelObject] = myMovies.filter(
    (item) => Object.keys(item)[0] === feeling
  );

  if (feelObject) return Object.values(feelObject)[0];
}
