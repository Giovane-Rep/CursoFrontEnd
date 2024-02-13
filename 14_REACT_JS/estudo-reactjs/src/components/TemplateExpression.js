const TemplateExpression = () => {
    const name = "Giovane";

    const data = {
        age: 26,
        job: "Programador"
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vindo {name}</h3>
            <p>Idade: {data.age}, Profissão: {data.job}</p>
        </div>
    )
}

export default TemplateExpression;