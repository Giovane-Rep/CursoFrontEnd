//setTimeout

console.log("Execução normal!");

setTimeout(function () {
    console.log("Execução assíncrona com setTimeout");
}, 2000);

console.log("Execução normal!");

//setInterval

console.log("Execução normal!");

// setInterval(function () {
//     console.log("Execução assíncrona com o setInterval!");
// }, 3000);

console.log("Execução normal!");

//Promise

const promessa = Promise.resolve(5 + 5);

console.log("Algum código!");

promessa.then((value) => {
    console.log(`A soma é: ${value}`);
})

console.log("Algum código!");

//Falha na Promise

Promise.resolve(4 * "a")
.then((n) => {
    if (Number.isNaN(n)) {
        throw new Error ("Valores inválidos!");
    }
})
.catch((error) => console.log(`Um erro ocorreu: ${error}`));

//reject

// function checkNumber (n) {
//     return new Promise ((resolve, reject) => {
//         if (n > 10) {
//             resolve(`O número é maior que 10`);  
//         } else {
//             reject(new Error("Número muito baixo"));
//         }
//     });
// }

// const a = checkNumber(20);
// const b = checkNumber(5);

// console.log(a, b);

// a.then((v) => console.log `O resultado é: ${v}`).catch((error) => console.log(`Um erro ocorreu ${error}`));

// b.then((v) => console.log `O resultado é: ${v}`).catch((error) => console.log(`Um erro ocorreu ${error}`));

//async Function

async function somarComDelay (a, b) {
    return a + b;
}

somarComDelay (2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("Execução normal");