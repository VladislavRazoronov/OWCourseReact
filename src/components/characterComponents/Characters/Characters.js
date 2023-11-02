import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {useAppContext} from "../../../hooks/useAppContext";
import {Character} from "../Character/Character";
import style from './Characters.module.css'

const Characters = () => {
    let context = useAppContext()
    let navigate = useNavigate()
    let [characters,setCharacters] = useState([])
    let [name,setName] = useState([])
    useEffect(()=>{
        setCharacters(context.characters[0])
        setName(context.title[0])
        },[context]
    )
    console.log(characters)
    return (
        <div>
            <button onClick={()=>navigate('../episodes')}>Back</button>
            <h1>Episode name:{name}</h1>
            <div className={style.chars}>
                {characters.map((character)=><Character key={character.split("/")[5]} props={character}/>)}
            </div>
        </div>

    );
}

export {Characters};