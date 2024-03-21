import axios from "axios";
const baseUrl = "https://kleacses-api.onrender.com";

export const getDomains = async() => {
    let results = await axios.get(`${baseUrl}/domainsclubs/`);
    return results?.data;
}

export const addClub = async(body) =>{
    let results = await axios.post(`${baseUrl}/domainsclubs/add`,body)
    console.log(results?.data,"ress");
    return results?.data
 }