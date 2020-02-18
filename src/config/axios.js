import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "https://my-json-server.typicode.com/genarogg/sale-of-books-CRUD/"
});

export default clienteAxios;