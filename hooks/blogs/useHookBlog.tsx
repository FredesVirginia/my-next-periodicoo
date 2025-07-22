import { useQuery } from "@tanstack/react-query"
import { getBlog, getBlogs } from "./request"
import { useEffect, useState } from "react"
import { IResBlog, IResBlogID } from "./IResBlog"


export const useBlog= ()=>{
    const [data , setData] = useState<IResBlog[]>()
    const response = useQuery({
        queryKey : ["blog"],
        queryFn : ()=> getBlogs()
    })

    useEffect(()=>{
        if(response && response.data && response.data.length > 0){
            setData(response.data)
        }else{
            setData([])
        }
    },[response.data])

    return {
        data , 
        response : response.data
    }
}

export const useBlogId= (id : string)=>{
    const [data , setData] = useState<IResBlogID>()
    const response = useQuery({
        queryKey : ["blog" , id],
        queryFn : ()=> getBlog(id)
    })

    useEffect(()=>{
        if(response && response.data){
           setData(response.data)
        }
    },[response.data])

    return {
        data , 
        response : response.data
    }
}