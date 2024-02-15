import "./MyForm.css"

import { useState } from "react";

const MyForm = ({ userName, userEmail, userBio }) => {
    // Gerenciando dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState(userBio);
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // Envio de Form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

        //Aqui teria a etapa de validação
        //E envio

        // Limpando o formulário após o envio
        setName("");
        setEmail("");
        setBio("");
    };

    //console.log(name, email);

    return (
        <div>
            {/* Criação de form */}

            {/* Envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                        onChange={handleName}
                        // Controlled inputs - Usados para carregar valores pré definidos no input
                        value={name || ""}
                    />

                </div>

                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        // Simplificando a manipulação
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        // Controlled inputs - Usados para carregar valores pré definidos no input
                        value={email || ""}
                    />
                </label>

                {/* Input textarea */}
                <label>
                    <span>Bio: </span>
                    <textarea name="bio"
                        placeholder="Descrição do usuário"
                        onChange={(e) => {
                            setBio(e.target.value)
                        }}
                        value={bio}
                    ></textarea>
                </label>

                {/* Select */}
                <label>
                    <span>Função no sistema</span>
                    <select
                        name="role"
                        onChange={(e) => {
                            setRole(e.target.value)
                        }}
                        value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default MyForm;