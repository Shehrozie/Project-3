import Link from 'next/link';
import React from 'react';

const TeamLinks = () => {
    return (
        <div>

            {/* TeamLinks Start Here */}
            <div className='bg-yellow-300 pt-6'>
                <ul className='bg-red-300 flex md:justify-start justify-around gap-x-10 mx-6 h-10 border-b-[1px] border-gray-600'>
                    <li className='border-b-[3px] border-blue-700 h-full'>
                        <Link href={''}>
                            <a className='font-bold'>Members</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            <a className='font-bold'>Admin</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            <a className='font-bold'>Gethired - Success Manager</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='bg-emerald-300 pt-8 pb-6 mx-6 flex justify-between'>
                <p className='text-xs ml-6 mr-20'>Full Name</p>
                <p className='text-xs mr-16'>Role</p>
                <p className='text-xs'>Date Joined</p>
                <p className='text-xs'>E-mail Address</p>
                <p className='text-xs lg:mr-28 mr-14 lg:ml-48 ml-24'>Options</p>
            </div>
            {/* TeamLinks Start Here */}


        </div>
    );
};

export default TeamLinks;