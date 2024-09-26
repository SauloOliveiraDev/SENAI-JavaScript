function todosSaoPares(array){
    return array.every(function(numero){
        return numero % 2 === 0;
    });
}

let numeros = [2,4,6];
console.log(todosSaoPares(numeros));

let numero = [1,2,3,4,5,6,7,8];
console.log(todosSaoPares(numero));

function somaPares(array){
    return array.filter(function(numero){
        return numero % 2 === 0;
    })
    .reduce(function(soma, numero){
        return soma + numero;
    }, 0);
}

let resultados = somaPares(numero);
console.log(resultados);

let resultado = somaPares(numeros);
console.log(resultado);

function calcularMedia(array){
    let soma = array.reduce(function(total, numero){
        return total + numero;
    }, 0);
    return soma / array.length;
}

let media = calcularMedia(numero);
console.log(media);

function contemElemento(array, elemento){
    return array.includes(elemento);
}

let frutas = ["maçã","banana","laranja","manga"];
console.log(contemElemento(frutas,"laranja"));
console.log(contemElemento(frutas,"uva"));

function ordenarCrescente(array){
    return array.sort(function(a, b){
        return a - b;
    });
}
numerosD = [5,7,4,2,1,6,3,7,2,2];
let ordenado = ordenarCrescente(numerosD);

function multiplicarPor(array, multiplicador) {
    return array.map(function(numero){
        return numero * multiplicador;
    });
}

let multiplicados = multiplicarPor(numero, 2);
console.log(multiplicados);

function contarOcorrencias(array, elemento){
    return array.reduce(function(contador, valorAtual){
        return valorAtual === elemento ? contador + 1 : contador;
    }, 0);
}

let ocorrencia = contarOcorrencias(numerosD, 2);
console.log(ocorrencia);

function mesclarEremoverDuplicatas(array1, array2){
    let mesclado = array1.concat(array2);
    return [...new Set(mesclado)];
}

let array1 =[1,2,3];
let array2 = [3,4,5,6];

let mesclado = mesclarEremoverDuplicatas(array1, array2);
console.log(mesclado);

function inverterArray(array){
    return array.reverse();
}

let inverso = inverterArray(numero);
console.log(inverso);

function removerFalsosValores(array){
    return array.filter(Boolean);
}

let valores = ["", "banana", null, "maçã", false, "maçã"];
let resultadoRemoverFalsos = removerFalsosValores(valores);
console.log(resultadoRemoverFalsos);

function filtrarNumerosPares(array){
    let resultado = [];
    for(let i = 0 ; i < array.length; i += 2){
        resultado.push([array[i], array[i+1]]);
    }
    return resultado;
}

let numeroInverter = [1, 2, 3, 4, 5, 6];

let numerosPares = filtrarNumerosPares(numeroInverter);
console.log(numerosPares);