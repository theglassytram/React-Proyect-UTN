import axios from 'axios';

const AxiosRequest = axios.create({
    baseUrl: "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs",
});

AxiosRequest.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

AxiosRequest.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export { AxiosRequest };