import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5003/',
});

export default http;