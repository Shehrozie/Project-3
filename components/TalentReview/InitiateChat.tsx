/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import * as Icons from "@/components/Icons"
import cn from "classnames"

type Props = {
    showProfileDetails?: () => void;
    // name?: String | Number
}

const InitiateChat: React.FC<Props> = ({ showProfileDetails, }) => {
    return (
        <>
        <div className='md:p-0 p-4'>
            <div className='bg-white w-full rounded-xl py-4 px-4 flex flex-col justify-center items-center shadow-2xl'>

                <div className='py-4 flex justify-center items-center gap-10'>
                    <div>
                        <img className='h-full w-full' src="/img/chat-initiater.png" alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h1 className='font-bold'>Kelly</h1>
                        <p className='text-xs'>gethired chat support</p>
                        <p className='font-bold'>kelly@gethired.ai</p>
                        <p className='font-bold text-blue-700'>+44 1632 960673</p>
                    </div>
                </div>

                <div onClick={showProfileDetails} className='bg-blue-100 w-[90%] flex justify-center py-4 rounded-xl my-4 cursor-pointer'>
                    <button className='font-bold text-blue-700'>+ Initiate Chat</button>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-center'>(2) people in queue before you. Average wait time</p>
                    <p className='font-bold'>less than 5 mins.</p>
                </div>
            </div>
            </div>

            <div>
                {/* <h1>Hello to {name}</h1> */}
            </div>
        </>
    );
};

export default InitiateChat;