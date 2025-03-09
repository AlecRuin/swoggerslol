import { useQuery } from "@apollo/client";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom"
import { GetPostByPostName } from "../utils/api/queries.mjs";
import "./Post.css"

const ModSection = (props,refs)=>{
    const sectionRef = useRef(null)
    useEffect(()=>{
        if(!sectionRef)return;
        console.log("sectionRef.current: ",sectionRef.current);
        
        sectionRef.current.innerHTML=props.data.entry_body
    },[])
    return(
        <section className="w-100 flex" ref={sectionRef} id={props.data.entry_title.replace(/\s+/g,"-")} >

        </section>
    )
}

export default function Post({set_nav_data}){
    const {post_name} = useParams();
    const {loading,error,data} = useQuery(GetPostByPostName,{
        variables:{PostName:post_name.replace(/-/g," ")}
    })
    useEffect(()=>{
        if(!data||!data.GetPostByPostName)return;
        set_nav_data(data.GetPostByPostName.entry.map((ele)=>ele.entry_title))
    },[data])
    if(loading)return(<div>loading...</div>);
    console.log("data: ",data.GetPostByPostName.entry[0]);
    document.title = data.GetPostByPostName.post_title+" | Valentine's mods"
    return(
        <div className="mod-info flex flex-column ai-center bg-primary">
            <h2 className="highlight-text-style text-center fs-largest txt-grad-secondary shimmer" style={{marginBottom:"0px"}}>
                {data.GetPostByPostName.post_title}
            </h2>
            <div className="underline"></div>
            {
                data.GetPostByPostName.entry.map((ele,index)=>(
                    <>
                        <ModSection data={ele} key={index}/>
                        {(ele.is_underlined)?<div style={{boxShadow:"0px 0px 12px 2px rgba(108,250,208, 0.74)"}} className="quaternary-underline quaternary-glowbox"></div>:""}
                    </>
                ))
            }
        </div>
    )
}