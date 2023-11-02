import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let postService = {
    byId:(id)=> axiosService.get(urls.posts.byId(id)),
    byUserId:(userId)=> axiosService.get(urls.posts.byUserId(userId))
}

export {postService}