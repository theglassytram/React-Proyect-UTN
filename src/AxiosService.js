import axios from 'axios';
import { AxiosRequest } from "./AxiosRequest";

export const getDogFacts = () => {
    return AxiosRequest.get("all");
};

export const getSpecificDogFact = id => {
    return AxiosRequest.get(`?index=${id}`);
}
