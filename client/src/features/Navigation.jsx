import "./Navigation.css"

export default function Navigation({data}){
    console.log("data recieved: ",data);
    
    try {
        return (
            <nav className="navigation-box">
                <ul className="navigation-list">
                    <h3 style={{marginLeft:"10px",marginRight:"10px"}} className="fs-large navigation-title">Table of contents</h3>
                    <div className="simple-underline"></div>
                    {(data&&data.length>0)?data.map(element => {
                        return(
                            <li key={element}>
                                <a className="no-decor fs-normal" href={"#"+element.replace(/\s+/g,"-")}>{element}</a>
                            </li>
                        )
                    }):"Loading..."}
                </ul>
            </nav>
        )
    } catch (error) {
        console.log(error);
        return error
    }
}

// document.addEventListener("DOMContentLoaded",()=>{
//     const nav = document.querySelector(".navigation-box")
//     window.addEventListener('scroll',()=>{
//         nav.style.top= (window.scrollY+10)+"px"
//     })
//     const nav_list = document.querySelector(".navigation-list")
//     const Sections = Array.from(document.querySelectorAll("section"))
//     const SectionIds = Sections.map(section=>section.id)
//     const SectionTitle = Sections.map(section=>{
//         let h3 = section.querySelector("h3") 
//         if(h3) return h3.textContent.trim().replace(/\\/g,"")
//     })
//     for(let x=0;x<SectionIds.length;x++)
//     {
//         nav_list.insertAdjacentHTML("beforeend",`<li><a href="#${SectionIds[x]}">${(SectionTitle[x]!=undefined)?SectionTitle[x]:SectionIds[x]}</a></li>`)
//     }
// })

// document.addEventListener("DOMContentLoaded",()=>{
//     const Mod_List = document.querySelector(".Mod-List")
//     const nav_list = document.querySelector(".navigation-list")
//     let leftFlag=true;
//     for(let x=0;x<ModsArray.length;x++)
//     {
//         Mod_List.insertAdjacentHTML("beforeend",
//             `
//             <section class="w-100 mbt-1rem mrl-1rem"  id=${ModsArray[x]}>
//                 <iframe class="preview-nugget black-border ${(leftFlag?"float-left":"float-right")}" src=${"./iframes/"+encodeURIComponent(ModsArray[x])+".html"}></iframe>
//             </section>
//             `)
//         nav_list.insertAdjacentHTML("beforeend",`<li><a href="#${ModsArray[x]}">${ModsArrayWhitespace[x]}</a></li>`)
//         leftFlag=!leftFlag
//     }
//     const nav = document.querySelector(".navigation-box")
//     window.addEventListener('scroll',()=>{
//         nav.style.top= (window.scrollY+10)+"px"
//     })
// })