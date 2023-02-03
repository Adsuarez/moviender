export const FEELINGS = ["like", "desire", "dislike"];

export default function MyMoviesSaver(id, feeling1, myMovies, setMyMovies) {
  const [feeling2, feeling3] = FEELINGS.filter((feel) => feel !== feeling1);

  if (myMovies.length === 0)
    return setMyMovies([
      {
        [feeling1]: [id],
      },
      {
        [feeling2]: [],
      },
      {
        [feeling3]: [],
      },
    ]);

  let idsOfFeeling1 = [];
  let idsOfFeeling2 = [];
  let idsOfFeeling3 = [];

  const findRepeatedId = myMovies.map((item) => {
    return Object.values(item)[0].findIndex((itemId) => itemId === id);
  });

  if (findRepeatedId.every((item) => item === -1)) {
    myMovies.forEach((item) => {
      if (Object.hasOwn(item, feeling1)) {
        idsOfFeeling1 = [...Object.values(item)[0]];
      } else if (Object.hasOwn(item, feeling2)) {
        idsOfFeeling2 = [...Object.values(item)[0]];
      } else if (Object.hasOwn(item, feeling3)) {
        idsOfFeeling3 = [...Object.values(item)[0]];
      }
    });

    return setMyMovies([
      {
        [feeling1]: [...idsOfFeeling1, id],
      },
      {
        [feeling2]: [...idsOfFeeling2],
      },
      {
        [feeling3]: [...idsOfFeeling3],
      },
    ]);
  }

  return myMovies;
}
