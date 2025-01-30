import React from 'react';
import CategorySlider from './CategorySlider';
import Hiring from '../Hiring';

const BrowseCategory = () => {
    return (
        <div className='bg-white py-12 md:py-24 max-w-7xl mx-auto'>
            <div className='mb-16'>
                <h2 className="md:text-[35px] text-[32px] font-semibold text-black text-center my-3">Browse by category</h2>
                <p className="text-gray-500 mx-8 md:mx-0 md:text-xl text-center">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div>
                <CategorySlider></CategorySlider>
                <Hiring></Hiring>
            </div>
        </div>
    );
};

export default BrowseCategory;