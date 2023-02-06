import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const FEELINGS = {
  like: "❤️",
  desire: "🍿",
  dislike: "❌",
  null: "",
};

export default function FeelingIdFinder(id) {
  const { myMovies } = useContext(UserContext);
  let feelingById = "";

  myMovies.forEach((feelingObject) => {
    const idsList = Object.values(feelingObject)[0];
    idsList.find((itemId) => itemId === id) === undefined
      ? null
      : (feelingById = Object.keys(feelingObject)[0]);
  });

  return FEELINGS[feelingById];
}
