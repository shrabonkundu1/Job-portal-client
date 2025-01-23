import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/Mainlayouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Register/SignUp";
import Login from "../pages/Register/Login";
import AllJobs from "../All-Jobs/AllJobs";
import AddJob from "../AddJob/AddJob";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/Home/ApplyJob";

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
            path: "/jobs/:id",
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>, 
            loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
            path: "/applyJob",
            element: <ApplyJob></ApplyJob>, 
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

