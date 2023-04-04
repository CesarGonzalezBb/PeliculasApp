import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a0f8c1c357508a4a4bd2865179f5cb00',
        language: 'es-ES',
    }
});

export default movieDB;