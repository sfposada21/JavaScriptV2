// URl api

const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//obtener resultados de api

const getData = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      pokeData(json.results), paginacion(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const pokeData = (data) => {
  let html = "";
  document.getElementById("datosPersonajes").innerHTML = " ";
  data.forEach( (pj) => {
    const URL = pj.url; 
    return fetch(URL)
    .then((response)=> response.json())
    .then((json)=>{
      llenarDatos(json, html)
    })
    .catch((error) => {
      console.log("error", error);
    })
  }) 
};

//dibujar cards de personajes
const llenarDatos = (data ,html) => {
    
    html += '<div class = "col mt-5" >';
    html += '<div class="card" style="width: 12rem;">';
    html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">`;
    html += '<div class="card-body">'
    html += `<h5 class="card-title"> Altura: ${data.height} </h5>`
    html += `<p class="card-text"> PESO: ${data.weight} </p>`    
    //html += `<p class="card-text">Specie: ${pj.species} </p>`
    
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
  document.getElementById("datosPersonajes").innerHTML += html;
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
