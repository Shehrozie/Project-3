import React from 'react';

const SB = () => { 
    return (
        <div className='md:block hidden'>
            <div className='bg-white w-64 h-screen flex flex-col items-center pt-12'>
                <div className='flex flex-col gap-y-12'>
                <div className='font-bold text-gray-500'>About</div>
                <div className='font-bold text-gray-500'>Description</div>
                <div className='font-bold text-gray-500'>Category (& Skills)</div>
                <div className='font-bold text-gray-500'>Salary</div>
                <div className='font-bold text-gray-500'>Talent</div>
                <div className='font-bold text-gray-500'>Review</div>
                </div>
            </div>
        </div>
    );
};

export default SB;