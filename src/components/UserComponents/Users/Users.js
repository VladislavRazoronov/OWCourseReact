import {useEffect, useState} from "react";


import {userService} from "../../../services";
import {User} from "../User/User";
import style from "./Users.module.css"

const Users = ({click}) => {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div className={style.Users}>
            {users.map(user=><User key={user.id} data={user} click={click}/>)}
        </div>
    );
}

export {Users};