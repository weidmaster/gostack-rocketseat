const { request, response } = require('express');
const express = require('express');

const app = express();

// Express não aceita o formato JSON como padrão. Essa linha muda esse comportamento.
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos (Atualizar/Deletar)
  * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
  */

// Routes
app.get('/projects', (request, response) => {
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

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