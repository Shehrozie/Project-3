import React from 'react';


const UnreadMessages = () => {
    return (
        <>
            <div className='w-[33%] m-4 rounded-xl'>
                {/* UnreadMessages Start Here */}
                <div className='bg-white rounded-xl p-4 shadow-2xl'>
                    <div className=' rounded flex flex-row'>
                        <h1 className='text-2xl font-bold'>Unread Messages</h1>
                    </div>

                    <div className='bg-white py-4 flex flex-row justify-between'>
                        <div className='flex items-end'>
                            <h1 className='font-bold text-blue-700 text-3xl'>6</h1>
                            <p className='text-xs bg-white pr-10 ml-4'>It takes 2-3 hours on average from Candidate to asnwer since Accept.</p>
                        </div>
                        <div>
                            <img className='h-12 w-12' src="/img/message-icon.svg" alt="" />
                        </div>
                    </div>

                    {/* Profile 1 */}
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex items-center'>
                            <img src="/img/profile_img1.png" alt="" />
                            <p className='text-xs ml-2'>Jim Halpert</p>
                        </div>
                        <div>
                            <p className='text-xs'>30min ago</p>
                        </div>
                    </div>
                    <div className='flex border-b-[1px] border-black mb-2'>
                        <div className='mb-4 flex flex-row items-center gap-4'>
                            <div className='p-1 bg-blue-700 rounded-full'></div>
                            <p className='text-sm'>Hello I was just wondering how we could handle this transfer from my part since that way it...</p>
                        </div>
                    </div>

                    {/* Profile 2 */}
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex items-center'>
                            <img src="/img/profile_img2.png" alt="" />
                            <p className='text-xs ml-2'>Angela Martin</p>
                        </div>
                        <div>
                            <p className='text-xs'>1h ago</p>
                        </div>
                    </div>
                    <div className='flex border-b-[1px] border-black mb-2'>
                        <div className='mb-4 flex flex-row items-center gap-4'>
                            <div className='p-1 bg-blue-700 rounded-full'></div>
                            <p className='text-sm'>
                                The problem we are facing is beyond you and me. We need to understand that problem far deeper...</p>
                        </div>
                    </div>

                    {/* Profile 3 */}
                    <div className='flex justify-between items-center py-2'>
                        <div className='flex items-center'>
                            <img src="/img/profile_img3.png" alt="" />
                            <p className='text-xs ml-2'>Ryan Howard</p>
                        </div>
                        <div>
                            <p className='text-xs'>2days ago</p>
                        </div>
                    </div>
                    <div className='flex border-b-[1px] border-black mb-2'>
                        <div className='mb-4 flex flex-row items-center gap-4'>
                            <div className='p-1 bg-blue-700 rounded-full'></div>
                            <p className='text-sm'>Thank you so much for everything, it was amazing interview. We will be definitly in touch in...</p>
                        </div>
                    </div>

                    <div className='flex justify-center py-4 font-bold text-blue-700 cursor-pointer'>
                        <h1>Show All Messages</h1>
                    </div>

                </div>

                <div className='bg-white mt-4 rounded-full cursor-pointer shadow-2xl'>
                    <div className='bg-white py-4 flex flex-col items-center rounded-xl'>
                        <img className='h-10' src="/img/user-invite-icon.svg" alt="" />
                        <p>Invite New Member To Team</p>
                    </div>
                </div>
                {/* UnreadMessages End Here */}
            </div>
        </>
    );
};

export default UnreadMessages;