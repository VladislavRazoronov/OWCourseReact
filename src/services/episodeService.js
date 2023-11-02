import {axiosService} from "./axiosService";
import {url} from '../constants/urls'

const episodeService = {
    getPage:(page)=>axiosService.get(url.episode.getPage(page)),
    getAll:axiosService.get(url.episode.getAll)
}

export {episodeService};