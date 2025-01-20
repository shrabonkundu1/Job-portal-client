import React from 'react';
import Banner from './Banner';
import RunningJobs from './RunningJobs';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <RunningJobs></RunningJobs>
        </div>
    );
};

export default Home;