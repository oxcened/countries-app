import axios from 'axios';
import { environment } from '../environment';
import LoaderController from './LoaderController';

const myAxios = axios.create({
    baseURL: environment.countryApiBaseUrl
});

let requests = 0;

const handleCallEnd = () => {
    requests--;
    if (requests <= 0) {
        requests = 0;
        LoaderController.getInstance().postMessage(false);
    }
};

myAxios.interceptors.request.use(config => {
    requests++;
    LoaderController.getInstance().postMessage(true);
    return config;
}, error => {
    handleCallEnd();
    return Promise.reject(error);
});

myAxios.interceptors.response.use(response => {
    handleCallEnd();
    return response;
}, error => {
    handleCallEnd();
    return Promise.reject(error);
});

export default myAxios;
