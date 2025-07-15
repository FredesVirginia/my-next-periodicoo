import { blogApi } from "@/api/blogApi";
import { IReqCreatedBlog } from "./IReqCreateBlog";


export const postBlog = async ( data : IReqCreatedBlog)=>{
    const response = await blogApi.post(`/article/` , data)
    return response.data

}