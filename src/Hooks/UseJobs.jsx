import React, { useEffect, useState } from 'react';

const UseJobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch(``,)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    },[])


    return jobs;
};

export default UseJobs;