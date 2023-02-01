import axios from "axios";

export const GetData  = (url: string) => {
  return axios.get(url); 
};

export const LikeOrDislik = (url:string,value:any)=>{
return axios.post(url,value)
}