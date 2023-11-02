import {useEffect, useState} from "react";


import {userService} from "../../services/UserService";
import {User} from "../../components/User/User";

const UsersPage = () => {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            {users.map((user)=><User shorthand={true} key={user.id} props={user}/>)}
        </div>
    );
}

export {UsersPage};