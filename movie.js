const selectedMovie =
JSON.parse(localStorage.getItem("selectedMovie"));

if(selectedMovie){

const title =
document.getElementById("movieTitle");

const description =
document.getElementById("movieDescription");

const poster =
document.getElementById("moviePoster");

if(title){
title.innerText = selectedMovie.title || "";
}

if(description){
description.innerText =
selectedMovie.description || "";
}

if(poster && selectedMovie.poster){
poster.src = selectedMovie.poster;
}

}

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');

function toggleSidebar(){

sidebar.classList.toggle('active');

menuBtn.classList.toggle('active');

}

function goHome(){

window.location.href='index.html';

sidebar.classList.remove('active');

menuBtn.classList.remove('active');

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
