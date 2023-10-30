/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const AdminMap: React.FC = () => {
    const adminData = [
        {
            id: 1,
            cardImage: "/img/user-one.jpeg",
            teamName: "Waleed Ali Khan",
            recruitmentAgent: "Admin",
            dateApplied: "14/08/2019",
            notesIcon: "...",
            email: "waleedomore@gmail.com",
            status: "Date Joined",
        },
    ];


    const renderAdminData = adminData.map((copy: any, index: number) => {
        return (
            <React.Fragment key={`${copy.id}${index}`}>
                <div>
                    {/* Profiles Start Here */}
                    <div className='md:flex hidden flex-col'>

                        <div className='bg-white mx-6 mt-2 py-6 rounded-xl shadow-2xl flex justify-between items-center'>
                            <div className='mx-6 flex items-center gap-x-4'>
                                <img className='h-12 rounded-full' src={copy.cardImage} alt="" />
                                <p className='font-bold lg:text-base text-xs'>{copy.teamName}</p>
                            </div>
                            <p className='lg:text-base text-xs'>{copy.recruitmentAgent}</p>
                            <p className='lg:text-base text-xs'>{copy.dateApplied}</p>
                            <p className='lg:text-base text-xs'>{copy.email}</p>
                            <div className='text-2xl lg:mr-28 mr-14 lg:ml-48 ml-24 mb-4'>{copy.notesIcon}</div>
                        </div>
                    </div>

                    <div className='bg-white px-4 pb-4 m-4 rounded-xl md:hidden flex flex-col'>
                        <div className='text-right text-2xl font-bold'>...</div>
                        <div className='flex gap-x-4'>
                            <img className='h-14 rounded-full' src={copy.cardImage} alt="" />
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold'>{copy.teamName}</p>
                                <p>{copy.recruitmentAgent}</p>
                            </div>
                        </div>
                        <div className='text-blue-800 font-bold py-4'>{copy.email}</div>
                        <div className='pb-2 flex gap-x-4 items-center'>
                            <p className='text-gray-600'>{copy.dateApplied}</p>
                            <p className='text-xs font-bold text-gray-700'>{copy.status}</p>
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
            <div>{renderAdminData}</div>
        </>
    );

};

export default AdminMap;