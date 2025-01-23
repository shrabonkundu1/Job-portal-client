import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const [loading, setLoading] = useState(false);
  // const [data,setData] = useState([]);
  const data = useLoaderData();
  console.log(data);
  // const params = useParams();
  // const id = params.id;

  // useEffect(() => {
  //     setLoading(true)
  //     fetch(`http://localhost:5000/jobs/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         // console.log(data)
  //         setData(data)
  //     })
  // },[])

  const {
    company_logo,
    company_banner,
    company,
    description,
    salaryRange,
    category,
    jobType,
    location,
    title,
    requirements,
    _id,
    applicationDeadline,
    status,
  } = data;

  return (
    <div>
      <div>
        <img
          className="w-[90%] mx-auto rounded-lg max-h-[500px] my-10"
          src={company_banner}
          alt=""
        />
        <div className="flex items-center justify-between mx-auto w-[88%]">
          <p className="text-4xl font-bold ">{title}</p>
          <Link to={"/applyJob"}>
            <button className="bg-blue-600 p-4 rounded-md hover:bg-black text-white font-bold">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl my-16 font-medium  mx-auto border">
        <h2 className="text-4xl text-center  font-semibold mb-10">
          Employment Information
        </h2>
        <div className="grid grid-cols-2 w-10/12 mx-auto gap-5 gap-y-4 text-sm">
          <div className="flex items-center gap-2 ">
            <p className="font-medium text-gray-600 text-2xl">Industry:</p>
            <p className="text-gray-800 text-xl">
              {requirements.map((req, index) => (
                <span key={index}>{req}, </span>
              ))}
            </p>
          </div>
          <div className="flex items-center gap-2 ml-16">
            <p className="font-medium text-gray-600 text-2xl">Job title:</p>
            <p className="text-gray-800 text-xl">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-600 text-2xl">Salary:</p>
            <p className="text-gray-800 text-xl">
              {salaryRange.min} - {salaryRange.max}
            </p>
          </div>
          <div className="flex  items-center gap-2 ml-16">
            <p className="font-medium text-gray-600 text-2xl">Experience:</p>
            <p className="text-gray-800 text-xl">1 - 2 years</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-600 text-2xl">Job Type:</p>
            <p className="text-gray-800 text-xl">{jobType}</p>
          </div>
          <div className="flex gap-2 items-center ml-16">
            <p className="font-medium text-gray-600 text-2xl">Deadline:</p>
            <p className="text-gray-800 text-xl">{applicationDeadline}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-gray-600 text-2xl">Status:</p>
            <p className="text-gray-800 text-xl">{status}</p>
          </div>
          <div className="flex items-center gap-2 ml-16">
            <p className="font-medium text-gray-600 text-2xl">Location:</p>
            <p className="text-gray-800 text-xl">{location}</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] my-24 mx-auto">
        <h2 className="text-3xl font-bold text-gray-600 ">
          Welcome to AliStudio Team
        </h2>
        <p className="mr-48 leading-[30px] mt-10">
          The AliStudio Design team has a vision to establish a trusted platform
          that enables productive and healthy enterprises in a world of digital
          and remote everything, constantly changing work patterns and norms,
          and the need for organizational resiliency. The ideal candidate will
          have strong creative skills and a portfolio of work which demonstrates
          their passion for illustrative design and typography. This candidate
          will have experiences in working with numerous different design
          platforms such as digital and print forms.
        </p>
        <h2 className="text-3xl font-bold text-gray-600 mt-10">
          Essential Knowledge, Skills, and Experience
        </h2>
        <ul className="leading-[30px] mt-6">
          <li className="">
            1. A portfolio demonstrating well thought through and polished end
            to end customer journeys
          </li>
          <li>
            2. 5+ years of industry experience in interactive design and / or
            visual design
          </li>
          <li>3. Excellent interpersonal skills</li>
          <li>
            4. Aware of trends inmobile, communications, and collaboration
          </li>
          <li>
            5. Ability to create highly polished design prototypes, mockups, and
            other communication artifacts
          </li>
          <li>6. History of impacting shipping products with your work</li>
          <li>
            7. A Bachelor's Degree in Design (or related field) or equivalent
            professional experience
          </li>
        </ul>
      </div>
      <div className="divider w-3/4 ml-16"></div>
      <div className="w-[91%] mx-auto flex gap-4">
        <Link to={"/applyJob"}>
          {" "}
          <button className="bg-blue-600 p-4 rounded-md hover:bg-black text-white font-bold">
            Apply Now
          </button>
        </Link>
        <button className="bg-white p-4 rounded-md hover:bg-black hover:text-white text-black border font-bold">
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
