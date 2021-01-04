import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';

// qualquer componente em React é uma função javascript que retorna HTML

/**
 * 3 conceitos principais para criar qualquer código em React
 * 
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 */

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    /** 
     * useState retorna um array com 2 posições
     * 1. variável com o seu valor inicial
     * 2. função para atualizar o valor
     */

    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`); // forma clássica. Não atualiza o front

        // No React devemos evitar utilizar funções que alteram variáveis e sim recriar essas variáveis com novos valores

        setProjects([...projects, `Novo projeto ${Date.now()}` ])

        // Imutabilidade. Copia o valor de projects e adiciona novo valor, atualizando o front
    }

    /** Para podermos retornar vários componentes em sequência, precisamos agrupar
    * os mesmos usando fragmentos, que são tags vazias que não causam efeito
    * visual
    */
    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;