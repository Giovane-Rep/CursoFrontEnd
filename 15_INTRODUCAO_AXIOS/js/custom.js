// Custom instance
const postsFetch = axios.create({
    baseUrl: "https://jsonplaceholder.tipycode.com",
    headers: {
        Accept: "application/json",
        Authorization: "meunovotoken"
    }
});