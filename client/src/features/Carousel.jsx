import { useQuery } from "@apollo/client"
import useInterval from "../utils/useInterval"
import React,{ useEffect, useState, useRef, forwardRef } from "react"
import { GetAllShowcases } from "../utils/api/queries.mjs"

const videosarray=[
    "./videos/DMC5 Dante as Riven showcase.mp4",
    "./videos/DMC5 Dante as Samira showcase.mp4",
    "./videos/DMC5 Deadweight as Blitzcrank showcase.mp4",
    "./videos/DMC5 Doppelganger as Yasuo showcase.mp4",
    "./videos/DMC5 Nero as Blitzcrank 2.0 showcase.mp4",
    "./videos/DMC5 V as Hwei.mp4",
    "./videos/DMC5 Vergil as Yasuo 2.0 showcase.mp4",
    "./videos/DMC5 Vergil as Yasuo showcase.mp4",
    "./videos/DMC5 Vergil as Yone showcase.mp4",
    "./videos/Full Build Gwen example.mp4",
    "./videos/DMC4 Berial as Hecarim showcase.mp4",
    "./videos/JJK Gojo as Mordekaiser showcase.mp4",
    "./videos/DMC5 Nobody as Skarner showcase.mp4",
    "./videos/DB Goku as Sett showcase.mp4",
    "./videos/Sai as Hwei showcase.mp4"
]
const videotoyoutubearr=[
    "https://youtu.be/KnL0gqAhf0o",
    "https://youtu.be/L9qKCqhvbh4",
    "https://youtu.be/A1rKTREJ7Hg",
    "https://youtu.be/S0B3VXAJrMk",
    "https://youtu.be/4W08f070lq8",
    "https://youtu.be/jXWsVqwtmCQ",
    "https://youtu.be/_CgFHGa8T4E",
    "https://youtu.be/MFFxL8wdtJE",
    "https://youtu.be/cFuuaYxSnwA",
    "https://youtu.be/Kf28sD9UbW0",
    "https://youtu.be/Kec96RyRyxo",
    "https://youtu.be/-Mg4DpYsdo0",
    "https://youtu.be/G0Nn1f_5ZEk",
    "https://youtu.be/3eTIwl0HnFk",
    "https://youtu.be/FbFqk3hAWqg"
]
const videonamesarr=[
    "DMC5 Dante as Riven showcase",
    "DMC5 Dante as Samira showcase",
    "DMC5 Deadweight as Blitzcrank showcase",
    "DMC5 Doppelganger as Yasuo showcase",
    "DMC5 Nero as Blitzcranks 2.0 showcase",
    "DMC5 V as Hwei",
    "DMC5 Vergil as Yasuo 2.0 showcase",
    "DMC5 Vergil as Yasuo showcase",
    "DMC5 Vergil as Yone showcase",
    "Full Build Gwen showcase",
    "DMC4 Berial as Hecarim showcase",
    "JJK's Gojo as Mordekaiser showcase",
    "DMC5 Nobody as Skarner showcase",
    "DB Goku as Sett showcase",
    "Sai as Hwei showcase"
]

const CarouselItem = forwardRef((props,ref)=>{
    if(!props.videos)return(<div>Loading...</div>)
    const [selectedVid,setSelectedVid] = useState(Math.floor(Math.random()*props.videos.length))
    console.log("Props: ",props.videos);
    
    return(
        <a ref={ref} className="carousel-item w-25 h-a no-decor" target="_blank" href={props.videos[selectedVid].youtube_link}>
            <video className="image-stretch w-100 carousel-video" autoPlay muted>
                <source src={"/videos/"+props.videos[selectedVid].video_title.replace(/\s+/g,"-")+".webm"} className="source" type="video/mp4"/>
            </video>
            <p className="afs-smallest z-1 basic-text-style video-caption text-center m-a">
                {props.videos[selectedVid].video_title}
            </p>
        </a>
    )
})


export default function Carousel(){
    const itemsRef = useRef([]);
    const [isPlaying,setPlaying] = useState(false)
    const {loading,errror,data} = useQuery(GetAllShowcases)
    const [videos,setVideos] = useState(null)
    let currentIndex=0;
    function showNextItem(){
        if(itemsRef.current.length<1||itemsRef.current[0]==null)return;
        const items = itemsRef.current
        items[currentIndex].classList.add("next")
        items[currentIndex].classList.remove("previous","active")
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("active")
        items[currentIndex].classList.remove("next","previous")
        items[(currentIndex+1)%items.length].classList.add("previous")
        items[(currentIndex+1)%items.length].classList.remove("active","next")
    }
    useEffect(() => {
        const items=itemsRef.current
        if(items.length<1)return;
        const changeVideo=(ele)=>{
            var chosenVid = Math.floor(Math.random()*videosarray.length)
            ele.href = videotoyoutubearr[chosenVid]
            ele.querySelector(".source").src =videosarray[chosenVid]
            ele.querySelector(".video-caption").innerText = videonamesarr[chosenVid]
            ele.querySelector(".carousel-video").load()
        }
        const addEventListeners = () => {
            // Adding event listeners      
            items.forEach((ele) => {
              const handleEnded = () => changeVideo(ele);
              ele.querySelector(".carousel-video").addEventListener("ended", handleEnded);
              ele.querySelector(".carousel-video").defaultPlaybackRate=1.5
              ele.querySelector(".carousel-video").playbackRate=1.5
            });
        };
        const removeEventListeners = () => {
            // Removing event listeners
            if(!items[0])return;
            items.forEach((ele) => {
                const handleEnded = () => changeVideo(ele); // Same function to remove
                ele.removeEventListener("ended", handleEnded);
            });
        };
        showNextItem()
        setPlaying(true)
        addEventListeners()
        return removeEventListeners;
    }, [itemsRef]); 
    useInterval(()=>{
        showNextItem()
    },isPlaying?6000:null)
    useEffect(()=>{
        if(data&&data.GetAllShowcases.length>0)setVideos(data.GetAllShowcases);
    },[data])

    if(loading) return(<div>Loading...</div>);
    if(data&&data.GetAllShowcases)console.log("data: ",data.GetAllShowcases);
    return (
        <div className="basic-text-style w-100 carousel">
        {
            [...Array(3)].map((_, index) => (
            <CarouselItem
                key={index}
                videos={videos}
                ref={(el)=>itemsRef.current[index]=el}
            />)
            )
        }
        </div>
    );
}
// export default React.forwardRef(Carousel)