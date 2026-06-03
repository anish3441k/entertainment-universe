// GLOBAL SEARCH DATABASE

const searchData = [

{
name: "Interstellar",
type: "movie",
page: "movie.html"
},

{
name: "Inception",
type: "movie",
page: "movie.html"
},

{
name: "Dune",
type: "movie",
page: "movie.html"
},

{
name: "Dark",
type: "webseries",
page: "web-series.html"
},

{
name: "Stranger Things",
type: "webseries",
page: "web-series.html"
},

{
name: "Naruto",
type: "anime",
page: "anime.html"
}

];



function openMovie(){
window.location.href='movies-browse.html';
}

function openWebSeries(){
window.location.href='webseries-browse.html';
}

function openAnime(){
window.location.href='anime-browse.html';
}

function openAnimeMovie(){
window.location.href='anime-movies-browse.html';
}

function openGame(){
window.location.href='games-browse.html';
}

function openCartoon(){
window.location.href='cartoons-browse.html';
}
