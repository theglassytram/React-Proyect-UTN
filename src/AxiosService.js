import { AxiosRequest } from "./AxiosRequest";

export const getCatFacts = () => {
  return AxiosRequest.get(
    '/facts'
  );
};

export const getSpecificCatFact = (id) => {
  return AxiosRequest.get(`https://cat-fact.herokuapp.com/facts/${id}`);
};
