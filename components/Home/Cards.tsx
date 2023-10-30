import React from 'react';


const Cards = () => {
    return (
        <>
            <div className='w-full my-5 md:mx-0 px-4'>

                {/* Card Part 1 */}
                <div className='flex gap-4 pb-4'>
                    {/* Card 1 */}
                    <div className='bg-white w-1/2 p-6 rounded-xl flex flex-col justify-center items-center shadow-2xl'>
                        <h1 className='font-bold text-2xl text-blue-700'>1</h1>
                        <p className='py-2 text-xs text-center font-bold'>Active Opportunity</p>
                        <p className='text-xs text-center py-2 text-gray-500 font-bold'>24 days remaining <br /> (Expires: 12 Oct, 2019)</p>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white w-1/2 p-6 rounded-xl flex flex-col justify-center items-center shadow-2xl'>
                        <h1 className='font-bold text-2xl text-blue-700'>82%</h1>
                        <p className='py-2 text-xs text-center font-bold'>Average % of Match</p>
                        <p className='text-xs text-center py-2 text-gray-500 font-bold'>This is your match percentage per opportunity</p>
                    </div>
                </div>

                {/* Card Part 2 */}
                <div className="flex gap-4">
                    {/* Card 3 */}
                    <div className='bg-white w-1/2 p-6 rounded-xl flex flex-col justify-center items-center shadow-xl'>
                        <h1 className='font-bold text-2xl text-blue-700'>1</h1>
                        <p className='py-2 text-xs text-center font-bold'>Latest Invited Talents</p>
                        <p className='text-xs text-center py-2 text-gray-500 font-bold'>On average you invite 1-2 Talent per Opportunity</p>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-white w-1/2 p-6 rounded-xl flex flex-col justify-center items-center shadow-xl'>
                        <h1 className='font-bold text-2xl text-blue-700'>3</h1>
                        <p className='py-2 text-xs text-center font-bold'>Members in Team</p>
                        <p className='text-xs text-center py-2 text-gray-500 font-bold'>You have 3 Members in your Team so far</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cards;