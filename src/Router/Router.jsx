import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/NotFound/Error";
import Layout from "../MainLayout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
    ]
 },
 {
    path: "*", // No match route
    element: <Error />,
  },
]);

export default router;
