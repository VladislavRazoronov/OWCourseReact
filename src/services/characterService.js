import {axiosService} from "./axiosService";
import {url} from "../constants/urls";

const characterService = {
    getAll:axiosService.get(url.character.getAll),
    byUrl:(addr)=>axiosService.get(url.character.byId(addr.split('/')[5]))
}

export {characterService};