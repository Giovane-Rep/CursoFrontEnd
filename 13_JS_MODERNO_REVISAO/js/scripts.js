//FILTER
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
    if (n > 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    { name: "Maria", available: true },
    { name: "João", available: false },
    { name: "José", available: true },
    { name: "Carlos", available: false },
    { name: "Otávio", available: true }
]

const availableUsers = users.filter((user) => {
    if (user.available === true) {
        return user;
    }
});

availableUsers.forEach((user) => {
    console.log(user.name);
});

const availableUsers2 = users.filter((user) => user.available);

availableUsers2.forEach((user) => {
    console.log(user.name);
});

//MAP
console.log();

const products = [
    { name: "Camisa", price: 10.22, category: "Roupas" },
    { name: "Mesa", price: 122.11, category: "Móveis" },
    { name: "Cadeira", price: 23.98, category: "Móveis" },
    { name: "Bermuda", price: 12.96, category: "Roupas" },
    { name: "Calça", price: 44.55, category: "Roupas" }
]

products.map((product) => {
    if (product.category === "Roupas") {
        product.onSale = true;
    }
});

const productsOnSale = products.filter((product) => product.onSale);

productsOnSale.forEach((product) => {
    console.log(product.name);
});

//SPREAD OPERATOR
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

//CLASSES
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }


    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa", 100);

console.log(shirt);

console.log(shirt.productWithDiscount(20));

//HERANÇA
class ProductWithAttributs extends Product {
    constructor(name, price, colors) {
        super(name, price),
            this.colors = colors
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const shirt2 = new ProductWithAttributs ("Blusa", 120, ["Blue", "Pink"]);

console.log(shirt2);

console.log(shirt2.productWithDiscount(20));

shirt2.showColors();