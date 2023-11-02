import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../../hooks/useAppContext";
import {Character} from "../Character/Character";
import style from './Characters.module.css'

const Characters = () => {
    let ep = useAppContext()
    let navigate = useNavigate()
    let [characters,setCharacters] = useState([])
    let [name,setName] = useState([])
    useEffect(()=>{
        setCharacters(ep[0].characters)
        setName(ep[0].name)
        },[ep]
    )
    console.log(characters)
    return (
        <div>
            <button onClick={()=>navigate('../episodes')}>Back</button>
            <h1>Episode name:{name}</h1>
            <div className={style.chars}>
                {characters.map((character)=><Character id={character.split("/")[5]} props={character}/>)}
            </div>
        </div>

    );
}

export {Characters};