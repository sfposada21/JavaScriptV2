// URl api

const API = "https://swapi.dev/api/people/";

//obtener resultados de api

const getData = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};



//dibujar cards de personajes
const llenarDatos = (data) => {
  let html = "";

for (let i = 0; i < data.length; i++) {

  let pj = data[i]
  
    html += '<div class = "col mt-5" >';
    html += '<div class="card" style="width: 12rem;">';
 
    html += '<div class="card-body">'
    html += `<h5 class="card-title"> ${pj.name} </h5>`
    html += `<p class="card-text"> Altura: ${pj.height} </p>`    
    html += `<p class="card-text"> Peso: ${pj.mass} </p>`

    
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
  }
    
  document.getElementById("datosPersonajes").innerHTML = html;
};

// paginacion
const paginacion = (data) => {
let prevDisabled = "";
let nextDisabled = "";

data.previous == "null" ? prevDisabled = "disabled" : prevDisabled = "" ;
data.next == "null" ? nextDisabled = "disabled" : nextDisabled = "" ;

let html = `<li class="page-item ${prevDisabled}" > <a class="page-link" onclick="getData('${data.previous}')"> PREVIOUS </a> </li>` +
 `<li class="page-item ${nextDisabled}" > <a class="page-link" onclick="getData('${data.next}')"> NEXT </a> </li>`;

document.getElementById("paginacion").innerHTML = html;


};

//se ejecuta la API

getData(API);
