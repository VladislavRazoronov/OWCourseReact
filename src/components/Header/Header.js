import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
}

export {Header};