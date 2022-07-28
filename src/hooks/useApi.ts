import { useEffect, useState } from "react";
import axios from "axios";

export function useApi<T = unknown>(url: string){
    const [data,setData] = useState<T | null>(null);
    const [isFetching, setFetching] = useState(true);
    const [isLength, setLength] = useState(0);
    
    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setData(response.data);
            setLength((response.data).length);
        })
        .finally(()=>{
            setFetching(false);
        })
    },[])

    return { data, isFetching, isLength }
}