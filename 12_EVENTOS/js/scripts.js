//Adicionando Eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui");
})

//Removendo Eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem () {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdButton = document.querySelector("#other-button");

thirdButton.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

//Argumento do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

//Propagação de Eventos
const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Evento 2");
});

//Removendo Evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("O comportamento padrão do evento foi alterado.");
});

//Eventos de teclas
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
});

//Outros eventos do mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão do mouse");
});

mouse.addEventListener("mouseup", () => {
    console.log("Segurou o botão do mouse");
});

mouse.addEventListener("dblclick", () => {
    console.log("Double click do mouse");
});

//Evento de movimento do mouse
// document.addEventListener("mousemove", (e) => {
    // console.log(`Eixo X: ${e.x}`);
    // console.log(`Eixo Y: ${e.y}`);
    // console.log("Movimentando o mouse");
// });

//Evento de Scroll
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 100) {
        console.log("Passamos de 200px");
    }
});

//Evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});

//Evento de carregamento
// window.addEventListener("load", () => {
//     console.log("A pagina carregou");
// });

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     e.returnValue = "";
// });

//debounce
const debounce = (f, delay) => {
    let timeOut;

    return (...argments) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }

        timeOut = setTimeout (() => {
            f.apply(argments);
        }, delay);
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
}, 400));
