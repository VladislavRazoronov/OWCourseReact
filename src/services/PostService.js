import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let PostService = (id)=>{
    return axiosService.get(urls.posts.byId(id))
}

export {PostService}