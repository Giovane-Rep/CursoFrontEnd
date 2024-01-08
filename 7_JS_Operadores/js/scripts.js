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

//Vetores 

let testeVetor = [1, 2, 4, 7, 9];

for (let i = 0; i < testeVetor.length; i++) {
    console.log(testeVetor[i]);
}

//Objetos

let pessoa = {
    name: "Maria",
    age: 32,
    address: "Rua A"
}

console.log(pessoa);
console.log(pessoa.name);

//Criando e deletando atributo de um objeto

let car = {
    engine: 2.0,
    brand: "VW",
    model: "Gol",
    KM: 20000
}

console.log(car);

car.doors = 4; //Incrementa outro atributo

console.log(car);

delete car.doors;//Deleta um atributo

console.log(car);

//Propriedade keys e entries da classe Object

console.log(Object.keys(car)); //Exibe uma lista com as propriedades/atributos do objeto

console.log(Object.entries(car)); //Além das propriedades do objeto exibe também os valores atribuidos a cada propriedade

//push e pop - Adicionam ou remove um elemento no final do array respectivamente

const vect = ["a", "b", "c"];

console.log(vect);

vect.push("d");

console.log(vect);

vect.pop();// Pode ter o elemento especificado ou não: vect.pop("d")

console.log(vect);

const itemRemovido = vect.pop(); //é possível armazenar o item removido

console.log(itemRemovido);
console.log(vect);

//shif e unshif - Remove ou adiciona um elemento no início do array respectivamente

vect.shift();

console.log(vect);

vect.unshift("a");

console.log(vect);

//REST Operator, usado para receber indefinidos argumentos em uma função

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(somaInfinita (2, 3, 5, 7, 10));

//Estrutura de repetição FOR...OF

const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3, 4, 5));

//Destructuring em Objetos

const userDetails = {
    firstname: "Maria",
    lastName: "José",
    job: "Programadora"
}

const {firstname, lastName, job} = userDetails;

console.log(firstname, lastName, job);

//Renomear variáveis no Destructuring

const {firstname: primeiroNome} = userDetails;

console.log(primeiroNome);

//Destructuring em Arrays

const myList = ["Avião", "Carro", "Bicicleta"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoC);
console.log(veiculoB);

//JSON

const myJson = '{"name": "José", "age": 33, "skills": ["PHP", "JavaScript", ".NET"]}' //Não tem utilidade nesse estado, é necessário converter para object literal

console.log(myJson);

//Conversão de JSON para Object e de Object para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
