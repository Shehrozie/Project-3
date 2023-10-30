import React from 'react';

const OpportunityOverviews = () => {
    return (
        <div>
            <div className='bg-white my-4 p-6 rounded-xl lg:w-96 shadow-xl'>
                <div className='font-bold text-2xl pt-2 pb-4'>Opportunity Overview</div>

                <div className='flex flex-wrap gap-10 pb-6 border-b-2'>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-2xl'>12</h1>
                        <p className='text-gray-500 font-bold'>Applied Talent</p>
                    </div>
                    <div className='w-[30%]'>
                        <h1 className='font-bold text-2xl'>4</h1>
                        <p className='text-gray-500 font-bold'>Shortlisted</p>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-2xl'>6</h1>
                        <p className='text-gray-500 font-bold'>Invited Talents</p>
                    </div>
                    <div className='w-[30%]'>
                        <h1 className='font-bold text-2xl'>2</h1>
                        <p className='text-gray-500 font-bold'>Rejected</p>
                    </div>
                    <div className='w-full'>
                        <h1 className='font-bold text-2xl'>42</h1>
                        <p className='text-gray-500 font-bold'>Opportunity Viewed By Talents</p>
                    </div>
                </div>

                <div className='py-6'>
                    <h1 className='font-bold text-2xl'>30 Days</h1>
                    <p className='text-2xl'>(Ends On 14/08/2019)</p>
                </div>

                <div className='bg-gray-200 rounded-lg p-4'>
                    <div className='flex items-center gap-x-4'>
                        <div className='bg-green-600 p-3 rounded-full'></div>
                        <p className='font-bold'>Active</p>
                    </div>
                </div>

                <div className='bg-blue-700 rounded-lg p-4 mt-4 text-center'>
                    <button className='text-white font-bold'>View Applied Talents</button>
                </div>
            </div>
        </div>
    );
};

export default OpportunityOverviews;