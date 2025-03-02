export default function Post({data}){
    try {
        if(data){
            return(
                <div>Data:{data.post_title}</div>
            )
        }else{
            return(
                <div>
                    Loading...
                </div>
            )
        }
    } catch (error) {
        console.log(error);
        return error
    }
}