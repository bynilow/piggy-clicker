import axios from 'axios';

const networkClient = axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        "Content-Type": "application/json",
        "X-User-ID": localStorage.user_id
    },
    withCredentials: true,
});

export { networkClient };
