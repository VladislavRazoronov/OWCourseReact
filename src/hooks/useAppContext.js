import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

let useAppContext = ()=>{
    return useContext(Context)
}

export {useAppContext}