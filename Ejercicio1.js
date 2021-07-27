// fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let minuto = fecha.getHours() + "-" + fecha.getUTCMinutes();

console.log(fecha);
console.log(anio + "/" + mes + "/" + dia + " : " + minuto );