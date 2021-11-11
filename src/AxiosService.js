import axios from 'axios';
import { AxiosRequest } from "./AxiosRequest";

export const getDogFacts = () => {
    return AxiosRequest.get("dogFacts/");
};

export const getSpecificDogFact = id => {
    return AxiosRequest.get(`dogFacts/?id=${id}`);
}
