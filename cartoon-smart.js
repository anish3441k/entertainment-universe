
const sidebar=document.getElementById('sidebar');
const menuBtn=document.getElementById('menuBtn');

function toggleSidebar(){
sidebar.classList.toggle('active');
menuBtn.classList.toggle('active');
}

function searchContent(){

const input=document.getElementById('searchInput').value.toLowerCase();

const movieLayout=document.getElementById('movieLayout');
const seriesLayout=document.getElementById('seriesLayout');

if(
input.includes('cars') ||
input.includes('toy story') ||
input.includes('frozen') ||
input.includes('coco')
){

movieLayout.classList.remove('hidden');
seriesLayout.classList.add('hidden');

}

else{

seriesLayout.classList.remove('hidden');
movieLayout.classList.add('hidden');

}

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
