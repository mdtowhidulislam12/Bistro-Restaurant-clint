import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/NotFound/Error";
import Layout from "../MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Menu from "../Pages/home/Menu";
import OurMenu from "../Pages/Menu/OurMenu";
import OurShop from "../Pages/Shop/OurShop";
import AddMenuItem from "../Pages/Dashboard/AddItem/AddMenuItem";
import Dashboard from "../Pages/Dashboard/Dashboard";


const router = createBrowserRouter([
 {
    path:"/",
    element:<Layout></Layout>,
    children:[
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        
          {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/register",
            element:<Register></Register>
          },
          {
            path:"/shop",
            element:<OurShop></OurShop>
          },
          {
            path:"/menu",
            element:<OurMenu></OurMenu>
          },
    ]
 },
 {
  path:'/dashboard',
  element:<Dashboard></Dashboard>,
  children:[
    {
      path:'/dashboard/addmenuitem',
      element:<AddMenuItem></AddMenuItem>
     }
  ]
 }
 ,

 {
    path: "*", // No match route
    element: <Error />,
  },
]);

export default router;
