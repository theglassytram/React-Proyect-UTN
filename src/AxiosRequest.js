import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "https://cat-fact.herokuapp.com",
});

// AxiosRequest.defaults.baseURL = 'https://cat-fact.herokuapp.com';

// AxiosRequest.interceptors.request.use(
//     function (config) {
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// AxiosRequest.interceptors.response.use(
//     function (response) {
//         return response.data;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export { AxiosRequest };