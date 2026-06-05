
const sidebar=document.getElementById('sidebar');
const menuBtn=document.getElementById('menuBtn');
const slides=document.querySelectorAll('.slide');
let currentSlide=0;

function autoSlide(){
 if(!slides.length) return;
 slides.forEach(s=>s.classList.remove('active'));
 currentSlide=(currentSlide+1)%slides.length;
 slides[currentSlide].classList.add('active');
}
setInterval(autoSlide,5000);

function toggleSidebar(){
 if(sidebar) sidebar.classList.toggle('active');
 if(menuBtn) menuBtn.classList.toggle('active');
}

async function globalSearch(event){
 if(event.key!=='Enter') return;
 const query=event.target.value.trim();
 if(!query) return;

 try{
   const results=await searchTMDB(query);
   if(!results.length){ alert('Movie not found'); return; }

   const movie=results[0];

   localStorage.setItem('selectedMovie',JSON.stringify({
      title:movie.title,
      description:movie.overview,
      poster:IMAGE_URL + movie.poster_path,
      rating:movie.vote_average,
      genre:'Movie',
      year:(movie.release_date||'').slice(0,4)
   }));

   window.location.href='movie.html';
 }catch(err){
   console.error(err);
   alert('Search failed');
 }
}

async function loadTrendingMovies(){
 const container=document.getElementById('trendingMovies');
 if(!container) return;

 container.innerHTML='<h3>Loading...</h3>';

 try{
   const movies=await getTrendingMovies();
   container.innerHTML='';

   movies.slice(0,20).forEach(movie=>{
      const card=document.createElement('div');
      card.className='movie-card';

      card.innerHTML=`
      <img src="${IMAGE_URL}${movie.poster_path}">
      <div class="movie-info">
         <h3>${movie.title}</h3>
         <p>${(movie.release_date||'').slice(0,4)}</p>
      </div>`;

      card.onclick=()=>{
         localStorage.setItem('selectedMovie',JSON.stringify({
            title:movie.title,
            description:movie.overview,
            poster:IMAGE_URL + movie.poster_path,
            rating:movie.vote_average,
            genre:'Movie',
            year:(movie.release_date||'').slice(0,4)
         }));
         window.location.href='movie.html';
      };

      container.appendChild(card);
   });
 }catch(err){
   console.error(err);
   container.innerHTML='Failed to load movies';
 }
}

loadTrendingMovies();

function goHome(){window.location.href='index.html';}
function openMovie(){window.location.href='movies-browse.html';}
function openWebSeries(){window.location.href='webseries-browse.html';}
function openAnime(){window.location.href='anime-browse.html';}
function openAnimeMovie(){window.location.href='anime-movies-browse.html';}
function openGame(){window.location.href='games-browse.html';}
function openCartoon(){window.location.href='cartoons-browse.html';}
function openWishlist(){alert('Wishlist coming soon');}
function openSettings(){alert('Settings coming soon');}
