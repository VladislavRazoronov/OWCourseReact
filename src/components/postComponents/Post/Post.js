import style from './Post.module.css'
const Post = ({post, click})=>{
    const {id,title} = post;

    return(
        <div className={style.Post}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <button onClick={()=>{click(id)}}> View details</button>
        </div>
    )
}

export {Post}