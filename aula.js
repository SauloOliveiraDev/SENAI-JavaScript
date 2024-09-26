let frutas = ["maçã","banana","laranja"];
frutas.push("manga");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.unshift("uva");
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log("\n");

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log("\n");

frutas.forEach(function(fruta){
    console.log(fruta);
});

console.log("\n");

let numero = [1,2,3,4,5,6,7];
let pares = numero.filter(function(numeros) {
    return numeros % 2 === 0;
});

console.log(pares);

let dobrados = numero.map(function(numeros) {
    return numeros * 2;
});

console.log(dobrados);

function removerElementos(array, elemento){
    return array.filter(function(item){
        return item !== elemento;
    });
}
let resultado = removerElementos(numero, 2);

console.log(resultado);

function maiorNumero(array){
    return array.reduce(function(max, atual){
        return (atual > max)? atual : max;
    });
}

let maior = maiorNumero(numero);
console.log(maior);