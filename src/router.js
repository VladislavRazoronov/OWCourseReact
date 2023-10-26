import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {TodoPage} from "./pages/TodoPage/TodoPage";
import {AlbumPage} from "./pages/AlbumPage/AlbumPage";
import {CommentPage} from "./pages/CommentPage/CommentPage";

const router = createBrowserRouter([
    {
        path:"",element:<MainLayout/>,children:[
            {
              index:true,element:<Navigate to={"todo"}/>
            },
            {
                path:"todo",element:<TodoPage/>
            },
            {
                path:"albums",element:<AlbumPage/>
            },
            {
                path:"comments",element:<CommentPage/>
            }
        ]
    }

]);

export {router}