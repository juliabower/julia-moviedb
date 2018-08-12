const apiKey = "a8f1ca842faf07c1f6f4f875b9c810a9";
const baseUrl = "https://api.themoviedb.org";

const getUrl = (query, page) => {
  return `${baseUrl}/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
}

export const searchMovie = (query, page = 1) => {
  return fetch(getUrl(query, page))
    .then(response => response.json())
    .catch(error => error);
}