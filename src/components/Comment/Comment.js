import {useEffect, useState} from "react";
import {PostService} from "../../services/PostService";
import {Post} from "../Post/Post";
import style from './Comment.module.css'

const Comment = ({props}) => {
    let {postId,id,name,email,body} = props
    let [post,setPost] = useState(null)
    useEffect(()=>{
        PostService(postId).then(({data})=>setPost(data))
    },[postId])
    let [show,setShow] = useState(false)
    let click=()=>{
        setShow(!show)
    }
    return (
        <div className={style.container}>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
            <button onClick={()=>click()}>Show Post</button>
            {show ?
                <div>
                    <p>Post:</p>
                    <Post props={post}/>
                </div>
                :
                <p></p>}
        </div>
    );
}

export {Comment};