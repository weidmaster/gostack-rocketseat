const { request, response } = require('express');
const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

// Routes
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});

// create http server, accessible by http://localhost:3333
app.listen(3333, () => {
    console.log('🚀 Backend started!');
});