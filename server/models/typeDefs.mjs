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
    is_active_project:Boolean
    entry:[entries]
    version_history:[version_histories]
}
type Showcase{
    video_title:String
    youtube_link:String
}
type Query{
    hello: String
    GetAllPosts:[Post]
    GetAllShowcases:[Showcase]
    GetPostByID(ID:ID!):Post
}
`