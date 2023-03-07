import { useContext } from "react";
import { UserContext } from "context/UserContext";

const FEELINGS = ["like", "desire", "dislike"];

export default function useUpdateList() {
  const { myMovies, setMyMovies } = useContext(UserContext);

  //find if the id exist yet
  const findRepeatedId = (id) => {
    return myMovies.map((feelingObject) => {
      return Object.values(feelingObject)[0].findIndex(
        (itemId) => itemId === id
      );
    });
  };

  const CreateIdsFeelnigsArrays = (feeling1, feeling2, feeling3) => {
    //create empty arrays, one for each feelings
    let idsOfFeeling1 = [];
    let idsOfFeeling2 = [];
    let idsOfFeeling3 = [];

    //for each item evaluate if the key corresponding to the feeling and add the array in each idsOfFeeleng arrays
    myMovies.forEach((item) => {
      if (Object.hasOwn(item, feeling1)) {
        idsOfFeeling1 = [...Object.values(item)[0]];
      } else if (Object.hasOwn(item, feeling2)) {
        idsOfFeeling2 = [...Object.values(item)[0]];
      } else if (Object.hasOwn(item, feeling3)) {
        idsOfFeeling3 = [...Object.values(item)[0]];
      }
    });

    return { idsOfFeeling1, idsOfFeeling2, idsOfFeeling3 };
  };

  const addMovie = (id, feeling1) => {
    //asign the rest of the feelings
    const [feeling2, feeling3] = FEELINGS.filter((feel) => feel !== feeling1);

    //save the movie if is the first time and make ShortCircuit
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

    /*if is not empty the array myMovies, continue here*/
    const findId = findRepeatedId(id);

    //if the id not exist evaluate this condition
    if (findId.every((item) => item === -1)) {
      const { idsOfFeeling1, idsOfFeeling2, idsOfFeeling3 } =
        CreateIdsFeelnigsArrays(feeling1, feeling2, feeling3);

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
  };

  return { myMovies, addMovie };
}
