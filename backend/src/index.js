const { request, response } = require('express');
const express = require('express');

const app = express();

// Routes
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

// create http server, accessible by http://localhost:3333
app.listen(3333, () => {
    console.log('🚀 Backend started!');
});