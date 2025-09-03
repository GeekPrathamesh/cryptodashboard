const USER_URL = "/user"

import Axios from "../axios";

export const LoginUser = async({password , email})=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/signin`,{password , email});
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}

export const RegisterUser = async({password , email , firstName , lastName})=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/signup`,{password , email , firstName , lastName});
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}

export const sendverificationmail = async({ email })=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/send-verification-mail`,{ email });
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}

export const verifyUsermailregister = async({ token })=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/verfiy-user-mail`,{ token });
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}

export const verifyForgottokennmail = async({ token , password })=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/verify-forgot-mail`,{ token , password });
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}


export const forgotpasswordEmailsent = async({ email })=>{
    try {
        const {data} = await Axios.post(`${USER_URL}/forgot-password`,{ email });
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
        
    }
}
