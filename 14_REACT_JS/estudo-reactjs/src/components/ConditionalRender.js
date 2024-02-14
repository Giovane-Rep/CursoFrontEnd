const ConditionalRender = () => {
    const x = true;
    const y = false;

    const name = "Maria";

    return (
        <div>
            {/* Render condiocional */}
            <h4>Isso será exibido?</h4>
            {x && <p>Se x for true, sim.</p>}

            <h4>O valor de Y é: </h4>
            {y ? <p>True</p> : <p>False</p>}

            {name === "Maria" ? (
                <div>
                    <p>Olá Maria!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado.</p>
                </div>
            )}

        </div>
    )
}

export default ConditionalRender