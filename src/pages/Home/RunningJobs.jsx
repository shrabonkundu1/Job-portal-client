import React, { useEffect, useState } from 'react';
import RunningJobCard from './RunningJobCard';

const RunningJobs = () => {
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    },[])
    return (
        <div className='bg-white py-16 max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job => <RunningJobCard key={job._id} job={job}></RunningJobCard>)
                }
            </div>
        </div>
    );
};

export default RunningJobs;