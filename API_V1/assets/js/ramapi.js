// URl api

const API = "https://rickandmortyapi.com/api/character";

//obtener resultados de api

const getData = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json.info);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

//dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class = "col mt-5" >';
    html += '<div class="card" style="width: 18rem;">';
    html += `<img src="${pj.image}" class="card-img-top" alt="${pj.name}">`;
    html += '<div class="card-body">'
    html += `<h5 class="card-title"> ${pj.name} </h5>`
    html += `<p class="card-text"> Status: ${pj.status} </p>`    
    html += `<p class="card-text">Specie: ${pj.species} </p>`

    
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

// paginacion
const paginacion = (data) => {
let prevDisabled = "";
let nextDisabled = "";

data.prev == "null" ? prevDisabled = "disabled" : prevDisabled = "" ;
data.next == "null" ? nextDisabled = "disabled" : nextDisabled = "" ;

let html = `<li class="page-item ${prevDisabled}" > <a class="page-link" onclick="getData('${data.prev}')"> PREVIOUS </a> </li>` +
 `<li class="page-item ${nextDisabled}" > <a class="page-link" onclick="getData('${data.next}')"> NEXT </a> </li>`;

document.getElementById("paginacion").innerHTML = html;


};

//se ejecuta la API

getData(API);
