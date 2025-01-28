import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/UseAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  console.log(jobs);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2 className="text-5xl text-center font-bold my-16">
        My Posted Jobs : {jobs.length}
      </h2>

      {/* show table formate  */}
      <div className="overflow-x-auto">
        <table className="table my-16 w-[90%] mx-auto">
          <thead className="">
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Action</th>
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
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <th>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
