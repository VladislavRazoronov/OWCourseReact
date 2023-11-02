import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {UserDetails} from "./pages/UserDetails/UserDetails";

const router = createBrowserRouter([
    {
        path:"",element:<MainLayout/>,children:[
            {
              index:true,element:<Navigate to={"users"}/>
            },
            {
                path:"users",element:<UsersPage/>
            },
            {
                path:"userDetails/:userId",element:<UserDetails/>
            }
            ]
    }

]);

export {router}