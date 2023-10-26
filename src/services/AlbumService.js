import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let AlbumService = ()=>{
    return axiosService.get(urls.albums)
}

export {AlbumService}