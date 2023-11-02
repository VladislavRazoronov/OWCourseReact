import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";


let userService = {
    getAll:()=>axiosService.get(urls.users.getAll),
    byId:(id)=>axiosService.get(urls.users.byId(id))
}

export {userService}