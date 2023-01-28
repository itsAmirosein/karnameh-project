import axios from "axios";

export const GetData  = (url: string) => {
  return axios.get(url); 
};
