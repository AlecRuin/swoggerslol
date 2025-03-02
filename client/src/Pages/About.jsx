import { gql, useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
const hello = gql`
    query hello{
        hello
    }
`
export default function About(){
    try {
        const {loading, error, data} = useQuery(hello)
        const [thing,setThing] = useState([])
        useEffect(()=>{
            if(data&&data.hello) setThing(data.hello);
        },[data])
        if(loading) return <p>Loading...</p>;
        if(error)throw error;
        return(
            <>
                <div>Henlo {thing}</div>
            </>
        )
    } catch (error) {
        console.log(error);
        return <p>Error:{error.message}</p>
    }
}