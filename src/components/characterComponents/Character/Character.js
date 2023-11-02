import {useEffect, useState} from "react";

import {characterService} from "../../../services/characterService";
import style from './Character.module.css'

const Character = ({props}) => {
    let [character,setCharacter] = useState([])
    useEffect(()=>{
        characterService.byUrl(props).then(({data})=>setCharacter(data))
    },[props])
    let {id,name,image} = character
    return (
        <div className={style.character}>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <img src={image} alt={name}/>
        </div>
    );
}

export {Character};