import Link from 'next/link';
import React from 'react';
import FrontEndDeveloper from '../FrontEnddeveloper/FrontEndDeveloper';

const Detail1 = () => {
    return (
        <div>
            <div className='pt-8 pb-6 mx-6 px-6 lg:flex justify-between hidden'>
                <div className='lg:w-[20%] w-[30%] lg:m-0 mr-4 flex justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <form action="#">
                            <input className='p-3 rounded-sm' type="checkbox" />
                        </form>
                        <p className='font-bold text-xs'>Opportunities Name</p>
                    </div>

                </div>
                    
                    

                <div className='w-[100%] flex justify-evenly items-center'>
                        <p className='font-bold text-xs'>Application Applied</p>
                        <p className='font-bold text-xs'>Field Of Occupation</p>
                    <p className='font-bold text-xs lg:m-0 mx-2'>Opportunity Duration</p>
                    <div></div>
                    <p className='font-bold text-xs'>Opportunity Created</p>
                    <p className='font-bold text-xs lg:m-0 mx-4'>Status</p>
                </div>
            </div>
        </div >
    );
};

export default Detail1;