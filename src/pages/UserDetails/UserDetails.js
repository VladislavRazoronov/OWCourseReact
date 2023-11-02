import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


import {postService} from "../../services/PostService";
import {userService} from "../../services/UserService";
import {User} from "../../components/User/User";

const UserDetails = () => {
    const {userId} = useParams()
    let [visible,setVisible] = useState(false)
    let [posts,setPosts] = useState([])
    let [user,setUser] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
            postService.byUserId(userId).then(({data})=>setPosts(data))
    },[userId]
    )
    useEffect(()=> {
        userService.byId(userId).then(({data}) => setUser(data))
    },[userId])
    console.log()
    return (
        <div>
            {user.length !== 0 ? <User props={user} shorthand={false}/>:<p></p>}
            <button onClick={()=>setVisible(!visible)}>ShowPosts</button>
            {visible ? posts.map((post)=><div>
                <h1>Title:{post.title}</h1>
                <button onClick={()=>navigate(``)}>View post</button>
            </div>):<p></p>}
        </div>
    );
}

export {UserDetails};