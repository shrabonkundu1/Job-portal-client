import React, { useEffect, useState } from "react";
import RunningJobCard from "./RunningJobCard";

const RunningJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-portal-server-phi-five.vercel.app/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="bg-white pb-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="md:text-[35px] text-[32px] font-semibold flex justify-center text-black text-center my-3">
          Today's Job <span className="hidden md:grid">Opportunities</span>
        </h2>
        <p className="text-gray-500 mx-8 md:mx-0 md:text-xl text-center">Search and connect with the right candidates faster.</p>
      </div>
      <div className="grid grid-cols-1 w-[95%] mx-auto md:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <RunningJobCard key={job._id} job={job}></RunningJobCard>
        ))}
      </div>
    </div>
  );
};

export default RunningJobs;
