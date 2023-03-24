const baseUrl = "https://moviender-backend-production.up.railway.app/api/users";

export async function getUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => console.error(error));
}
