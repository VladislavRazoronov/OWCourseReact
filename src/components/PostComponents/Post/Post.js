const Post = ({data}) => {
    let {id,title,body}=data
    return (
        <div>
            <h1>Title:{title}</h1>
            <p>Id:{id}</p>
            <p>Body:{body}</p>
        </div>
    );
}

export {Post};