import {POSTS,SHOWCASES} from "../schemas/index.mjs"
import { Log } from "../utils/logging.mjs";
export const resolvers ={
    Query:{
        hello:()=>{
            console.log("queried!");
            
            return "world"
        },
        GetAllPosts:async()=>{
            try {
                return await POSTS.find()
            } catch (error) {
                Log(new Error(),error)
                return error
            }
        },
        GetAllShowcases:async()=>{
            try {
                return await SHOWCASES.find()
            } catch (error) {
                Log(new Error(),error)
                return error
            }
        },
        GetPostByID:async(parent,{ID})=>{
            try {
                return await POSTS.findById(ID)
            } catch (error) {
                Log(new Error(),error)
                return error
            }
        }
    }
}