import axios from "axios";
import { Address } from "../models";

const BASE_URL = "http://localhost:4200";

const loadCountries = (): Promise<any> => {
  return axios.get(`${BASE_URL}/country`).then((data) => data);
};

const createAddress = (address: Address): Promise<any> => {
  return axios.post(`${BASE_URL}/addresses`, address);
};

const updateAddress = (id: string, address: Address): Promise<any> => {
  return axios.put(`${BASE_URL}/addresses/${id}`, address);
};

const getAllAddresses = (pageNumber?: number) =>{
  return axios.get(`${BASE_URL}/addresses?limit=7&page=${pageNumber}`);
}

export default {
  loadCountries,
  createAddress,
  updateAddress,
  getAllAddresses,
};
