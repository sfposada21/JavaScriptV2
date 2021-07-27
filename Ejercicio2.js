// Insertar variables en texto

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate();
let minuto = fecha.getHours() + "-" + fecha.getUTCMinutes();

let formatoFecha = `El Año es : ${anio} del mes ${mes} y dia ${dia}`;

console.log(fecha);
console.log(formatoFecha);