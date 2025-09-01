const USER_URL = "/user"

import Axios from "../axios";

export const signInUser = async({password , email})=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/signin`,{password , email});
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}