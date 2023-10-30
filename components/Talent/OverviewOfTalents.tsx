import React, { useState } from 'react';
import Link from 'next/link';
import Detail1 from './Detail1';
import LatestMap from './Latest';
import Shortlisted from './Shortlisted';
import Invited from './Invited';
import Accepted from './Accepted';
import RejectedMap from './Rejected';
import Slider from 'react-slick';
// import Active from './Active';
// import Draft from './Draft';
// import Closed from './Closed';

const OverviewOfTalents: React.FC = () => {

    const [teamLinks, setTeamLinks] = useState<number>(1);
    const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false)
    const renderTeamLinks = () => {
        switch (teamLinks) {
            case 1:
                return (
                    <>
                        <Detail1 />
                        <LatestMap />
                    </>
                );
            case 2:
                return (
                    <>
                        <Detail1 />
                        <Shortlisted />
                    </>
                );
            case 3:
                return (
                    <>
                        <Detail1 />
                        <Invited />
                    </>
                );
                case 4:
                return (
                    <>
                        <Detail1 />
                        <Accepted />
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
            <div className='flex justify-between md:items-center md:flex-row gap-y-10 flex-col pt-12 mx-4 pb-8'>
                <h1 className='font-bold text-3xl'>Overview of Talents</h1>
            </div>

            <div>
                {/* TeamLinks Start Here */}
                <div className='pt-6'>
                    <ul className='flex md:justify-start justify-around sm:gap-x-10 mx-6 h-10 border-b-[1px] border-gray-600'>
            {/* <Slider {...settings}> */}
                        <li className='h-full'>
                            <Link href={''}>
                                <a className='font-bold text-gray-600 focus:text-black border-blue-700 focus:border-b-2 h-full cursor-pointer' onClick={() => setTeamLinks(1)}>Latest</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold text-gray-600 focus:text-black' onClick={() => setTeamLinks(2)}>Shortlisted</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold text-gray-600 focus:text-black' onClick={() => setTeamLinks(3)}>Invited</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold text-gray-600 focus:text-black' onClick={() => setTeamLinks(4)}>Accepted</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={''}>
                                <a className='font-bold text-gray-600 focus:text-black' onClick={() => setTeamLinks(5)}>Rejected</a>
                            </Link>
                        </li>
                {/* </Slider> */}
                    </ul>

                    <div>{renderTeamLinks()}</div>
                </div>
                {/* TeamLinks Start Here */}
            </div>
        </div>
    );
};

export default OverviewOfTalents;