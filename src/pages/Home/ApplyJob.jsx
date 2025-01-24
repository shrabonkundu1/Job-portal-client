import React from "react";
import { GiTuba } from "react-icons/gi";
import { useParams } from "react-router-dom";

const ApplyJob = () => {

    const {id} = useParams()
    console.log(id)

    const submitJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const Linkedin = form.linkedin.value;
        const Github = form.github.value;
        const Resume = form.resume.value;


        console.log(Linkedin,Github,Resume)
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-24 shadow-2xl">
      <form className="card-body" onSubmit={submitJobApply}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkedin Url</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="Linkedin Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github Url</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github Url"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume Url</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume Url"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
