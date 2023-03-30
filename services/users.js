const baseUrl = "https://moviender-backend-production.up.railway.app/api/users";

export async function getUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function getUser() {
  return fetch("http://localhost:3010/api/users/10")
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
