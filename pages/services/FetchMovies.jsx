const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";
const API = "https://api.themoviedb.org/3/movie/";

const fetching = () => {
  return fetch(`${API}550?api_key=${API_KEY}`, {
    next: { revalidate: 60 },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export default function FetchMovies() {
  const movies = Promise.resolve(fetching()).then((values) => {
    console.log(values)
    return (<div>values</div>);//---> No pasa nada con esto
  });
  //const { title } = movies;
  //console.log(movies.title);

  //return movies; //--> SI RETORNO ESTO CAGO TODO
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
