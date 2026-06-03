
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
