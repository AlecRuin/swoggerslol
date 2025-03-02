export const typeDefs=`#graphql
type entries{
    entry_title:String
    entry_body:String
}
type version_histories{
    version_number:String
    patch_note:String
}
type Post{
    _id:ID
    post_title:String
    preview_text:String
    entry:[entries]
    version_history:[version_histories]
}
type Query{
    hello: String
    GetAllPosts:[Post]
    GetPostByID(ID:ID!):Post
}
`