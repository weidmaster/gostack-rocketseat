import React from 'react';

// Componentes sempre recebem um parâmetro props, que pode ser desetruturado
export default function Header(props) {
    // para retornar um HTML com várias linhas, usamos os parênteses

    // para retornar javascript dentro do HTML, usamos interpolação com chaves
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}