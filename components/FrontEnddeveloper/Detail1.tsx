import Link from 'next/link';
import React from 'react';
import FrontEndDeveloper from '../FrontEnddeveloper/FrontEndDeveloper';

const Detail1 = () => {
    return (
        <div>
            <div className='rounded-lg m-6 p-6 md:flex items-center hidden'>
                <div className='w-[25%] flex items-center'>
                    <form className='flex items-center gap-x-4' action="">
                        <input className='p-3 rounded-sm' type="checkbox" />
                        <label className='font-bold text-sm' htmlFor="check">Full Name</label>
                    </form>
                </div>
                <div className='w-[75%] flex items-center justify-between gap-x-4'>
                    <p className='font-bold'>Opportunity Apply For</p>
                    <p className='font-bold'>Match %</p>
                    <p className='font-bold'>Date Applied</p>
                    <p className='font-bold'>Notes</p>
                    <p className='font-bold'>Remaining Time</p>
                    <p className='font-bold'>Status</p>
                </div>
            </div>
        </div >
    );
};

export default Detail1;