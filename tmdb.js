const TMDB_API_KEY = "6a782c30983b74d5e01dbab7cf128327";

const TMDB_BASE_URL =
"https://api.themoviedb.org/3";


// SEARCH MOVIES

async function searchTMDB(query){

const response = await fetch(
`${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
);

const data = await response.json();

return data.results;

}
