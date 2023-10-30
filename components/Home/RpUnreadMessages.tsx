import React from 'react';
import Slider from "react-slick"

const ResponsiveUM: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    return (
        <div>
            <div className='m-4'>
                <div className='font-bold text-2xl my-6'>Unread Messages</div>

                <div className='mb-8 flex justify-between'>
                    <div className='flex items-end gap-x-2'>
                        <h1 className='font-bold text-4xl text-blue-700'>6</h1>
                        <p className='font-bold text-gray-700 md:text-sm text-xs mb-1'>It takes 2-3 Hours On Average From Candidate To Answer Since Accept.</p>
                    </div>
                    <div>
                        <img src="/img/message-icon.svg" alt="" />
                    </div>
                </div>

                <div className='mb-6'>
                    <Slider {...settings}>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <div className='w-full flex flex-col justify-between gap-y-6'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-2 items-center'>
                                        <img src="/img/profile_img1.png" alt="" />
                                        <h1 className='font-bold'>Jim Halpert</h1>
                                    </div>
                                    <div className='text-xs font-bold text-gray-700'>30 Min Ago</div>
                                </div>
                                <div className='flex items-center gap-x-6'>
                                    <div className='bg-blue-700 h-4 p-2 rounded-full'></div>
                                    <p className='font-bold'>Hello I was just wondering how we could handle this transfer from my part since that way it...</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <div className='w-full flex flex-col justify-between gap-y-6'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-2 items-center'>
                                        <img src="/img/profile_img2.png" alt="" />
                                        <h1 className='font-bold'>Angela Martin</h1>
                                    </div>
                                    <div className='text-xs font-bold text-gray-700'>1h Ago</div>
                                </div>
                                <div className='flex items-center gap-x-6'>
                                    <div className='bg-blue-700 h-4 p-2 rounded-full'></div>
                                    <p className='font-bold'>The problem we are facing is beyond you and me. We need to understand that problem far deeper....</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <div className='w-full flex flex-col justify-between gap-y-6'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-x-2 items-center'>
                                        <img src="/img/profile_img3.png" alt="" />
                                        <h1 className='font-bold'>Ryan Howard</h1>
                                    </div>
                                    <div className='text-xs font-bold text-gray-700'>2 Days Ago</div>
                                </div>
                                <div className='flex items-center gap-x-6'>
                                    <div className='bg-blue-700 h-4 p-2 rounded-full'></div>
                                    <p className='font-bold'>Thank you so much for everything, it was amazing interview. We will be definitly in touch in...</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className='flex justify-end'>
                    <p className='font-bold text-sm text-blue-700'>Show All Applicants</p>
                </div>

            </div>
        </div>
    );
};

export default ResponsiveUM;