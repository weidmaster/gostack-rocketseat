import React from 'react';
import { render } from 'react-dom';

import App from './App'; // importando um componente React

// Para escrever HTML dentro do javascript, é necessário uar o '@babel/preset-react'

// JSX: HTML dentro do Javascript (Javascript XML)

// Qualquer componente React (função com inicial maiúscula) pode ser escrito como uma tag HTML
render(<App />, document.getElementById('app'));