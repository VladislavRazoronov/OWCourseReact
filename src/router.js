import {createBrowserRouter, Navigate} from "react-router-dom";


import {MainLayout} from "./layouts/MainLayout";
import {Episodes} from "./components/episodeComponents/episodes/Episodes";
import {Characters} from "./components/characterComponents/Characters/Characters";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'/episodes'}/>},
            {path:'/episodes',element:<Episodes/>},
            {path:'/characters',element:<Characters/>}
        ]
    }
])


export {router};