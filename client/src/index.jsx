import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { Link } from "react-router-dom"
// import {Link} from "react-router"
import './main.css'
import "./index.css"
import {Home} from "./Pages/index.mjs"
// import Navigation from './Feature/Navigation'
import { useState } from "react"
// import Banner from "./Feature/Banner"
import {Banner,Navigation} from "./Feature/index"
export default function Index(){
    try {
        const [nav_data,set_nav_data] = useState([])
        return(
            <>
            <Navigation data={nav_data}/>
            <Banner/>
            <Router>
                <Link to={"/"} className="no-decor hero-title">
                    <h1 className="m-a text-center basic-text-style afs-larger">Katlec Valentine's Mods</h1>
                    <div className="underline"></div>
                    <h4 className="m-a text-center basic-text-style afs-small">aka Swoggers</h4>
                </Link>
                <Routes>
                    <Route path='/' element={<Home set_nav_data={set_nav_data}/>}/>
                </Routes>
            </Router>
            <Banner/>
            </>
        )
    } catch (error) {
        console.log(error);
        return <p>Error:{error.message}</p>
    }
}