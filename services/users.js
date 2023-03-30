const baseUrl = "https://moviender-backend-production.up.railway.app/api/users";
const baseTestUrl = "http://localhost:3010/api/users";

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
  return fetch(`${baseTestUrl}/10`)
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

export async function createUser(userData) {
  return fetch(baseTestUrl, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message) return json.message;
      return json;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
