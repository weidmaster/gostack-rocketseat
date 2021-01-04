import React from 'react';

import Header from './components/Header';

// qualquer componente em React é uma função javascript que retorna HTML

function App() {
    /** Para podermos retornar vários componentes em sequência, precisamos agrupar
    * os mesmos usando fragmentos, que são tags vazias que não causam efeito
    * visual
    */
    return (
        <>
            <Header />
            <Header />
        </>
    )
}

export default App;