import style from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../hooks/useAppContext";
const Episode = ({props}) => {
    let navigate= useNavigate()
    const context = useAppContext()
    let Click=()=>{
        context.characters[1](props.characters)
        context.title[1](props.name)
        navigate("../characters")
    }

    let {id,name,episode}=props
    return (
        <div className={style.episode} onClick={()=>Click()}>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Chapter:{episode}</p>
        </div>
    );
}

export {Episode};