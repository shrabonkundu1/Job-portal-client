import React, { useEffect, useState } from 'react';
import RunningJobCard from '../Home/RunningJobCard';


const AllJobs = () => {
    const [allJobs,setAllJobs] = useState([]);
    console.log(allJobs)
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://job-portal-server-phi-five.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllJobs(data)
            setLoading(false)
        })
    },[])

    if(loading) {
      return(
        <div className='min-h-screen flex justify-center items-center'>
          <span className="loading loading-ring loading-lg "></span>
        </div>
      )
    }
    return (
        <div className="bg-white pb-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[35px] font-semibold text-black text-center my-3">
            All Job Opportunities
          </h2>
          <p className="text-gray-500 text-xl text-center">Search and connect with the right candidates faster.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allJobs.map((job) => (
            <RunningJobCard key={job._id} job={job}></RunningJobCard>
          ))}
        </div>
      </div>
    );
};

export default AllJobs;