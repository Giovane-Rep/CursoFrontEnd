import { useState } from 'react'

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Sem useState</p>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>

            <div>
                <p>Com useSate</p>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(24)}>Mudar variável</button>
            </div>
        </div>
    )
}

export default Data