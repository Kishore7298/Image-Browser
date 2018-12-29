import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID 70163fbb4c0f77e17e2d4e26a013d5f73c01a1598a61dbc3d4e9908b5268baba"
    } 
})