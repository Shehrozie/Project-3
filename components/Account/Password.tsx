import React from 'react';

const PasswordSetting = () => { 
    return (
        <div className="w-full p-4 flex gap-y-4 flex-col items-center border-y-2">
        <h1 className="text-2xl capitalize">Change or update your Password</h1>
        <form action="" className="w-full">

          <div className="w-full py-8 flex flex-col gap-y-4 items-center">
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[18%]"
              >
                Current Password
              </label>
              <input
                type="password"
                className="w-full rounded-md"
                // onClick={(event) => {
                //   e.preventDefault();
                // }}
              />
            </div>
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[18%]"
              >
                New Password
              </label>
              <input
                type="password"
                className="w-full rounded-md"
                // onClick={(event) => {
                //   e.preventDefault();
                // }}
              />
            </div>
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[18%]"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full rounded-md"
                // onClick={(event) => {
                //   e.preventDefault();
                // }}
              />
            </div>
          </div>
          <div className="w-full px-4">
            <button className="bg-blue-700 w-full p-4 rounded-md my-2 text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    );
};

export default PasswordSetting;