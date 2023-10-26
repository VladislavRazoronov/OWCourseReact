import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

let ToDoService = ()=>{
    return axiosService.get(urls.todo)
}

export {ToDoService}