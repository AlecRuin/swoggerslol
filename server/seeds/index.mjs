import Post from "./Posts.json" with {type:"json"}
import {default as CONNECTION} from "../config/connection.mjs"
import { POSTS } from "../schemas/posts.mjs"
CONNECTION.then(async()=>{
    await POSTS.deleteMany();
    await POSTS.insertMany(Post)
    process.exit(0)
})