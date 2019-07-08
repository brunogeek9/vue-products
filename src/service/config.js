import axios from 'axios';
export const http = axios.create({
    baseURL : 'https://my-json-server.typicode.com/brunogeek9/fake-products-api/',
    
})