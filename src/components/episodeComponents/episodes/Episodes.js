import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../../services/episodeService";
import {Episode} from "../episode/Episode";
import style from './Episodes.module.css'

const Episodes = () => {
    let [episodes,setEpisodes] = useState([])
    let [query, setQuery] = useSearchParams({page:'1'});
    let [prevNext,setPrevNext] = useState({prev:null,next:null});
    useEffect(()=>{
        episodeService.getPage(query.get('page')).then(({data})=> {
            setEpisodes(data.results);
            setPrevNext({prev:data.info.prev,next:data.info.next})
        })
    },[query])

    const prev =()=>{
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next =()=>{
        setQuery(next=>{
            next.set('page', `${+next.get('page') + 1}`)
            return next
        })
    }
    return (
        <div className={style.container}>
            <div className={style.episodes}>
                {episodes.map((episode)=><Episode key={episode.id} props={episode}/>)}
            </div>
            <div className={style.buttons}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>

    );
}

export {Episodes};