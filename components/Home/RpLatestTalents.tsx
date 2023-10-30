import React from 'react';
import Slider from "react-slick"

function ResponsiveLT() {
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
                <div className='font-bold text-2xl my-6'>Latest Talents</div>

                <div className='mb-8 flex justify-between'>
                    <div className='flex items-end gap-x-2'>
                        <h1 className='font-bold text-4xl text-blue-700'>12</h1>
                        <img className='mb-2' src="/img/success-arrow.svg" alt="" />
                        <p className='font-bold text-gray-700'>11% growth of last 30 days</p>
                    </div>
                    <div>
                        <img src="/img/group-user-icon.svg" alt="" />
                    </div>
                </div>

                <div className='mb-6'>
                    <Slider {...settings}>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Front-End Developer</p>
                            <p className='font-bold my-2'>95% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>16 Hours Review Time</p>
                        </div>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Front-End Developer</p>
                            <p className='font-bold my-2'>85% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>1 Days</p>
                        </div>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Front-End Developer</p>
                            <p className='font-bold my-2'>65% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>4 Days</p>
                        </div>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Back-End Developer</p>
                            <p className='font-bold my-2'>55% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>28 Days</p>
                        </div>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Back-End Developer</p>
                            <p className='font-bold my-2'>53% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>28 Days</p>
                        </div>
                        <div className='bg-white p-6 rounded-2xl flex flex-col gap-y-3 shadow-2xl'>
                            <p className='font-bold text-2xl'>Back-End Developer</p>
                            <p className='font-bold my-2'>53% Match</p>
                            <p className='font-bold text-gray-500 text-sm'>28 Days</p>
                        </div>
                    </Slider>
                </div>

                <div className='flex justify-end'>
                    <p className='font-bold text-sm text-blue-700'>Show All Applicants</p>
                </div>

            </div>
        </div>
    );
}


export default ResponsiveLT;