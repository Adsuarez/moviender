import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const FEELINGS = {
  like: "❤️",
  desire: "🍿",
  dislike: "❌",
};

export default function FeelingIdFinder(id) {
  const { myMovies } = useContext(UserContext);

  return myMovies.map((feelingObject) => {
    console.log(
      Object.values(feelingObject)[0].findIndex((itemId) => itemId === id)
    );
  });
}
