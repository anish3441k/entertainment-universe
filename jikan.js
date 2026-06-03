// JIKAN API

const JIKAN_BASE =
"https://api.jikan.moe/v4";


// SEARCH ANIME

async function searchAnime(query){

const response = await fetch(

`${JIKAN_BASE}/anime?q=${query}`

);

const data = await response.json();

return data.data;

}


// TOP ANIME

async function getTopAnime(){

const response = await fetch(

`${JIKAN_BASE}/top/anime`

);

const data = await response.json();

return data.data;

}
