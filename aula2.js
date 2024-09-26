let frutas = ["Banana", "Maçã", "Jaca"];
function removerElementos(array, elemento){
    return array.filter(function(item){
        return item !== elemento;
    });
}

let resultado = removerElementos(frutas, "Banana");

console.log(resultado);