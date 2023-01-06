const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/";

const fetching = () => {
  return fetch(`${API}550?api_key=${API_KEY}`, {
    next: { revalidate: 60 },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export async function FetchMovies() {
  const movies = new Promise(fetching());
  const { title } = movies;
  console.log(movies.title);

  return title;
}

/*
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
*/
