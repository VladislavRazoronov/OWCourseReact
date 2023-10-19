const PostDetails = ({details})=>{
    const {userId,id,title,body} = details
    return(
        <div>
            <h1>Title:{title}</h1>
            <h2>Id:{id}</h2>
            <h2>UserId:{userId}</h2>
            <p>Body:{body}</p>
        </div>
    )
}

export {PostDetails}