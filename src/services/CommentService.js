import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let commentService = {
    byPostId:(postId)=>axiosService.get(urls.comments.byPostId(postId))
}

export {commentService}