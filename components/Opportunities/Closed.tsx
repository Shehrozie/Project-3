/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import FrontEndDevelopment from '../FrontEnddeveloper/FrontEndDeveloper';

const ClosedMap: React.FC = () => {
    const closedData = [
        {
            id: 1,
            teamName: "Full-Stack Developer",
            number: "24",
            notesIcon: "Web, Mobile & Software Development",
            daysRemain: "Expired",
            dateApplied: "14/08/2019",
            status: "Active",
            applyTime: "Applicants Applied"
        },
    ];


    const renderClosedData = closedData.map((copy: any, index: number) => {
        return (
            <React.Fragment key={`${copy.id}${index}`}>
                <Link href="/frontenddeveloper">
                    <div className='bg-white px-3 py-8 mb-4 mx-3 rounded-lg shadow-xl md:flex justify-between hidden'>
                        <div className='lg:w-1/2 w-[70%] lg:m-0 mx-2 flex justify-between'>
                            <div className='flex items-center gap-x-4'>
                                <form action="#">
                                    <input className='p-3 rounded-sm' type="checkbox" />
                                </form>
                                <p className='font-bold text-sm text-blue-700'>{copy.teamName}</p>
                            </div>

                            <div className='lg:m-0 ml-4 w-[60%] flex items-center justify-evenly gap-x-6'>
                                <p className='font-bold text-3xl'>{copy.number}</p>
                                <div className='bg-green-100 px-2.5 py-2.5 rounded-md flex items-center gap-x-2'>
                                    <div className='bg-green-500 p-2.5 rounded-full'></div>
                                    <p className='font-bold text-sm'>{copy.notesIcon}</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 flex justify-evenly items-center'>
                            <p className='font-bold text-sm lg:m-0 mx-2'>{copy.daysRemain}</p>
                            <p className='text-sm text-gray-900 lg:mx-0 mx-2'>{copy.dateApplied}</p>
                            <div className='flex items-center gap-x-2'>
                                <div className='bg-gray-300 p-2.5 rounded-full'></div>
                                <p className='font-bold text-sm lg:m-0 mx-4'>{copy.status}</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/frontenddeveloper">
                    <div className='bg-white my-6 mx-6 p-4 rounded-lg md:hidden'>
                        <div className='text-blue-700 font-bold text-xl'>{copy.teamName}</div>

                        <div className='mt-6 mb-2 flex items-end gap-x-2'>
                            <h1 className='font-bold text-2xl'>{copy.number}</h1>
                            <p className='font-bold text-gray-600'>{copy.applyTime}</p>
                        </div>

                        <div className='bg-green-100 p-4 my-4 rounded-xl flex items-center gap-x-2'>
                            <div className='bg-green-500 p-3 rounded-full'></div>
                            <p className='font-bold'>{copy.notesIcon}</p>
                        </div>

                        <div className='my-4 flex justify-between'>
                            <p className='font-bold'>{copy.daysRemain}</p>
                            <p className='text-gray-600'>{copy.dateApplied}</p>
                        </div>

                        <div className='pt-6 pb-2 border-t-2 flex justify-center items-center gap-x-3'>
                            <div className='bg-gray-300 p-3 rounded-full'></div>
                            <p className='font-bold text-gray-600'>{copy.status}</p>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }

    );

    return (
        <>
            <div>{renderClosedData}</div>
        </>
    );

};

export default ClosedMap;