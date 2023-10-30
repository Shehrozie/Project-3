import React, { useState } from 'react';
import Link from 'next/link';
import Detail1 from './Detail1';
import Active from './Active';
import Draft from './Draft';
import Closed from './Closed';

const OverviewOfOpportunity: React.FC = () => {

    const [teamLinks, setTeamLinks] = useState<number>(1);
    const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false)
    const renderTeamLinks = () => {
        switch (teamLinks) {
            case 1:
                return (
                    <>
                        <Detail1 />
                        <Active />
                    </>
                );
            case 2:
                return (
                    <>
                        <Detail1 />
                        <Draft />
                    </>
                );
            case 3:
                return (
                    <>
                        <Detail1 />
                        <Closed />
                    </>
                );
        }
    };

    return (
        <div>
            <div className='flex justify-between md:items-center md:flex-row gap-y-10 flex-col pt-12 mx-4 pb-8'>
                <h1 className='font-bold text-3xl'>Overview of Opportunities</h1>
                <Link href="/createnewopportunities">
                <button className='bg-blue-600 md:w-auto w-full px-6 py-4 text-white font-bold rounded-lg'>+ Create New Opportunity</button>
                </Link>
            </div>

            <div>
                {/* TeamLinks Start Here */}
                <div className='pt-6'>
                    <ul className='flex md:justify-start justify-around gap-x-10 mx-6 h-10 border-b-[1px] border-gray-600'>
                        <li className='border-b-[3px] focus:border-blue-700 h-full'>
                            <Link href={''}>
                                <a className='font-bold' onClick={() => setTeamLinks(1)}>Active</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold' onClick={() => setTeamLinks(2)}>Draft</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold' onClick={() => setTeamLinks(3)}>Closed</a>
                            </Link>
                        </li>
                    </ul>

                    <div>{renderTeamLinks()}</div>
                </div>
                {/* TeamLinks Start Here */}
            </div>
        </div>
    );
};

export default OverviewOfOpportunity;