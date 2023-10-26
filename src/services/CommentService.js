import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let CommentService = ()=>{
    return axiosService.get(urls.comments)
}

export {CommentService}