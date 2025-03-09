import Post from "./Posts.json" with {type:"json"}
import {default as CONNECTION} from "../config/connection.mjs"
import { POSTS } from "../schemas/index.mjs"
CONNECTION.then(async()=>{
    await POSTS.deleteMany();
    await POSTS.insertMany(Post)
    process.exit(0)
})