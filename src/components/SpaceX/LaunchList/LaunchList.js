import {useEffect, useState} from "react";
import axios from "axios";
import {LaunchData} from "../LaunchData/LaunchData";
import style from './LaunchList.css'

const LaunchList = ()=>{

    const [launches,setLaunches] = useState([])

    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data})=>setLaunches(data.filter((data)=>data.launch_year !== '2020')))
    },[])

    return(
        <div className={style.list}>
            {launches.map(launch=><LaunchData key={launch.flight_number} data={launch} />)}
        </div>
    )
}

export {LaunchList}