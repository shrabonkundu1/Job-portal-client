import { q } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const [application, setApplication] = useState([]);
  const { job_id } = useParams();
  console.log(job_id);
  console.log(application);
  useEffect(() => {
    fetch(`https://job-portal-server-phi-five.vercel.app/job_application/jobs/${job_id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplication(data);
      });
  }, [job_id]);

  const handleStatusUpdate = (e,id) => {
    console.log(e.target.value,id)

    const data = {
        status : e.target.value
    }

    fetch(`https://job-portal-server-phi-five.vercel.app/job_application/${id}`,{
        method: "PATCH",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
         if (data.modifiedCount) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Status Update Successfully",
                    showConfirmButton: false,
                    timer: 1200,
                  });}
    })
  }
  return (
    <div>
      <h2 className="my-16 mx-28 text-4xl font-semibold ">
        Total Application : {application.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table my-16 w-[90%] mx-auto">
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {application.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{app.applicant_email}</td>
                <td>{app.status}</td>
                <td>
                  <select
                  onChange={(e) => handleStatusUpdate(e,app._id)} defaultValue={app.status || ' Change Status'} className="select select-bordered select-md w-full max-w-xs">
                    <option disabled >
                      Change Status
                    </option>
                    <option>Rejected</option>
                    <option>Hired</option>
                    <option>To Interview</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
