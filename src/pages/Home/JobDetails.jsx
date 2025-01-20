import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const [loading,setLoading] =useState(false)
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/jobs/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    return (
        <div>
            job details 
        </div>
    );
};

export default JobDetails;