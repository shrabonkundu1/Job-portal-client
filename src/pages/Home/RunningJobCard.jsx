import { p } from "motion/react-client";
import React from "react";
import { FiMapPin } from "react-icons/fi";

const RunningJobCard = ({ job }) => {
  console.log(job);
  const {
    company_logo,
    company,
    description,
    salaryRange,
    category,
    jobType,
    location,
    title,
    requirements,
  } = job;
  return (
    <div className="card card-compact  group  px-1 py-2 border border-[#a0d6f3] bg-[#f3f7fd] hover:bg-white duration-1800 transition  hover:translate-y-[-4px]">
      <div className="flex items-center p-2 gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h2 className="text-[22px] font-bold">{company}</h2>
          <p className="flex items-center gap-1 text-gray-400 font-medium text-[16px]">
            <FiMapPin />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="text-[18px] font-bold ">{title}</h2>
        <p className="text-gray-500 font-medium my-2">{description}</p>
        <div className="flex items-center gap-2 flex-wrap text-gray-500">
          {requirements.map((skill) => (
            <p className="border bg-slate-100  rounded-md p-2 text-center">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center ">
          <p className="border rounded-md bg-slate-100 py-3 p-1 text-[#0077b6] font-semibold text-[16px]">
            Salary:  {salaryRange.min} - {salaryRange.max} 
          </p>
          <button className="btn btn-outline border-[#0077b6] group-hover:bg-[#0077b6] group-hover:text-white ">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default RunningJobCard;
