//Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au Au");
    }
}

console.log(animal.nome);

animal.latir();

// Método com THIS

const pessoa = {
    nome: "Maria",
    getNome: function () {
        return this.nome;
    },
    setNome: function (nome) {
        this.nome = nome;
    }
}

console.log(pessoa.getNome());

pessoa.setNome("José");

console.log(pessoa.getNome());

//Prototype

const text = "asd";
const number = 27;

console.log(Object.getPrototypeOf(text));
console.log(Object.getPrototypeOf(number));

//Classes básicas

const cachorro = {
    raca: null,
    getRaca: function () {
        return this.raca;
    },
    setRaca: function (raca) {
        this.raca = raca;
    }
}

const pastorAlemao = Object.create(cachorro);
const bulldog = Object.create(cachorro);

pastorAlemao.setRaca("Pastor Alemão");
bulldog.setRaca("Bulldog");

console.log(pastorAlemao.getRaca());
console.log(bulldog.getRaca());

//Função como classe - Classe com construtor

function criarCachorro (nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira Lata");

console.log(bob.nome,"-", bob.raca);

//Funções como classe

function Cachorro (nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro ("Cléber", "Husky");

console.log(husky.nome,"-",husky.raca);

//Funções como classe - Métodos

Cachorro.prototype.latir = function () {
    console.log("Au au");
}

husky.latir();

//Classes ES6 - Modelo usado atualmento e comum em outras linguagens

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca
    }
}

const max = new CachorroClasse ("Max", "Labrador");

console.log(max.nome, "-", max.raca);

// Métodos em Classes ES6

class Caminhao {
    constructor (eixos, cor) {
        this.eixos = eixos;
        this.cor = cor
    }

    descreverCaminhao () {
        return console.log(`Este caminhão possui ${this.eixos} eixos, e tem cor: ${this.cor}`);
    }
}

const caminhao1 = new Caminhao(9, "Branca");

caminhao1.descreverCaminhao();

//Override

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const beatriz = new Humano ("Beatriz", 30);

console.log(beatriz);

Humano.prototype.idade = "Não definida"; //Sobrescrita do valor padrão

console.log(beatriz.idade);

console.log(Humano.prototype.idade);

//Symbol em classes - Utilizado para quando se tem valores que não podem ser alterados, 
//como constantes numéricas ou valores que serão repetidos entre os objetos

class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
}

const empresa = Symbol();

Funcionario.prototype[empresa] = "GD Cosméticos";

func1 = new Funcionario("Fernando", "Gerente");

console.log(func1);
console.log(func1[empresa]);

//Getters e Setters

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo () {
        return `Você está lendo: ${this.titulo}`;
    }

    set definirTitulo(titulo) {
        this.titulo = titulo
    }

    get exibirTags () {
        return this.tags;
    }

    set definirTags (tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post ("Meu primeiro Post.", "Meu primeiro post do Blog.");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.definirTitulo = "Blog - Meu primeiro Post";

console.log(myPost.exibirTitulo);

myPost.definirTags = "programação, javascript, orientacaoAObjetos";

console.log(myPost.exibirTags);

//Herança

class Animal {
    constructor(especie) {
        this.especie = especie;
    }
}

class Mamifero extends Animal {
    constructor (especie, gestacao) {
        super(especie, especie);
        this.gestacao = gestacao;
    }
}

const baleia = new Mamifero ("Baleia Jubarte", 11);

console.log(baleia);

//InstanceOf - Utilizado para verificar se alguma instancia pertence á alguma classe

console.log(baleia instanceof Mamifero);
console.log(Mamifero instanceof Animal);
