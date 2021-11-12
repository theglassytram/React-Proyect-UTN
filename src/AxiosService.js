import axios from 'axios';
import { AxiosRequest } from "./AxiosRequest";

export const getDogFacts = () => {
    return AxiosRequest.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all");
};

export const getSpecificDogFact = id => {
    return AxiosRequest.get(`?index=${id}`);
}
