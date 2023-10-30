/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import FrontEndDevelopment from '../FrontEnddeveloper/FrontEndDeveloper';

const AcceptedMap: React.FC = () => {
    const acceptedData = [
        {
            id: 1,
            imgName: "/img/gallery-icon.svg",
            userName: "Waleed Ali Khan",
            notesIcon: "Front-End Developer",
            percentage: "95%",
            dateApplied: "14/08/2019",
            chatIcon: "/img/note-icon.svg",
            daysRemain: "7 Days To Respond",
            review: "Accepted"
        },

    ];


    const renderAcceptedData = acceptedData.map((copy: any, index: number) => {
        return (
            <React.Fragment key={`${copy.id}${index}`}>
                <Link href="/frontend">
                    <div className='bg-white cursor-pointer rounded-lg mx-6 my-4 px-6 py-8 shadow-xl md:flex items-center hidden'>
                        <div className='w-[25%] lg:mr-0 mr-8 flex items-center'>
                            <form className='flex items-center gap-x-4' action="">
                                <input className='p-3 rounded-sm' type="checkbox" />
                                <div className='p-3 rounded-full border-gray-700 border-[1px]'>
                                    <img src={copy.imgName} alt="" />
                                </div>
                                <label className='font-bold text-sm' htmlFor="check">{copy.userName}</label>
                            </form>
                        </div>
                        <div className='w-[75%] flex items-center justify-between gap-x-4'>
                            <p className='font-bold text-blue-700'>{copy.notesIcon}</p>
                            <p className='font-bold text-2xl'>{copy.percentage}</p>
                            <p>{copy.dateApplied}</p>
                            <img src={copy.chatIcon} alt="" />
                            <p className='font-bold text-gray-500'>{copy.daysRemain}</p>
                            <p className='font-bold text-blue-700'>{copy.review}</p>
                        </div>
                    </div>
                </Link>

                <Link href="/frontend">
                    <div className='bg-white cursor-pointer my-6 mx-6 p-4 rounded-lg md:hidden'>
                        <div className='mb-2 flex justify-between gap-x-2'>
                            <div className='flex items-center gap-x-4'>
                                <div className='p-4 border-[1px] rounded-full'>
                                    <img src={copy.imgName} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-bold text-2xl'>{copy.userName}</h1>
                                    <p className='font-bold text-gray-600'>{copy.percentage}</p>
                                </div>
                            </div>
                            <img src={copy.chatIcon} alt="" />
                        </div>

                        <div className='my-6 rounded-xl flex items-center gap-x-2'>
                            <p className='font-bold text-2xl text-blue-700'>{copy.notesIcon}</p>
                        </div>

                        <div className='my-4 flex justify-between'>
                            <p className='font-bold text-gray-500'>{copy.daysRemain}</p>
                            <p className='text-gray-600'>{copy.dateApplied}</p>
                        </div>

                        <div className='pt-6 pb-2 border-t-2 flex justify-center items-center gap-x-3'>
                            <p className='font-bold text-blue-600'>{copy.review}</p>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }

    );

    return (
        <>
            <div>{renderAcceptedData}</div>
        </>
    );

};

export default AcceptedMap;