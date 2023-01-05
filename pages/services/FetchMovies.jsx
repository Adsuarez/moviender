const API_KEY = "3d74f79a7a72cdfde4ba40b495bdde84";

export default async function FetchMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    );
  } catch (error) {
    console.log(error);
  }

  return <p>{console.log("me llamaron para aqui")}</p>;
}
