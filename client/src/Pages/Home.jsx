import { useQuery } from '@apollo/client';
import { useState,useEffect } from 'react'
import { GetAllPosts, hello } from '../utils/api/queries.mjs';
import {Preview} from "../pages/index.mjs";
import {Carousel,Announcements} from "../features/index.mjs"
import "./Home.css"
export default function Home({set_nav_data}){
    //useEffect for when component mounts
    //useState for storing fetched data
    try {
        const {loading,error,data} = useQuery(GetAllPosts)
        const [posts,setPosts] = useState([]);
        useEffect(()=>{
            if(data){
                setPosts(data.GetAllPosts)
                set_nav_data(data.GetAllPosts.filter(ele=>!ele.is_active_project).map(post=>post.post_title))
            }
        },[data])
        if(loading)return (
            <Preview data={posts}/>
        )
        if(error)throw error;
        return(
            <>
                <Carousel/>
                <Announcements data={posts.filter(ele=>ele.is_active_project)}/>
                <div>
                    <h3 className="highlight-text-style text-center fs-larger m-my">PROJECTS
                        <div className="underline"></div>
                    </h3>
                </div>
                <div className="flex w-100 flex-column ai-center">
                    {
                        posts.filter(ele=>!ele.is_active_project).map((post,index)=>{
                            return(<Preview key={post._id} data={post} index={index}/>)
                        })
                    }
                </div>
            </> 
        )
    } catch (error) {
        console.log(error);
        return error
    }
}