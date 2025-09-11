import axios from 'axios';

const networkClient = axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
    }
});

export { networkClient };
