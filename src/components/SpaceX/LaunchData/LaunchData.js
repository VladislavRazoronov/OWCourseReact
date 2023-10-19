import style from './LaunchData.module.css'
const LaunchData = ({data})=>{
    const {mission_name,launch_year,links} = data
    return(
        <div className={style.launch}>
            <img src = {links.mission_patch_small} alt={mission_name}/>
            <h1>Name:{mission_name}</h1>
            <h2>Launch year:{launch_year}</h2>
        </div>
    )
}

export {LaunchData}