import style from './User.module.css'
const User = ({data})=>{
    let {name,username,email} = data
    return(
        <div className={style.User}>
            <p>Name:{name}</p>
            <p>Username:{username}</p>
            <p>Email:{email}</p>
        </div>
    )
}

export {User}