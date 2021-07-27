// forEach

let animales = ["Fenix","perro", "loro", "gato", "conejo", "dragon"];

for (let item in animales){
    console.log(animales[item]);    
}

animales.forEach(animal => {
    console.log(animal);
});