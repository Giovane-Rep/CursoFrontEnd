import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Pedro", "Maria", "José"]);

    const [users, setUsers] = useState([
        { id: 1, name: "João", age: 18 },
        { id: 2, name: "Fernando", age: 28 },
        { id: 3, name: "Clara", age: 38 },
        { id: 4, name: "Diana", age: 48 }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id));
    }

    return (
        <div>
            {/* Para uma lista impressa desta forma um erro será apresentado, pois os itens da lista não possuem ID */}
            <p>Render List sem Id (key)</p>
            <ul>
                {/* Uma abordagem não muito utilizada para remover o erro de não possuir key é passar o índice da lista como se fosse */}
                {list.map((item, i) => ( // Se atentar para o uso dos parênteses
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {/* Render List com Id (key) */}
            <p>Render List com Id (key)</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} - {user.age} anos</li>
                ))}
            </ul>
            {/* previous state */}
            <p>Previous state</p>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
}

export default ListRender;