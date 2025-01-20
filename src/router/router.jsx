import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/Mainlayouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Register/SignUp";
import Login from "../pages/Register/Login";
import AllJobs from "../All-Jobs/AllJobs";
import AddJob from "../AddJob/AddJob";

  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Routes not found</h2>,
      children: [
        {
            path: "/",
            element: <Home></Home>, 
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>, 
        },
        {
            path: "/login",
            element: <Login></Login>, 
        },
        {
            path: "/allJobs",
            element: <AllJobs></AllJobs>, 
        },
        {
            path: "/addJob",
            element: <AddJob></AddJob>, 
        },

      ]
    },
  ]);

  export default router

