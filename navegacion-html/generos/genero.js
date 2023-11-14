let grupo3 = document.querySelector(".group");
let grupo2 = document.querySelector(".group2");
let apiKey = "c3f1b542a75aba6e29f9f4b9e65c7130";

  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  )
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    grupo3.innerHTML = ``;
    console.log(data)
    
    for (let i = 0; i < 8; i++) { 
      localStorage.setItem('genreName', data.genres[i].name);
      grupo3.innerHTML += ` 
      <section class="group">
          <div class="item">
              <a href="../detalle generos/detalle-generos.html?id=${data.genres[i].id}&type=movie&name=${data.genres[i].name}"> <button type="submit"> ${data.genres[i].name} </button> </a>
          </div>
      </section>
      `;
    } 

  })
  .catch(function (err) {
    console.log(err);
  });


    fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`
      )
        .then(function (resp) {
          return resp.json();
            })
      
        .then(function (data) {
          grupo2.innerHTML = ``;
          console.log(data)
        
          for (let i = 0; i < 8; i++) { 
            localStorage.setItem('genreName', data.genres[i].name);
            grupo2.innerHTML += ` 
            <section class="group">
                <div class="item">
                    <a href="../detalle generos/detalle-generos.html?id=${data.genres[i].id}&type=tv&name=${data.genres[i].name}"> <button type="submit"> ${data.genres[i].name} </button> </a>
                </div>
            </section>
            `;
         } 
        })
        .catch(function (err) {
          console.log(err);
        });
    
    