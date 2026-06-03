// WIKIPEDIA API

const WIKI_BASE =
"https://en.wikipedia.org/api/rest_v1/page/summary/";


// SEARCH WIKIPEDIA

async function getWikiInfo(title){

const response = await fetch(

`${WIKI_BASE}${title}`

);

const data = await response.json();

return data;

}
