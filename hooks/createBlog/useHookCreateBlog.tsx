import { useMutation } from "@tanstack/react-query";
import { IReqCreateBlog } from "./IReqCreateBlog";
import { postBlog } from "./request";

export const useHookCreatedBlog = ()=>{

    const mutationCreateBlog = useMutation({
        mutationKey : ["create-blog"],
        mutationFn : (data : IReqCreateBlog)=>postBlog(data)
    })

    return {
        mutationCreateBlog
    }
}