import React from 'react';

// Componentes sempre recebem um parâmetro props, que pode ser desetruturado
// Componentes sempre possuem a propriedade children, que contém o conteúdo inserido entre as tags
export default function Header({ title }) {
    // para retornar um HTML com várias linhas, usamos os parênteses

    // para retornar javascript dentro do HTML, usamos interpolação com chaves
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}