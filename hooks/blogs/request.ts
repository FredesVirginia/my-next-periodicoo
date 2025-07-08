import { blogApi } from "@/api/blogApi";
import { IResBlog, IResBlogID } from "./IResBlog";


export const getBlogs = async () : Promise<IResBlog[]>=>{
    const response = await blogApi.get(`/article/` )
    return response.data

}

export const getBlog = async (id : string) : Promise<IResBlogID>=>{
    const response = await blogApi.get(`/article/${id}` )
    return response.data

}