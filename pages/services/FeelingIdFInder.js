export const FEELINGS = {
  like: "like",
  desire: "desire",
  dislike: "dislike",
  null: "",
};

export default function FeelingIdFinder(id, myMovies) {
  let feelingById = "";

  myMovies.forEach((feelingObject) => {
    const idsList = Object.values(feelingObject)[0];
    idsList.find((itemId) => itemId === id) === undefined
      ? null
      : (feelingById = Object.keys(feelingObject)[0]);
  });

  return FEELINGS[feelingById];
}
