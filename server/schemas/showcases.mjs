import {default as mongoose} from "mongoose"

const SHOWCASE_SCHEMA = new mongoose.Schema({
    video_title:{type:String,required:true},
    youtube_link:{type:String,required:true},

},{versionKey:false})
export const SHOWCASES = mongoose.model("showcases",SHOWCASE_SCHEMA)