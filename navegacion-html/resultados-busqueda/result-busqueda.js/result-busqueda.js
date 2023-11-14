let queryBusqueda = location.search; 
let queryString = new URLSearchParams(queryBusqueda);
let peliBuscada = queryString.get("busqueda"); 
let tituloCambio = document.querySelector(".resultadobusqueda");
let grupo = document.querySelector(".group");
let loader = document.createElement('div'); 
loader.id = 'loader';
loader.classList.add('loader');
loader.textContent = 'Buscando...';

document.body.appendChild(loader); // Agregar el loader al body

let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";

window.addEventListener('load', function () {
  // Muestra el loader al iniciar la búsqueda
  loader.style.visibility = 'visible';

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${peliBuscada}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      tituloCambio.innerHTML = `Resultados de búsqueda para: ${peliBuscada}`;
      grupo.innerHTML = '';

      if (data.results.length === 0) {
        grupo.innerHTML = "No hay resultados para su búsqueda";
      } else {
        for (let i = 0; i < data.results.length; i++) {
          grupo.innerHTML += ` 
            <section class="group"> 
               <div class="item" >
                   <a href="../detalles-pelis-series-html/detail-movie.html">
                       <h3>${data.results[i].title}</h3>
                       <img class="imgJs" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}" />
                   </a>
               </div>
            </section>
          `;
        }
      }

      // Oculta el loader cuando la búsqueda ha terminado y los resultados están cargados
      loader.style.visibility = 'hidden';
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
      // Oculta el loader en caso de error
      loader.style.visibility = 'hidden';
    });
});
