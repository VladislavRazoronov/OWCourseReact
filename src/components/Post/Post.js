import style from './Post.module.css'
const Post = ({props}) => {
    let {userId,id,title,body} = props
    return (
        <div className={style.container}>
            <h2>Title: {title}</h2>
            <p>Id: {id}</p>
            <p>User Id: {userId}</p>
            <p>Body: {body}</p>
        </div>
    );
}

export {Post};