import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "./request"
import { useEffect, useState } from "react"
import { IResBlog } from "./IResBlog"


export const useBlog= ()=>{
    const [data , setData] = useState<IResBlog[]>()
    const response = useQuery({
        queryKey : ["blog"],
        queryFn : ()=> getBlogs()
    })

    useEffect(()=>{
        if(response && response.data && response.data.length > 0){
            setData(response.data)
        }
    },[response.data])

    return {
        data , 
        response : response.data
    }
}