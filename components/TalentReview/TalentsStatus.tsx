import React, { useState } from 'react';
import DropdownMenu from './Dropdown';

const TalentStatus = () => { 

    const [selected, setSelected] = useState("");

    return (
        <div className='py-8'>
            <div className='bg-white shadow-2xl rounded-2xl p-4'>
                <h1 className='font-bold'>Talent Status</h1>
                <p className='py-4'>You have You have 7 days remaining to decide</p>

                <DropdownMenu selected={selected} setSelected={setSelected} />

            </div>
        </div>
    );
};

export default TalentStatus;