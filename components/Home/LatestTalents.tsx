import React from 'react';


const LatestTalents = () => {
    return (
        <>
            <div className='w-[33%] m-4 rounded-xl'>
                {/* Latest Talents Start Here */}
                <div className='bg-white rounded-xl p-4 shadow-2xl'>

                    <div className=' rounded flex flex-row'>
                        <h1 className='text-2xl font-bold'>Latest Talents</h1>
                    </div>

                    <div className='flex flex-col'>

                        <div className='bg-white pt-6 flex flex-row justify-between'>
                            <div className='bg-white flex items-end'>
                                <h1 className='font-bold text-blue-700 text-3xl mr-3'>12</h1>
                                <img className='mb-1' src="/img/success-arrow.svg" alt="" />
                                <p className='xl:text-sm text-[11px] ml-2'>11% growth of last 30 days</p>
                            </div>

                            <div className='bg-white flex'>
                                <img src="/img/group-user-icon.svg" alt="" />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 xl:text-sm text-xs'>OPPEORTUNITY NAME</div>
                                <div className='w-1/4 xl:text-sm text-xs'>MATCH%</div>
                                <div className='w-1/4 xl:text-sm text-xs'>REVIEW TIME</div>
                            </div>

                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Front-End Developer</div>
                                <div className='w-1/4 text-sm'>95%</div>
                                <div className='w-1/4 text-sm'>16 HOURS</div>
                            </div>

                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Front-End Developer</div>
                                <div className='w-1/4 text-sm'>85%</div>
                                <div className='w-1/4 text-sm'>1 DAY</div>
                            </div>


                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Front-End Developer</div>
                                <div className='w-1/4 text-sm'>65%</div>
                                <div className='w-1/4 text-sm'>4 DAY</div>
                            </div>

                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Back-End Developer</div>
                                <div className='w-1/4 text-sm'>55%</div>
                                <div className='w-1/4 text-sm'>28 DAY</div>
                            </div>

                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Back-End Developer</div>
                                <div className='w-1/4 text-sm'>53%</div>
                                <div className='w-1/4 text-sm'>28 DAY</div>
                            </div>

                            <div className='flex w-full py-3 border-b-[1px] border-black'>
                                <div className='w-1/2 text-sm'>Back-End Developer</div>
                                <div className='w-1/4 text-sm'>53%</div>
                                <div className='w-1/4 text-sm'>28 DAY</div>
                            </div>

                            <div className='flex justify-center py-4 font-bold text-blue-700 cursor-pointer'>
                                <h1>Show All Applicants</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white mt-4 rounded-full cursor-pointer shadow-2xl'>
                    <div className='bg-white py-4 flex flex-col items-center rounded-xl'>
                        <img className='h-10' src="/img/create-opportunity-icon.svg" alt="" />
                        <p>+ Create New Opportunity</p>
                    </div>
                </div>
                {/* Latest Talents Start Here */}
            </div>
        </>
    );
};

export default LatestTalents;