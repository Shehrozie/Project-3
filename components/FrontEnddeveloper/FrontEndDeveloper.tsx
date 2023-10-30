import React, { useState } from 'react';
import { faArrowRotateBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Detail1 from './Detail1';
import AppliedMap from './Applied';
import ShortlistedMap from './Shortlisted';
import InvitedMap from './Invited';
import AcceptedMap from './Accepted';
import RejectedMap from './Rejected';

const FrontEndDevelopment: React.FC = () => {

    const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false)
    const [teamLinks, setTeamLinks] = useState<number>(1);
    const renderListsLinks = () => {
        switch (teamLinks) {
            case 1:
                return (
                    <>
                        <Detail1 />
                        <AppliedMap />
                    </>
                );
            case 2:
                return (
                    <>
                        <Detail1 />
                        <ShortlistedMap />
                    </>
                );
            case 3:
                return (
                    <>
                        <Detail1 />
                        <InvitedMap />
                    </>
                );
            case 4:
                return (
                    <>
                        <Detail1 />
                        <AcceptedMap />
                    </>
                );
            case 5:
                return (
                    <>
                        <Detail1 />
                        <RejectedMap />
                    </>
                );
        }
    };

    return (
        <div>
            <div className='pt-12 px-5 flex md:justify-between md:items-end md:flex-row flex-col'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex items-center gap-x-4'>
                        <Link href="/opportunities"><FontAwesomeIcon className='text-3xl text-red-700' icon={faBackwardStep}></FontAwesomeIcon></Link>
                        <p className='font-bold text-3xl'>Front-End Developer</p>
                    </div>

                    <div className='ml-8 flex gap-x-2'>
                        <div className='bg-green-400 p-3 rounded-full'></div>
                        <p className='font-bold'>Active</p>
                    </div>
                </div>

                <div className='md:mt-0 mt-8 flex gap-x-4'>
                    <p className='font-bold text-gray-700'>30 Days Remaining</p>
                    <p className='text-gray-700'>(Ebds On 14/08/2019)</p>
                </div>
            </div>

            <div className='mt-4 mx-6 flex sm:justify-end justify-center gap-x-8'>
                <div className='font-bold text-blue-700'>View Opportunity</div>
                <div className='font-bold text-blue-700'>Edit Opportunity</div>
                <div className='font-bold text-blue-700'>Close Opportunity</div>
            </div>

            {/* TeamLinks Start Here */}
            <div className='pt-12'>
                <ul className='flex md:justify-start justify-around gap-x-10 mx-6 h-full border-b-[0.5px] border-gray-600'>

                    <li className='pb-4 cursor-pointer'>
                        <p className='font-bold text-4xl'>1</p>
                        <a className='font-bold' onClick={() => setTeamLinks(1)}>Applied</a>
                    </li>


                    <li className='pb-4 cursor-pointer'>
                        <p className='font-bold text-4xl'>2</p>
                        <a className='font-bold' onClick={() => setTeamLinks(2)}>Shortlisted</a>
                    </li>


                    <li className='pb-4 cursor-pointer'>
                        <p className='font-bold text-4xl'>3</p>
                        <a className='font-bold' onClick={() => setTeamLinks(3)}>Invited</a>
                    </li>


                    <li className='pb-4 cursor-pointer'>
                        <p className='font-bold text-4xl'>4</p>
                        <a className='font-bold' onClick={() => setTeamLinks(4)}>Accepted</a>
                    </li>


                    <li className='pb-4 cursor-pointer'>
                        <p className='font-bold text-4xl'>5</p>
                        <a className='font-bold' onClick={() => setTeamLinks(5)}>Rejected</a>
                    </li>

                </ul>

                <div>{renderListsLinks()}</div>
            </div>
            {/* TeamLinks Start Here */}
        </div>
    );
};

export default FrontEndDevelopment;