import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://tinderclone5472.herokuapp.com/',
});
export default instance;