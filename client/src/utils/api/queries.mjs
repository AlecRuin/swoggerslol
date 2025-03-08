import { gql, useQuery } from "@apollo/client"
export const hello = gql`
    query hello{
        hello
    }
`
export const GetAllPosts = gql`
query GetAllPosts {
    GetAllPosts{
        _id
        post_title
        preview_text
        is_active_project
    }
  } 
`