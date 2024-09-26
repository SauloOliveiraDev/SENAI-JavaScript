let num = 1;
let soma = 0;

while (num <= 10) {
    soma += num;
    num++;
}

console.log("A soma dos números de 1 a 10 é: " + soma);

num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num + " é par");
    }
    num++;
}

let somaN = 0;
let pedirNumero;
while (pedirNumero !== 0){
    pedirNumero = parseInt(prompt("Digite um número (0 para sair):"));
    somaN += pedirNumero;
}
console.log("A soma dos números digitados é: " + somaN);