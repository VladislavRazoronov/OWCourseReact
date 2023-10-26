import style from "../Album/Album.module.css";

const Album = ({props}) => {
    let {userId,id,title} = props
    return (
        <div className={style.container}>
            <p>Title: {title}</p>
            <p>Id: {id}</p>
            <p>User Id: {userId}</p>
        </div>
    );
}

export {Album};