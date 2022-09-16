import { createBrowserRouter } from "react-router-dom";
import Feed from "../pages/feed";
import Login from "../pages/login";
import Author from "../pages/author";
import Category from "../pages/category";
import DescriptionPages from "../pages/descriptionpages";
import NotFound from "../pages/notfound";
import Post from "../pages/post";
import Register from "../pages/register";
import Tag from "../pages/tag";


export const Router = createBrowserRouter([
    {
        path:"/",
        element: <Feed />,
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/author/:id" ,
        element :<Author />
    },
    {
        path:"/category/:id",
        element: <Category/>
    },
    {
        path:"/descriptionpages",
        element:<DescriptionPages/>
    },
    {
        path:"/notfound",
        element:<NotFound />
    },
    {
        path:"/post/:id",
        element:<Post />
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/tag/:tagname",
        element:<Tag />
    }
])