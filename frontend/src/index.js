import React from 'react';
import { render } from 'react-dom';

// Para escrever HTML dentro do javascript, é necessário uar o '@babel/preset-react'

// JSX: HTML dentro do Javascript (Javascript XML)
render(<h1>Hello World</h1>, document.getElementById('app'));