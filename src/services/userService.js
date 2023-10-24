import {axiosService} from "./axiosService";
import {user} from "../constants/urls";

const userService={
    getAll:()=>{
        return axiosService.get(user.all)
    },
    byId:(id)=>{
        return axiosService.get(user.byId(id))
    }
}

export {userService}