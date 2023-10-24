import {Post} from "../Post/Post";
import style from "./Posts.module.css"
import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";

const Posts = ({userId}) => {
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        postService.byUserId(userId).then(({data})=>setPosts(data))
    })
    return (
        <div className={style.Posts}>
            <h1>User:{userId}</h1>
            {posts.map((post)=><Post key={post.id} data={post}/>)}
        </div>
    );
}

export {Posts};