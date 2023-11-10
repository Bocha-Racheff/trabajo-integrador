let queryBusqueda = location.search; //string
let queryString = new URLSearchParams(queryBusqueda);
let peliBuscada = queryString.get("busqueda"); //Pepe, Rick, Pedro
let tituloCambio = document.querySelector(".resultadobusqueda");
let grupo = document.querySelector(".group");
let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";
fetch(
  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${peliBuscada}`
)
  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    tituloCambio.innerHTML = `Resultados de búsqueda para: ${peliBuscada}`;
    grupo.innerHTML = ``;

    if (data.results.length === 0) {
      grupo.innerHTML = "No hay resultados para su búsqueda";
    } else {
      for (let i = 0; i < data.results.length; i++) {
        grupo.innerHTML += ` 
        <section class="group"> 
             <div class="item" >
                 <a href="../detalles-pelis-series-html/detail-movie.html">
                     <h3>${data.results[i].title}</h3>
                     <img class="imgJs" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}"" />
                 </a>
             </div>
        </section>
        `;
      }
    }
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
