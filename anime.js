
const sidebar=document.getElementById('sidebar');
const menuBtn=document.querySelector('.menu-btn');

// SIDEBAR

function toggleSidebar(){

sidebar.classList.toggle('active');
menuBtn.classList.toggle('active');

}

// AUTO CLOSE SIDEBAR

document.addEventListener('click',function(event){

const clickedInsideSidebar=
sidebar.contains(event.target);

const clickedMenu=
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

// HOME

function goHome(){

window.location.href='index.html';

}

// ANIME OVERLAY

function openMovies(){

document.getElementById('moviesOverlay').style.display='flex';

}

function closeMovies(){

document.getElementById('moviesOverlay').style.display='none';

}

// ROUTING

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

// GLOBAL SEARCH SYSTEM

function globalSearch(event){

if(event.key==="Enter"){

const input=
event.target.value.toLowerCase().trim();

const result=searchData.find(item =>
item.name.toLowerCase() === input
);

if(result){

window.location.href=result.page;

}else{

alert("Content not found");

}

}

}

async function loadTopAnime(){

const container =
document.getElementById("animeContainer");

if(!container) return;

container.innerHTML = "";

const animeList =
await getTopAnime();

animeList.slice(0,12).forEach(anime => {

const card =
document.createElement("div");

card.className = "movie-card";

card.innerHTML = `

<img src="${anime.images.jpg.image_url}">

<div class="movie-info">

<h3>${anime.title}</h3>

<p>⭐ ${anime.score}</p>

</div>

`;

container.appendChild(card);

});

}

loadTopAnime();

const selectedAnime =
JSON.parse(localStorage.getItem("selectedAnime"));

if(selectedAnime){

const title =
document.getElementById("animeTitle");

const poster =
document.getElementById("animePoster");

const description =
document.getElementById("animeDescription");

const rating =
document.getElementById("animeRating");

const japaneseTitle =
document.getElementById("animeJapaneseTitle");

if(title){

title.innerText =
selectedAnime.title;

}

if(poster){

poster.src =
selectedAnime.images.jpg.image_url;

}

if(description){

description.innerText =
selectedAnime.synopsis;

}

if(rating){

rating.innerText =
"⭐ " + selectedAnime.score;

}

if(japaneseTitle){

japaneseTitle.innerText =
selectedAnime.title_japanese || "";

}

}

