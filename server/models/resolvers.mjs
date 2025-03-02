export const resolvers ={
    Query:{
        hello:()=>{
            console.log("Query executed");
            return "world"
        }
    }
}