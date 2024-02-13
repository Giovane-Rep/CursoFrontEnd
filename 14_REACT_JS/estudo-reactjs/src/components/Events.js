import React from 'react'

const Events = () => {
    const handleClick = () => {
        console.log("Teste de evento com função");
    };

    // Render Function
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Renderizando outra coisa!</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={() => console.log("Teste de evento")}>Clique aqui</button>
            </div>

            {/* Evento com função */}
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>

            {/* Render Function */}
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    )
};

export default Events