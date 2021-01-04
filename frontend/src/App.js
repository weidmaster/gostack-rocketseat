import React, { useState, useEffect } from 'react';
import api from './services/api';

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
    const [projects, setProjects] = useState([]);

    // inicializar o useState com o mesmo tipo de dado esperado pela variável

    /** 
     * useState retorna um array com 2 posições
     * 1. variável com o seu valor inicial
     * 2. função para atualizar o valor
     */

    /**
     * useEffect - dispara uma função quando determinada condição é satisfeita
     * Recebe 2 argumentos: a função e quando quer disparar a mesma.
     * Se a ideia é disparar apenas quando o componente for exibido em tela a primeira vez, o segundo argumento é um
     * array vazio, caso contrário, o array é definido com as dependências, ou seja, as variáveis que devem ser observadas
     * que ao serem alteradas realização o disparo da função.
     */

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`); // forma clássica. Não atualiza o front

        // No React devemos evitar utilizar funções que alteram variáveis e sim recriar essas variáveis com novos valores

        //setProjects([...projects, `Novo projeto ${Date.now()}` ])

        // Imutabilidade. Copia o valor de projects e adiciona novo valor, atualizando o front

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Eduardo WB"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    /** Para podermos retornar vários componentes em sequência, precisamos agrupar
    * os mesmos usando fragmentos, que são tags vazias que não causam efeito
    * visual
    */
    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;