import styles from './Posts.module.css'
import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from '../PostDetails/PostDetails'
function Posts(){
    const [posts,setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    const click= async (postId)=>{
        const data = await postService.getById(postId)
        setPostDetails(data.data)
    }

    useEffect( () => {
            postService.getAll().then(({data}) => setPosts(data))
        }
    ,[])

    return(
        <div className={styles.Posts}>
            <div className={styles.PostList}>
            {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
            </div>
            <div className={styles.PostDetails}>
                {
                    postDetails ? <PostDetails details={postDetails} /> :<h1>Not selected</h1>
                }
            </div>
        </div>
    )
}

export {Posts};