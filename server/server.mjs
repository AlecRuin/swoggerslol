import "dotenv/config"
import express from "express"
import { default as rateLimit } from "express-rate-limit"
// const  {default:ApolloServer} =require("@apollo/server")
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
const app = express()
import { join,dirname } from "path"
import { fileURLToPath } from "url"
import {resolvers,typeDefs} from "./models/index.mjs"
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl"
import {default as cors} from "cors"
import {connection} from "./config/connection.mjs"
const port = process.env.PORT||3000;
const limiter = rateLimit({
    windowMs:15*60*1000, //15 mins
    max: 100, //Limit each IP to 100 requests per windowMs
    message:"Too many requests, please try again later."
})
const __dirname = dirname(fileURLToPath(import.meta.url))
const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention:true,
    cache:"bounded",
    plugins:[ApolloServerPluginCacheControl({defaultMaxAge:3600})]//Default cache is 1hr long
})


app.use(cors({origin:process.env.BASE_URL+":5173"}))
app.use(limiter)
app.use(express.json())
app.use(express.static(join(__dirname,"../client/dist")))
app.set("view engine","ejs")
app.set("views","./views/html")
app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "../client/dist", "index.html"));
  });
apollo.start().then(()=>{
    app.use("/graphql",expressMiddleware(apollo))
    console.log(`Graphql served at http://localhost:${port}/graphql`);
    app.listen(port,()=>console.log(`Server is up on http://localhost:${port}`))
    console.log("React is up on http://localhost:5173");
})