// Intalação
console.log(axios);

// Primeiro request
const getData = async () => {
    try {
        const response = await postsFetch.get("https://jsonplaceholder.typicode.com/users",
            // Definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                },
            }
        );

        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

getData();

// Imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p");

        emailElement.textContent = user.email;

        div.appendChild(emailElement);

        container.appendChild(div);
    });
}

printData();

// Método post
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("https://jsonplaceholder.typicode.com/posts", {
        title: titleInput.value, 
        body: bodyInput.value, 
        userId: 1
    });
});