import style from './ToDo.module.css'
const ToDo = ({props}) => {
    let {userId,id,title,completed} = props
    return (
        <div className={style.container}>
            <p>Title: {title}</p>
            <p>Id: {id}</p>
            <p>User Id: {userId}</p>
            {completed ?<p className={style.true}>Completed</p> :<p className={style.false}>Not completed</p>}
        </div>
    );
}

export {ToDo};