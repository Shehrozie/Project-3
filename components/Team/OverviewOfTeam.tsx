import React from 'react';

const OverviewOfTeam = () => {
    return (
        <div>

            {/* Overview of Team Start Here */}
            <div className='bg-violet-400 flex md:flex-row flex-col justify-between md:items-center gap-y-10 py-8 px-6'>
                <div className='text-3xl font-bold'>Overview of Team</div>
                <div>
                    <button className='bg-blue-600 md:py-4 py-4 md:px-6 w-full rounded-lg text-white font-bold'>+ Add new Member</button>
                </div>
            </div>
            {/* Overview of Team End Here */}

        </div>
    );
};

export default OverviewOfTeam;