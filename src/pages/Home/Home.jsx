import React from 'react';
import Banner from './Banner';
import RunningJobs from './RunningJobs';
import BrowseCategory from './BrowseCategory/BrowseCategory';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BrowseCategory></BrowseCategory>
            <RunningJobs></RunningJobs>
        </div>
    );
};

export default Home;