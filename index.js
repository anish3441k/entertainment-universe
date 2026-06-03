const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

// =========================
// HERO SWIPER
// =========================

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function autoSlide(){

slides.forEach(slide => {
slide.classList.remove('active');
});

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add('active');

}

setInterval(autoSlide,5000);

// =========================
// SIDEBAR
// =========================

function toggleSidebar(){

sidebar.classList.toggle('active');
menuBtn.classList.toggle('active');

}

// AUTO CLOSE SIDEBAR

document.addEventListener('click', function(event){

const clickedInsideSidebar =
sidebar.contains(event.target);

const clickedMenu =
menuBtn.contains(event.target);

if(
!clickedInsideSidebar &&
!clickedMenu &&
sidebar.classList.contains('active')
){

sidebar.classList.remove('active');
menuBtn.classList.remove('active');

}

});

// =========================
// DATABASE
// =========================

let moviesDatabase = [

{
title: "Interstellar",
type: "movie",
year: "2014",
rating: "8.7",
genre: "Sci-Fi",
description:
"A team of explorers travel through a wormhole in space.",
poster:
"https://picsum.photos/300/450?interstellar",
page: "movie.html"
},

{
title: "Batman",
type: "movie",
year: "2022",
rating: "8.1",
genre: "Action",
description:
"Batman protects Gotham City from dangerous criminals.",
poster:
"https://picsum.photos/300/450?batman",
page: "movie.html"
},

{
title: "Naruto",
type: "anime",
year: "2002",
rating: "8.4",
genre: "Anime",
description:
"A young ninja dreams of becoming Hokage.",
poster:
"https://picsum.photos/300/450?naruto",
page: "anime.html"
},

{
title: "Dark",
type: "webseries",
year: "2017",
rating: "8.8",
genre: "Sci-Fi",
description:
"A mysterious time travel story.",
poster:
"https://picsum.photos/300/450?dark",
page: "web-series.html"
},

{
title: "GTA 6",
type: "game",
year: "2025",
rating: "9.5",
genre: "Open World",
description:
"The next generation Grand Theft Auto experience.",
poster:
"https://picsum.photos/300/450?gta6",
page: "games.html"
},

{
title: "Your Name",
type: "anime-movie",
year: "2016",
rating: "8.9",
genre: "Anime Movie",
description:
"A beautiful emotional anime movie.",
poster:
"https://picsum.photos/300/450?yourname",
page: "anime-movie.html"
}

];

// =========================
// HOME
// =========================

function goHome(){

window.location.href = 'index.html';

}

// =========================
// SEARCH
// =========================

function globalSearch(event){

if(event.key === "Enter"){

const input =
event.target.value.toLowerCase().trim();

const result = moviesDatabase.find(item =>
item.title.toLowerCase().includes(input)
);

if(result){

window.location.href = result.page;

}else{

alert("Content not found");

}

}

}

// =========================
// SEARCH SUGGESTIONS
// =========================

function showSuggestions(value){

const box =
document.getElementById("suggestionsBox");

box.innerHTML = "";

if(value.trim() === ""){
return;
}

const matches = moviesDatabase.filter(item =>
item.title.toLowerCase()
.includes(value.toLowerCase())
);

matches.forEach(match => {

const div = document.createElement("div");

div.classList.add("suggestion-item");

div.innerText = match.title;

div.onclick = function(){

window.location.href = match.page;

};

box.appendChild(div);

});

}

// =========================
// DYNAMIC TRENDING
// =========================

function loadTrendingMovies(){

const container =
document.getElementById("trendingMovies");

if(!container) return;

container.innerHTML = "";

moviesDatabase.forEach(movie => {

const card = document.createElement("div");

card.className = "movie-card";

card.innerHTML = `

<img src="${movie.poster}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre} • ${movie.year}</p>

</div>

`;

card.onclick = function(){

localStorage.setItem(
"selectedMovie",
JSON.stringify(movie)
);

window.location.href = movie.page;

};

container.appendChild(card);

});

}

loadTrendingMovies();

// =========================
// ROUTING
// =========================

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

function openWishlist(){

alert("Wishlist coming soon");

}

function openSettings(){

alert("Settings coming soon");

}

// =========================
// TMDB TEST
// =========================

searchTMDB("batman")
.then(data => {

console.log(data);

});

function openBatman(){

const movie={

title:"Batman",

description:"Batman protects Gotham City from dangerous criminals.",

poster:"https://picsum.photos/500/700?batman",

rating:"8.1",

genre:"Action",

year:"2022"

};

localStorage.setItem(
"selectedMovie",
JSON.stringify(movie)
);


}

