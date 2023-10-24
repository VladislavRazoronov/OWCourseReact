import style from './User.module.css'
import {UserDetails} from "./UserDetails/UserDetails";
import {UserAddress} from "./UserAddress/UserAddress";
import {Company} from "./Company/Company";
const User = ({data,click})=>{
    let {address,company} = data
    return(
        <div className={style.User}>
            <UserDetails user={data}/>
            <UserAddress address={address}/>
            <Company company={company}/>
            <button onClick={()=>click(data.id)}>showPost</button>
        </div>
    )
}

export {User}