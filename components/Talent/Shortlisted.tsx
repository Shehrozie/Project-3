/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import FrontEndDevelopment from '../FrontEnddeveloper/FrontEndDeveloper';
import TalentReviews from '../TalentReview/TalentsReview';
import TalentsReviews from '../TalentReview';

const ShortlistedMap: React.FC = () => {
    const shortlistedData = [
        {
            id: 1,
            teamName: "Waleed Ali Khan",
            skill: "Front-End Developer",
            notesIcon: "95%",
            dateApplied: "14/08/2019",
            daysRemain: "7 Days To Response",
            status: "Shortlisted",
        },

        {
            id: 2,
            teamName: "Shehroz Ali Khan",
            skill: "Front-End Developer",
            notesIcon: "92%",
            dateApplied: "13/08/2019",
            daysRemain: "6 Days To Response",
            status: "Shortlisted",
        },

        {
            id: 3,
            teamName: "Majid Ali Khan",
            skill: "Front-End Developer",
            notesIcon: "81%",
            dateApplied: "13/08/2019",
            daysRemain: "6 Days To Response",
            status: "Shortlisted",
        },
    ];


    const renderShortlistedData = shortlistedData.map((copy: any, index: number) => {
        return (
            <React.Fragment key={`${copy.id}${index}`}>
                <Link href="/talentsreviews">

                <div className='bg-white pt-8 pb-6 mx-6 mt-6 px-6 rounded-2xl lg:flex justify-between hidden'>
                <div className='lg:w-[20%] w-[30%] lg:m-0 mr-4 flex justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <form action="#">
                            <input className='p-3 rounded-sm' type="checkbox" />
                        </form>
                        <div className='p-4 border-2 rounded-full'>
                                <img src="/img/gallery-icon.svg" alt="" />
                                </div>
                                <p className='font-bold text-lg text-black'>{copy.teamName}</p>
                    </div>

                </div>
                    
                    

                <div className='w-[100%] flex justify-evenly items-center'>
                        <p className='font-bold text-lg text-blue-700'>{copy.skill}</p>
                        <p className='font-bold text-2xl'>{copy.notesIcon}</p>
                    <p className='text-gray-600 text-sm'>{copy.dateApplied}</p>
                    <img src="/img/note-icon.svg" alt="" />
                    <p className='font-bold text-xs text-gray-600 lg:m-0 mx-2'>{copy.daysRemain}</p>
                    <p className='font-bold text-sm text-blue-700 lg:m-0 mx-4'>{copy.status}</p>
                </div>
            </div>
                </Link>

                <Link href="/talentsreviews">
                    <div className='bg-white my-6 mx-6 p-6 rounded-lg lg:hidden'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-x-4'>
                        <div className='p-4 border-2 rounded-full'>
                                <img className='h-20' src="/img/gallery-icon.svg" alt="" />
                            </div>
                       <div>
                        <div className='font-bold text-lg'>{copy.teamName}</div>
                        <div className='font-bold text-lg'>{copy.notesIcon}</div>
                        </div>
                        </div>
                        <div>
                        <img src="/img/note-icon.svg" alt="" />
                        </div>
                        </div>

                        <div className='mt-6 mb-2 flex items-end gap-x-2'>
                            <h1 className='font-bold text-2xl'>{copy.number}</h1>
                            <p className='font-bold text-gray-600'>{copy.applyTime}</p>
                        </div>

                        <div className='mb-6'>
                            <p className='font-bold sm:text-2xl text-xl text-blue-700'>{copy.skill}</p>
                        </div>

                        <div className='my-4 flex justify-between'>
                            <p className='font-bold text-gray-600'>{copy.daysRemain}</p>
                            <p className='text-gray-600'>{copy.dateApplied}</p>
                        </div>

                        <div className='pt-6 pb-2 border-t-2 flex justify-center items-center gap-x-3'>
                            <p className='font-bold text-blue-700'>{copy.status}</p>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }

    );

    return (
        <>
            <div>{renderShortlistedData}</div>
        </>
    );

};

export default ShortlistedMap;