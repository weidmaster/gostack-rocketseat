import axios from 'axios';

// services são scripts que se comunicam com aplicativos externos

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;