import axios from "axios";
import { Address } from "../models";


const BASE_URL = "http://localhost:4200";

const loadCountries = (): Promise<any>=> {
  return  axios.get(`${BASE_URL}/country`).then(data => data);
};

const createAddress = (address: Address): Promise<any> =>{
    return axios.post(`${BASE_URL}/addresses`,address)
}

export default {
  loadCountries,
  createAddress,
};
