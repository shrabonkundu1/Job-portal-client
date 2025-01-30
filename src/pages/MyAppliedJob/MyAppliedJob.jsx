import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import axios from "axios";
import { tr } from "motion/react-client";
import UseAxiosInstance from "../../Hooks/UseAxiosInstance";

const MyAppliedJob = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosInstance();
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    // fetch(`https://job-portal-server-phi-five.vercel.app/job_applications/?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    // axios.get(`https://job-portal-server-phi-five.vercel.app/job_applications/?email=${user.email}`,{withCredentials:true})
    // .then(res => {
    //   console.log(setJobs(res.data))
    // })

  axiosSecure.get(`/job_applications/?email=${user.email}`)
  .then(res => {
    setJobs(res.data);
  })

  }, [user.email]);

  
  // calling delete function
  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.user)
      if (result.isConfirmed) { 
        fetch(`https://job-portal-server-phi-five.vercel.app/job_applications/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = jobs.filter((data) => data._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table my-16 w-[90%] mx-auto">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={job.company_logo} alt={job.title} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{job.company}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                  </div>
                </div>
              </td>
              <td>{job.title}</td>
              <td>Purple</td>
              <th>
                <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs">X</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppliedJob;
