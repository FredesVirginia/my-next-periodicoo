import { useMutation } from "@tanstack/react-query";

import { postBlog } from "./request";
import { IReqCreatedBlog } from "./IReqCreateBlog";

export const useHookCreatedBlog = ()=>{

    const mutationCreateBlog = useMutation({
        mutationKey : ["create-blog"],
        mutationFn : (data : IReqCreatedBlog)=>postBlog(data)
    })

    return {
        mutationCreateBlog
    }
}