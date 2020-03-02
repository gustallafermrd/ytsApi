const latestMovies = document.querySelector('.latest-movies');
const upcomingMovies = document.querySelector('.upcoming-movies');
function traer() {
  fetch('https://yts.mx/api/v2/list_movies.json')
  .then(res => res.json())
  .then(latest => {
    //console.log(latest.data.movies);
    //console.log(latest.data.movies[0].medium_cover_image);
    pelis = latest.data.movies;
    let html = '';
    pelis.forEach(peli => {
      html += `
        <div class="col">
          <img src="${peli.medium_cover_image}" alt="">
          <div class="text">
            <p>${peli.title}</p>
            <p>${peli.genres}</p>
            <p>${peli.year}</p>
            <p><a href="${peli.url}" target="_blank">Ir al Sitio</a></p>
            <p><a href="${peli.torrents[0].url}" target="_blank">Descargar Torrent 720p</a></p>
          </div>
        </div>
      `
    });
    latestMovies.innerHTML = html;
  })
}
