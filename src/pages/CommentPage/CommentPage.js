import {useEffect, useState} from "react";
import {CommentService} from "../../services/CommentService";
import {Comment} from "../../components/Comment/Comment";
import style from './CommentPage.module.css'

const CommentPage = () => {
    let [comments,setComments] = useState([])
    useEffect(()=>{
        CommentService().then(({data})=>setComments(data))
    },[])
    return (
        <div>
            <h2>Comments:</h2>
            <div className={style.page}>
                {comments.map((comment)=><Comment key={comment.id} props={comment} />)}
            </div>
        </div>
    );
}

export {CommentPage};