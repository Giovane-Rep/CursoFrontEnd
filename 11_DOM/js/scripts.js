//Movendo se pelo DOM
console.log(document.body);

console.log(document.body.childNodes);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

//Selecionando Elementos por Tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

console.log(listItens[1]);

//Selecionando Elemento por Id
const titulo = document.getElementById("title");

console.log(titulo);

console.log(titulo.textContent);

//Selecionando Elementos por Classe
const produtos = document.getElementsByClassName("product");

console.log(produtos);

console.log(produtos[1]);

//Selecionando Elementos por regras de CSS
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

//insertBefore
const p = document.createElement("p");

console.log(p);

const header = titulo.parentElement

console.log(header);

header.insertBefore(p, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, titulo);

//createTextNode
const myText = document.createTextNode("Adicionando mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

//Trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com.br");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

//Altura e Largura
const footer = document.querySelector("footer");

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

//Posição do Elemento
const product1 = produtos[0];

console.log(product1);

console.log(product1.getBoundingClientRect());

//Alterando Estilos do Elemento
mainContainer.style.color = "blue";
mainContainer.style.backgroundColor = "gray";
mainContainer.style.paddingBottom = "15px";

//Alterando Estilos de vários Elementos
for(const li of listItens) {
    li.style.backgroundColor = "F2F2F2";
    li.style.border = "2px solid black";
    li.style.padding = "15px";
}
