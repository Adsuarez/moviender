import { useState, useEffect } from "react";
import { getUsers } from "services/users.js";

export default function PeoplePage() {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getUsers().then(setPeople);
  }, []);

  return (
    <>
      <h1>Pepole page</h1>
      {people &&
        people.map((person) => {
          return (
            <div key={person.id}>
              <p>{person.userName}</p>
              {person.myMovies &&
                person.myMovies.map((movieId) => {
                  return (
                    <ul key={movieId}>
                      <li>{movieId}</li>
                    </ul>
                  );
                })}
            </div>
          );
        })}
    </>
  );
}
