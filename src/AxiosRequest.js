import axios from 'axios';

const AxiosRequest = axios.create({
    baseUrl: "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all",
});
