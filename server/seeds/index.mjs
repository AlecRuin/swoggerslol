import Post from "./Posts.json" with {type:"json"}
import Showcases from "./Showcases.json" with {type:"json"}
import {default as CONNECTION} from "../config/connection.mjs"
import { POSTS, SHOWCASES } from "../schemas/index.mjs"
CONNECTION.then(async()=>{
    await POSTS.deleteMany();
    await SHOWCASES.deleteMany()
    await POSTS.insertMany(Post)
    await SHOWCASES.insertMany(Showcases)
    process.exit(0)
})