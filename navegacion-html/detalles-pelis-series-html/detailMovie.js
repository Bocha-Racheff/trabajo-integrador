let queryBusqueda = location.search; //string
let queryString = new URLSearchParams(queryBusqueda);
let IdBuscada = queryString.get("id"); 
let grupo = document.querySelector(".group")
let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";

fetch(`https://api.themoviedb.org/3/movie/${IdBuscada}?api_key=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    grupo.innerHTML = ``;

    let generoS = ""
    for (let i=0; i<data.genres.length;i++){
        generoS += data.genres[i].name + " / "
    }

      grupo.innerHTML += ` 
        <section class="group"> 
          <div class="item">
            <a href="./detalles-pelis-series-html/detail-movie.html">
              <h3>${data.title}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.poster_path}" />
              <p>Fecha de Estreno: ${data.release_date}</p>
              <p> Duracion: ${data.runtime} min</p>
              <p>
                   Sinopsis: ${data.overview}

            <a href="../generos/genero.html">
                <p>Genero al que pertenece la pelicula: ${generoS} </p> 
            </a>
            <a href="../favoritos/favoritos.html">
                <button type="submit"> Agregar a favoritos </button>
            </a>

          </div>
        </section>
      `;
    })
  .catch(function (error) {
    console.log(error);
  });


/* BOTON RECOMENDACIONES */

let recomendaciones = document.querySelector(".recomendaciones")
let grupoRec = document.querySelector(".group-rec")

recomendaciones.addEventListener("click", function (event) {
    let recNone = document.querySelector(".rec-none")
    recNone.style.display="flex"
})

fetch(`https://api.themoviedb.org/3/movie/${IdBuscada}/recommendations?api_key=${apiKey}`)

    .then(function (resp) {
        return resp.json();
      })
    
      .then(function (data) {
        console.log(data)   
        
    for (let i = 0; i < 5; i++) {
        grupoRec.innerHTML += ` 
          <section class="group"> 
            <div class="item">
              <a href="./detalles-pelis-series-html/detail-movie.html?id=${data.results[i].id}">
                <h3>${data.results[i].title}</h3>
                <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}" />
                <p>Fecha de Estreno: ${data.results[i].release_date}</p>
              </a>
            </div>
          </section>
        `;
      } 
    console.log("hizo ENTER en el boton");
  })
