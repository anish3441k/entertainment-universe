
const sidebar=document.getElementById('sidebar');
const menuBtn=document.getElementById('menuBtn');

function toggleSidebar(){

sidebar.classList.toggle('active');

menuBtn.classList.toggle('active');

}

function goHome(){

window.location.href='index.html';

}


// GLOBAL SEARCH SYSTEM
function globalSearch(event) {

if (event.key === "Enter") {

const input = event.target.value.toLowerCase().trim();

const result = searchData.find(item =>
item.name.toLowerCase() === input
);

if (result) {
window.location.href = result.page;
} else {
alert("Content not found");
}

}

}



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
