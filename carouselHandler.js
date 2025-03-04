
const videosarray=[
    "./media/videos/DMC5 Dante as Riven showcase.mp4",
    "./media/videos/DMC5 Dante as Samira showcase.mp4",
    "./media/videos/DMC5 Deadweight as Blitzcrank showcase.mp4",
    "./media/videos/DMC5 Doppelganger as Yasuo showcase.mp4",
    "./media/videos/DMC5 Nero as Blitzcrank 2.0 showcase.mp4",
    "./media/videos/DMC5 V as Hwei.mp4",
    "./media/videos/DMC5 Vergil as Yasuo 2.0 showcase.mp4",
    "./media/videos/DMC5 Vergil as Yasuo showcase.mp4",
    "./media/videos/DMC5 Vergil as Yone showcase.mp4",
    "./media/videos/Full Build Gwen example.mp4",
    "./media/videos/DMC4 Berial as Hecarim showcase.mp4",
    "./media/videos/JJK Gojo as Mordekaiser showcase.mp4",

    "./media/videos/DMC5 Nobody as Skarner showcase.mp4",
    "./media/videos/DB Goku as Sett showcase.mp4",
    "./media/videos/Sai as Hwei showcase.mp4"
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
function changeVideo(VideoElement,SourceElement,AnchorRef,CaptionRef)
{
    console.log("Called")
    console.log(VideoElement);
    console.log(SourceElement);
    console.log(AnchorRef);
    console.log(CaptionRef);
    
    var chosenVid = Math.floor(Math.random()*videosarray.length)
    SourceElement.src =videosarray[chosenVid] 
    AnchorRef.href = videotoyoutubearr[chosenVid]
    CaptionRef.innerHTML = videonamesarr[chosenVid]
    VideoElement.load()
}
document.addEventListener("DOMContentLoaded",()=>{
    var vid1 = document.getElementById("vid1")
    var source1 = document.getElementById("vid1source")
    var caption1 = document.getElementById("caption-1")
    var avid1 = document.getElementById("a-vid1")
    var vid2 = document.getElementById("vid2")
    var source2 = document.getElementById("vid2source")
    var avid2 = document.getElementById("a-vid2")
    var caption2 = document.getElementById("caption-2")
    var vid3 = document.getElementById("vid3")
    var source3 = document.getElementById("vid3source")
    var avid3 = document.getElementById("a-vid3")
    var caption3 = document.getElementById("caption-3")
    vid1.defaultPlaybackRate=1.5
    vid2.defaultPlaybackRate=1.5
    vid3.defaultPlaybackRate=1.5
    vid1.load()
    vid2.load()
    vid3.load()
    vid1.addEventListener("ended",()=>{
        changeVideo(vid1,source1,avid1,caption1)
    })
    vid2.addEventListener("ended",()=>{
        changeVideo(vid2,source2,avid2,caption2)
    })
    vid3.addEventListener("ended",()=>{
        changeVideo(vid3,source3,avid3,caption3)
    })

    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        items[currentIndex].classList.add("next")
        items[currentIndex].classList.remove("previous","active")
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add("active")
        items[currentIndex].classList.remove("next","previous")
        items[(currentIndex+1)%items.length].classList.add("previous")
        items[(currentIndex+1)%items.length].classList.remove("active","next")
    }
    showNextItem()
    setInterval(showNextItem, 6000);
})
