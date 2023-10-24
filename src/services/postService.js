import {axiosService} from "./axiosService";
import {post} from "../constants/urls";

const postService={
    getAll:()=>{
        return axiosService.get(post.all)
    },
    byId:(id)=>{
        return axiosService.get(post.byId(id))
    },
    byUserId:(userId)=>{
        return axiosService.get(post.byUserId(userId))
    }
}

export {postService}