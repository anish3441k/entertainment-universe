const RAWG_API_KEY =
"46c8367e234446499ca5c4af86087b29";

const RAWG_BASE =
"https://api.rawg.io/api";


// SEARCH GAMES

async function searchGames(query){

const response = await fetch(

`${RAWG_BASE}/games?key=${RAWG_API_KEY}&search=${query}`

);

const data = await response.json();

return data.results;

}


// TRENDING GAMES

async function getTrendingGames(){

const response = await fetch(

`${RAWG_BASE}/games?key=${RAWG_API_KEY}`

);

const data = await response.json();

return data.results;

}
