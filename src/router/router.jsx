import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/Mainlayouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Register/SignUp";
import Login from "../pages/Register/Login";
import AllJobs from "../pages/All-Jobs/AllJobs";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/Home/ApplyJob";
import MyAppliedJob from "../pages/MyAppliedJob/MyAppliedJob";
import MyPostedJobs from "../pages/MyAppliedJob/MyPostedJobs";
import ViewApplication from "../pages/MyAppliedJob/ViewApplication";

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
            path: "/applyJob/:id",
            element:<PrivateRoute> <ApplyJob></ApplyJob></PrivateRoute>, 
        },
        {
            path: "/job_applications",
            element:<PrivateRoute> <MyAppliedJob></MyAppliedJob></PrivateRoute>, 
        },
        {
            path: "/viewApplication/:job_id",
            element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>, 
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
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>, 
        },
        {
            path: "/myPostedJobs",
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>, 
        },

      ]
    },
  ]);

  export default router

