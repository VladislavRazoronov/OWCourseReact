import {useEffect, useState} from "react";
import style from "./AlbumPage.module.css";
import {AlbumService} from "../../services/AlbumService";
import {Album} from "../../components/Album/Album";

const AlbumPage = () => {
    let [albums,setAlbums] = useState([])
    useEffect(()=>{
        AlbumService().then(({data})=>setAlbums(data))
    },[])
    return (
        <div>
            <h1>Albums:</h1>
            <div className={style.page}>
                {albums.map((album)=><Album key={album.id} props={album}/>)}
            </div>
        </div>
    );
}

export {AlbumPage};