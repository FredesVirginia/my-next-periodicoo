import { blogApi } from "@/api/blogApi";
import { IReqCreateBlog } from "./IReqCreateBlog";

export const postBlog = async ( data : IReqCreateBlog)=>{
    const response = await blogApi.post(`/article/` , data)
    return response.data

}