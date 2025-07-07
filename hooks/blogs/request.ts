import { blogApi } from "@/api/blogApi";
import { IResBlog } from "./IResBlog";


export const getBlogs = async () : Promise<IResBlog[]>=>{
    const response = await blogApi.get(`/article/` )
    return response.data

}