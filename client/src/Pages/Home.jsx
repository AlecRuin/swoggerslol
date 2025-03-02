// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { useQuery } from '@apollo/client';
import { useState,useEffect } from 'react'
import { GetAllPosts, hello } from '../utils/api/queries.mjs';
import Post from './Post';
export default function Home({set_nav_data}){
    //useEffect for when component mounts
    //useState for storing fetched data
    try {
        const {loading,error,data} = useQuery(GetAllPosts)
        const [posts,setPosts] = useState([]);
        useEffect(()=>{
            if(data){
                setPosts(data.GetAllPosts)
                set_nav_data(data.GetAllPosts.map(post=>post.post_title))
            }
        },[data])
        if(loading)return (
            <>
                <Post data={posts}></Post>
            </>
        )
        if(error)throw error;
        console.log("data: ",data);
        return(
            <>
                post title {
                    posts.map(post=>{
                        return(<Post key={post._id} data={post}/>)
                    })
                }
            </> 
        )
    } catch (error) {
        console.log(error);
        return error
    }
}