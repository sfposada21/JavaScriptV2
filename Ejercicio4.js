// array


let persona = []; // array vacio

persona[0] = 1;
persona[1]= 2;
// dejare el 2 vacio
persona[3]= 3;

let animales = ["perro", "loro", "gato", "conejo", "dragon"];
// agregar
animales.push("fenix");  // al final
animales.unshift("fenix"); // principio

//borrar
animales.splice(3,1); // primer numero es lugar, segundo es cantidad

console.log(persona);
console.log(animales);

for (animal in animales) {       
    console.log(animales[animal])
    }