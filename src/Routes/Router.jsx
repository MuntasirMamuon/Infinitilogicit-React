import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"about",
            element:<About></About>
        },
        {
            path:"services",
            element:<Services></Services>
        },
        {
            path:"services/:id",
            element:<ServicesDetails></ServicesDetails>
        },
        {
            path:"blog",
            element:<Blog></Blog>
        },
        {
            path:"contact",
            element:<Contact></Contact>
        }
      ]
    },
  ]);



  export default router;