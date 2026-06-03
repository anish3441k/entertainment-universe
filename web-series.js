
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

// ROUTING













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

const result=searchData.find(item=>
item.name.toLowerCase()===input
);

if(result){

window.location.href=result.page;

}else{

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
