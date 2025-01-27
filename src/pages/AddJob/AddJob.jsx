import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";

const AddJob = () => {

  const navigate = useNavigate()
  const {user} = useAuth()
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData  = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries());

    // rest use kore distructure
    const {min, max, currency , ...newJobs} = initialData;

    // to set key and value such as{min:"15000",max: "25000", currency: "BDT"}
    newJobs.salaryRange = {min, max, currency};

    // create js array  in spilt('\n') method 
    newJobs.requirements = newJobs.requirements.split('\n');

    newJobs.responsiblities = newJobs.responsiblities.split('\n');
    console.log(newJobs)

    // new job post req server side  
    fetch('http://localhost:5000/jobs', {
      method:"POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newJobs)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
                  Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Your work has been saved",
                      showConfirmButton: false,
                      timer: 1200
                    });
                    navigate('/job_applications')
                 }
    })
  }
  return (
    <div className="card bg-base-100 w-3/4 mx-auto my-16  shadow-2xl">
      <h2 className="text-5xl text-center font-bold py-16">Add Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company name   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Company logo   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Logo Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* job title  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job title"
              className="input input-bordered"
              required
            />
          </div>
          {/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select defaultValue='Select job category' className="select  select-bordered select-ghost w-full ">
              <option disabled >
                Select job category
              </option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Feild</span>
            </label>
            <select defaultValue='Select job Feild' className="select  select-bordered select-ghost w-full ">
              <option disabled >
                Select job Feild
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>

        {/* salary range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* min */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary-range</span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          {/* max */}
          <div className="form-control">
            <input
              type="number"
              name="max"
              placeholder="Max"
              className="input input-bordered"
              required
            />
          </div>
          {/* currency */}
          <div className="form-control">
            <select defaultValue='Select Currency' name="currency" className="select  select-bordered select-ghost w-full ">
              <option disabled >
                Select Currency
              </option>
              <option>BDT</option>
              <option>USDT</option>
              <option>INR</option>
              <option>DINHAM</option>
            </select>
          </div>
        </div>

        {/* description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="descrioption"
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>

        {/*  requirements , respoonsiblities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company reqiremeents   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Requirements</span>
            </label>
            <textarea
              name="requirements"
              placeholder="Put each requirements in a new line"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          {/* Responsiblities   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Responsiblities</span>
            </label>
            <textarea
              name="responsiblities"
              placeholder="Put each responsiblities in a new line"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
        </div>

      {/* hr section  */}
        <div className="grid items-end grid-cols-1 md:grid-cols-2 gap-8">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Input Hr name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr email</span>
          </label>
          <input
          defaultValue={user?.email}
            type="email"
            name="hr_email"
            placeholder="Input Hr email"
            className="input input-bordered"
            required
          />
        </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
