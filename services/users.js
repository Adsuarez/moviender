const baseUrl = "https://moviender-backend-production.up.railway.app/api/users";
const baseTestUrl = "http://localhost:3010/api/users";

export async function getUsers() {
  // This is commented because is pending continue with backend implementation
  /*return fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });*/

  //These are testing dummy users
  return [
    {
      id: "JIT4npfWDBCrr7PdT-cUz",
      email: "9test@gmail.com",
      userName: "Dummy friend 1",
      password: "$2b$10$spUe8w4EalxikrlLDsiYZek.BArTxUSeavasxmIW2Hg8.s8rkZPky",
      myMovies: null,
      schedule: null,
      friends: null,
    },
    {
      id: "jr3hd1Jgx7vrB3rezx1ew",
      email: "39test@gmail.com",
      userName: "Dummy friend 2",
      password: "$2b$10$eDY2zx5Dy70epra77P47vu6zQucTmRiE.wbP0A40d5vOrTpliwlzG",
      myMovies: null,
      schedule: null,
      friends: null,
    },
    {
      id: "Js30lH5cF6RHL-CkScpkm",
      email: "51test@gmail.com",
      userName: "Dummy friend 3",
      password: "$2b$10$f1mTPfhC2LvhhRFEfzliyONPVjGxrvfIVjZrSL4TPtBM2eFOGocUG",
      myMovies: null,
      schedule: null,
      friends: null,
    },
    {
      id: "KetMYVK5fz4sP4aOSj7y0",
      email: "91test@gmail.com",
      userName: null,
      password: "$2b$10$665xRPoKGsUpsEFTLW8aLOJrpRvVFV4kVYLOmTidtaY2jz5pCkLYO",
      myMovies: null,
      schedule: null,
      friends: null,
    },
  ];
}

export async function getUser() {
  // This is commented because is pending continue with backend implementation
  /*return fetch(`${baseTestUrl}/10`)
    .then((response) => response.json())
    .then((json) => {
      if (json.message) return null;
      return json;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });*/

  //this is a dummy user to to allow demo availability
  return {
    id: "_7ocYazozLwoNChZ4EHzA",
    email: "38test@gmail.com",
    userName: "dummy",
    password: "$2b$10$vpdHlaKbj89nYfVKcYzKFOWG/Disy4iErLFdZEhfX6iLibkdz5RDa",
    myMovies: null,
    schedule: null,
    friends: null,
  };
}

export async function createUser(userData) {
  return fetch(baseTestUrl, {
    method: "POST",
    mode: "cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message) return null;
      return json;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
