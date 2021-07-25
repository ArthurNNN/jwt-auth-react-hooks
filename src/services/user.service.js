import axios from 'axios';
import authHeader from './auth-header';

const apiTestUrl  = process.env.REACT_APP_API_URL_TEST;

export const getPublicContent = () => {
    return axios.get(apiTestUrl + 'all');
};

export const getUserBoard = () => {
    return axios.get(apiTestUrl + 'user', { headers: authHeader() });
};