let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

  
let boton = document.querySelector(".boton");
boton.addEventListener("click", function () {
  console.log("hizo click en el boton");
});

let formDelBoton = document.querySelector(".formulario");

formDelBoton.addEventListener("submit", function (event) {
  console.log("hizo ENTER en el boton");
}); 


/* MOVIES API */
let grupo = document.querySelector(".group");
fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
)
  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    console.log(data)
    grupo.innerHTML = ``;
  
    for (let i = 0; i < 5; i++) {
      grupo.innerHTML += ` 
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
  
  ;
  })
  .catch(function (err) {
    console.log(err);
  });
  

/* SERIES API */

let grupo2 = document.querySelector(".group2");
fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`
)
  .then(function (resp) {
    return resp.json();

  })

  .then(function (data) {
    grupo2.innerHTML = ``;
    console.log(data)
    for (let i = 0; i < 5; i++) {
      grupo2.innerHTML += ` 
        <section class="group2"> 
          <div class="item">
            <a href="./detalles-pelis-series-html/detail-serie.html?id=${data.results[i].id}">
              <h3>${data.results[i].original_name}</h3>
              <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].title}" />
              <p>Fecha de Estreno: ${data.results[i].first_air_date}</p>
            </a>
          </div>
        </section>
      `;
    } /* Y PREGUNTAR COOMO HACER CON EL LINK DE API DE PELIS VALORADAS POR LO DEL GUEST_SESSION_ID */ /* Tambien preguntar  */
  
;
  })
  .catch(function (err) {
    console.log(err);
  });
  

  /* PELIS MAS VALORADAS API */
  let grupo3 = document.querySelector(".group3");
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  )
    .then(function (resp) {
      return resp.json();
        })
  
    .then(function (data) {
      grupo3.innerHTML = ``;
      console.log(data)
    
      for (let i = 0; i < 5; i++) {
        grupo3.innerHTML += ` 
          <section class="group2"> 
            <div class="item">
              <a href="./detalles-pelis-series-html/detail-movie.html?id=${data.results[i].id}">
                <h3>${data.results[i].original_title}</h3>
                <img class="pelispopus" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="${data.results[i].original_title}" />
                <p>Fecha de Estreno: ${data.results[i].release_date}</p>
              </a>
            </div>
          </section>
        `;
      } 
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
    
    