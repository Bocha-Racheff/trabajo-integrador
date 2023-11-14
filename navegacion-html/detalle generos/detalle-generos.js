let queryDeBusqueda = location.search; //string
let queryString = new URLSearchParams(queryDeBusqueda);
let IdBuscado = queryString.get("id"); 
let type = queryString.get("type"); 

let nombre = queryString.get("name"); 
let nombree = localStorage.getItem('genreName'); 

let grupo = document.querySelector(".group")
let grupo2 = document.querySelector(".group2")
let titulo = document.querySelector("h2")

let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";


fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&with_genres=${IdBuscado}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    titulo.innerText = nombre

      for (let i = 0; i<5 ; i++){
        let nombrePropiedad 

        if (data.results[i].name !== undefined){
          nombrePropiedad = data.results[i].name
        }
        else{
          nombrePropiedad = data.results[i].title
        }

        grupo.innerHTML += ` 
        
            <div class="item" > 
              <a href="../detalles-pelis-series-html?id=${data.results[i].id}">
                  <h3>${nombrePropiedad}</h3>
                  <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Película 1">
              </a>
             </div>
             `
      }
       
    })
  .catch(function (error) {
    console.log(error);
  });

  
/* PREGUNTAR POR QUE NO SE PONE EL TITULO DE CUANDO APRETO BOTON EN PAG GENERO
Y AHÍ ENTRA AL DETALLE DE GENERO Y MUESTRA PELIS DE ESE GENERO. ADEMAS PREGUNTAR POR QUE NO SE RE DIRIGE A LA PAGINA DE
DETALLE DE LA PELI QUE SE CLICKEA AHI */
/* 
fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&with_genres=${IdBuscado}`)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  grupo2.innerHTML = ``;

    grupo2.innerHTML += ` 
      <h2>Genero: ${nombre}</h2>
      <section class="group">

          <div class="item" > 
                <h3>${data.results[1].name}</h3>
                <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}" alt="Película 1">
           </div>

          <div class="item">
              <h3>${data.results[1].name}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[1].poster_path}" alt="Película 2">
          </div>

          <div class="item">
              <h3>${data.results[2].name}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[2].poster_path}" alt="Película 3">
          </div>

          <div class="item">
              <h3>${data.results[3].name}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[3].poster_path}" alt="Película 4">
          </div>

          <div class="item">
              <h3>${data.results[4].name}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[4].poster_path}" alt="Película 5">
          </div>
          <script src="./detalle-generos.js"> </script>
      </section>
    `;
  })
.catch(function (error) {
  console.log(error);
});

 */