import axios from "axios";


const BASE_URL = "http://localhost:4200";

const loadCountries = (): Promise<any>=> {
  return  axios.get(`${BASE_URL}/country`).then(data => data);
};

export default {
  loadCountries,
};
