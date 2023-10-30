/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const GethiredSuccessManagerMap: React.FC = () => {
    const gethiredSuccessManagerData = [
        {
            id: 1,
            cardImage: "/img/user-one.jpeg",
            teamName: "Erin Hannon",
            recruitmentAgent: "GetHired - Success Manager",
            dateApplied: "Erin is official GetHired Success Manger, who is here to help with you needs and getting around our service.",
            notesIcon: "+ Schedule A Meeting",
        },
    ];


    const renderGethiredSuccessManagerData = gethiredSuccessManagerData.map((copy: any, index: number) => {
        return (
            <React.Fragment key={`${copy.id}${index}`}>
                <div>
                    {/* Profiles Start Here */}
                    <div className='md:flex hidden flex-col'>

                        <div className='bg-white mx-6 mt-2 py-6 rounded-xl shadow-2xl flex justify-between items-center'>
                            <div className='w-56 mx-6 flex items-center gap-x-2'>
                                <img className='h-12 rounded-full' src={copy.cardImage} alt="" />
                                <p className='font-bold xl:text-base text-xs'>{copy.teamName}</p>
                            </div>
                            <p className='mr-4 xl:text-base text-xs w-56'>{copy.recruitmentAgent}</p>
                            <p className='xl:text-base text-xs'>{copy.dateApplied}</p>
                            <div className='ml-4 w-56 2xl:text-base text-xs text-blue-700 font-bold lg:mr-14 mr-7'>{copy.notesIcon}</div>
                        </div>
                    </div>

                    <div className='bg-white px-4 pb-4 m-4 rounded-xl md:hidden flex flex-col'>
                        <div className='my-4 flex gap-x-4'>
                            <img className='h-14 rounded-full' src={copy.cardImage} alt="" />
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold'>{copy.teamName}</p>
                                <p>{copy.recruitmentAgent}</p>
                            </div>
                        </div>
                        <div className='pb-2 flex gap-x-4 items-center'>
                            <p className='text-gray-600'>{copy.dateApplied}</p>
                        </div>
                        <div className='py-6 border-t-[1px] border-gray-700 flex justify-center'>
                            <p className='text-sm font-bold text-blue-800'>{copy.notesIcon}</p>
                        </div>
                    </div>
                    {/* Profiles End Here */}

                </div>
            </React.Fragment>
        );
    }

    );

    return (
        <>
            <div>{renderGethiredSuccessManagerData}</div>
        </>
    );

};

export default GethiredSuccessManagerMap;