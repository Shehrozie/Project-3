import Link from 'next/link';
import React from 'react';
import FrontEndDeveloper from '../FrontEnddeveloper/FrontEndDeveloper';

const Detail1 = () => {
    return (
        <div>
            <div className='pt-8 pb-6 mx-6 md:flex justify-between hidden'>
                <div className='lg:w-1/2 w-[70%] lg:m-0 mx-2 flex justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <form action="#">
                            <input className='p-3 rounded-sm' type="checkbox" />
                        </form>
                        <p className='font-bold text-xs'>Opportunities Name</p>
                    </div>

                    <div className='lg:m-0 ml-4 lg:pr-28 w-[60%] flex items-center justify-evenly'>
                        <p className='font-bold text-xs'>Application Applied</p>
                        <p className='font-bold text-xs'>Field Of Occupation</p>
                    </div>
                </div>

                <div className='w-1/2 flex justify-evenly items-center'>
                    <p className='font-bold text-xs lg:m-0 mx-2'>Opportunity Duration</p>
                    <p className='font-bold text-xs'>Opportunity Created</p>
                    <p className='font-bold text-xs lg:m-0 mx-4'>Status</p>
                </div>
            </div>
        </div >
    );
};

export default Detail1;