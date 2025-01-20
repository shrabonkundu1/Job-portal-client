import React, { useEffect, useState } from "react";
import RunningJobCard from "./RunningJobCard";

const RunningJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="bg-white py-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-[35px] font-semibold text-black text-center my-3">
          Today's Job Opportunities
        </h2>
        <p className="text-gray-500 text-xl text-center">Search and connect with the right candidates faster.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <RunningJobCard key={job._id} job={job}></RunningJobCard>
        ))}
      </div>
    </div>
  );
};

export default RunningJobs;
