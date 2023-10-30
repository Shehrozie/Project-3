import React, { useState } from 'react';

const DropdownMenu = ({ selected, setSelected }) => {

    const [isActive, setIsActive] = useState(false);
    const options = ['Invited', 'Accepted', 'Rejected'];
    
    return (
        <div>
            <div id="dropdown" className='w-[400px] relative select-none'>
                <div id="dropdown-btn" className='py-[15px] px-[20px] rounded-xl bg-blue-700 text-white shadow-2xl font-bold flex items-center justify-between cursor-pointer' onClick={(e) => setIsActive(!isActive)}>{selected} Select</div>
                    {isActive && (
                        <div id="dropdown-content" className='absolute top-[110%] left-0 p-[10px] ml-2.5 rounded-xl bg-[#fff] shadow-2xl font-bold text-[#333] w-[95%]'>
                            {options.map((option) => (
                                <div onClick={(e) => {
                                    setSelected(option);
                                    setIsActive(false);
                                }} id='dropdown-item' className='p-[10px] cursor-pointer transition-all duration-1000 hover:bg-[#f4f4f4]'>{option}</div>
                            ))}
                        {/* <div id="dropdown-item" className='p-[10px] cursor-pointer transition-all duration-1000 hover:bg-[#f4f4f4]' onClick={(e) => setIsActive(!isActive)}>React</div>
                        <div id="dropdown-item" className='p-[10px] cursor-pointer transition-all duration-1000 hover:bg-[#f4f4f4]' onClick={(e) => setIsActive(!isActive)}>Vue</div> */}
                    </div>
                    )}
            </div>
        </div>
    );
};

export default DropdownMenu;