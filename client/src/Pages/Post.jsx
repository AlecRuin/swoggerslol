import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Post({set_nav_data}){
    const {post_name} = useParams();
    if(post_name){
        console.log("post_name: ",post_name);
    }
    useEffect(()=>{
        set_nav_data(["I HATE N"])
    },[])
    return(
        <div>
            Post sicko mode
        </div>
    )
}