import React from 'react';

const TalentReviews = () => { 
    return (
        <div>
            <div className='bg-white py-8 lg:px-20 px-16'>

                <div className='w-full pb-10 border-b-2'>
                    <div className='flex justify-between items-center'>
                        <div className='font-bold text-2xl'>Talent Review</div>
                        <div className='font-bold text-xl'>95% Match</div>
                    </div>
                    <div className='pt-10 flex lg:flex-row flex-col justify-between items-center gap-y-8'>
                        <div className='w-{50%] flex justify-between gap-x-6'>
                            <div className='bg-white rounded-full border-2 xl:p-16 p-12 flex justify-center items-center'>
                                <img className='' src="/img/no-img-icon.svg" alt="" />
                            </div>
                            <div className='w-32 2xl:py-4 py-2 flex justify-between flex-col'>
                                <div>
                                <p className='font-bold text-xs text-gray-600'>First & Last Name</p>
                                <h1 className='font-bold lg:text-xl text-sm'>000 000</h1>
                                </div>
                                <div>
                                <p className='font-bold text-xs text-gray-600'>Location</p>
                                <h1 className='font-bold lg:text-xl text-sm'>Berlin, Germany</h1>
                                </div>
                            </div>
                        </div>
                        <div className='text-gray-800'>Candidate Full Name and Picture will stay hidden until they Accept your invite</div>
                    </div>
                </div>

                <div className='py-6 border-b-2'>
                    <p className='text-gray-500 font-bold pb-4 text-sm'>Opportunity Applying For</p>
                    <h1 className='text-blue-700 font-bold text-2xl'>Front-End Developer</h1>
                </div>

                <div className='py-12 border-b-2'>
                <div className='font-bold text-sm text-gray-700'>Talents Skills</div>
                <div className='mt-6 flex flex-wrap gap-4'>
                    <div className='bg-blue-100 px-6 py-4 rounded-xl font-bold'>HTML (5 Years)</div>
                    <div className='bg-yellow-100 px-6 py-4 font-bold rounded-xl'>CSS (5 Years)</div>
                    <div className='bg-red-100 px-6 py-4 font-bold rounded-xl'>Javascript: Angular (3 Years)</div>
                    <div className='bg-green-100 px-6 py-4 font-bold rounded-xl'>Javascript: React (3 Years)</div>
                    <div className='bg-orange-100 font-bold px-6 py-4 rounded-xl'>Ruby (2 Years)</div>
                    <div className='bg-purple-100 font-bold px-6 py-4 rounded-xl'>Javascript: NodeJS (3 Years)</div>
                </div>
                <div className='py-12 font-bold'>VS.</div>
                <div className='font-bold text-sm text-gray-700'>Talents Skills</div>
                <div className='mt-6 flex flex-wrap gap-4'>
                    <div className='bg-blue-100 px-6 py-4 rounded-xl font-bold'>HTML (5 Years)</div>
                    <div className='bg-yellow-100 px-6 py-4 font-bold rounded-xl'>CSS (5 Years)</div>
                    <div className='bg-red-100 px-6 py-4 font-bold rounded-xl'>Javascript: Angular (3 Years)</div>
                    <div className='bg-green-100 px-6 py-4 font-bold rounded-xl'>Javascript: React (3 Years)</div>
                    <div className='bg-orange-100 font-bold px-6 py-4 rounded-xl'>Ruby (2 Years)</div>
                    <div className='bg-purple-100 font-bold px-6 py-4 rounded-xl'>Javascript: NodeJS (3 Years)</div>
                </div>
            </div>

            <div className='py-6 border-b-2'>
                    <p className='text-gray-500 font-bold pb-4 text-sm'>Portfolio Link</p>
                    <h1 className='font-bold text-2xl'>Portfolioo.Jimhalpert.Com</h1>
                </div>

                <div className='py-6 border-b-2'>
                    <p className='text-gray-500 font-bold pb-4 text-sm'>Short Bio</p>
                    <p className='text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45BCm making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cities of the word in classical literature, discoverd the undoubtable source. This book is treatise on the theory of ethics, very popular during.</p>
                </div>

                <div className='py-10'>
                    <p className='font-bold text-gray-700 text-sm pb-4'>Notable Achievements</p>
                    <ul className='list-disc text-blue-700'>
                        <li className='text-gray-600 capitalize'>At least 15 years of work experience in the field of web development</li>
                        <li className='text-gray-600 py-2 capitalize'>Won Developer award from UK in 2019</li>
                        <li className='text-gray-600 capitalize'>Startup reached as nr. #1 startup in UK 2019</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default TalentReviews;