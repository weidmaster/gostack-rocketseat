import React from 'react';

import Header from './components/Header';

// qualquer componente em React é uma função javascript que retorna HTML

/**
 * 3 conceitos principais para criar qualquer código em React
 * 
 * Componente
 * Propriedade
 * Estado
 */

function App() {
    /** Para podermos retornar vários componentes em sequência, precisamos agrupar
    * os mesmos usando fragmentos, que são tags vazias que não causam efeito
    * visual
    */
    return (
        <>
            <Header title="Homepage" />
            <Header title="Projects" />
        </>
    )
}

export default App;