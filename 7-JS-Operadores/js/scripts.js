// Variáveis
let nome;

nome = "Teste";

let a = 2, b = 4, c = 6;
let result = 0;

result = b * c / a

console.log(result);
console.log(nome);

// função prompt() - Lê um dado inserido pelo usuário no console

// let y = prompt("Digite um número: ");
// console.log(y);

// função alert() - Exibe um popup na tela

//exemplo: alert("Error 404");

// Math

console.log (Math.max(10, 2, 23, 1, 24, 5, 8));
console.log(Math.floor(12.53));
console.log(Math.ceil(12.53));

//IF 

const x = 12

let numero = 2;

if (numero < x) {
    console.log("O valor digitado é menor que 12");
} if (numero > x) { 
    console.log("O valor digitado é maior que 12");
} else if(numero == 12) {
    console.log("O valor digitado é igual a 12");
}

//WHILE

let num = 0;

while (num < 10) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
} while (num > -1);

//FOR

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//FUNÇÔES

function soma (a, b) {
    let result = a + b;
    return result;
}
console.log("A soma de 4 e 7 é: " + soma (4, 7));

//ARROW FUNCTION

const testeArrow = () => {
    console.log("Está é uma arrow function.")
}

testeArrow();

const parOuImpar = (a) => {
    if (a % 2 === 0) {
        console.log("Este número é par");
    } else {
        console.log("Este número é ímpar");
    }
}

parOuImpar(0);

//ARROW FUNCTION SINTAXE REDUZIDA

const quadrado = (x) => x * x; //Geralmente utilizada em funções simples
console.log("O quadrado do número 3 é: " + quadrado(3));

//PARÂMETRO OPCIONAL

const multiplicação = function (m, n) {
    if (n === undefined) {
        return console.log("Valor de n não inserido");
    } else {
        return console.log("O resultado da multiplicação é: " + m * n);
    }
}

multiplicação(3, 8);

//Argumento Default

const showNumber = (n = 3) => { //Caso o valor de n não ser definido na chamada da função o valor mostrado será o atribuido no argumento da função
    console.log("o valor de n é: " + n);
}

showNumber();
showNumber(2);

//Recursividade

function loop (n) {
    console.log(n);
    n += 1;
    if (n <= 10) {
        loop (n);
    }
}

loop (0);

//ARRAYS 

let teste = [1, 2, 4];

for (let i = 0; i < teste.length; i++) {
    console.log(teste[i]);
}