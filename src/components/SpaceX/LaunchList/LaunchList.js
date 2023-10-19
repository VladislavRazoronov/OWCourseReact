import {useEffect, useState} from "react";
import axios from "axios";
import {LaunchData} from "../LaunchData/LaunchData";
import style from './LaunchList.css'

const LaunchList = ()=>{

    const [launches,setLaunches] = useState([])

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data})=>setLaunches(data))
    },[])

    return(
        <div className={style.list}>
            {launches.map(launch=><LaunchData key={launch.id} data={launch} />)}
        </div>
    )
}

export {LaunchList}