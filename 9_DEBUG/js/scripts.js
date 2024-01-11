//strict - Aplica algumas restrições na maneira de programar, como não poder declarar uma variável sem defini-la com const ou let
"use strict";

let teste = 11;

//Debugger
let a = 1;
let b = 2;
let c = 0;

//debugger;

for (let i = 0; i < 5; i++) {
    c = a + b;    
}

//Tratamento de dados com função

function checkNumber (n) {
    const result = Number(n);
    if (Number.isNaN(result)) {
        return console.log("O valor informado não é um número!");
    }

    console.log("Valor correto!");
    return result;
}

let d = 5;

checkNumber("d");
checkNumber(d);
checkNumber("12");

//Exceptions

let x = 5;

if (x < 0) {
    throw new Error("O valor de X não pode ser menor que 0");
}

//Try Catch

try {
    const soma = x + y;
} catch (error) {
    console.log(`Ocorreu algum erro durante a soma: ${error}`);
}