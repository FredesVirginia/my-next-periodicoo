import { blogApi } from "@/api/blogApi"
import { IReqLogin } from "./IReqLogin"


export const loginRequest = async ( data : IReqLogin)=>{
    const response = await blogApi.post(`/user/login/` , data)
    console.log("rEQUEST" , response.data)
    return response.data

}