/* eslint-disable @next/next/no-img-element */
import React from "react";

const Notifications = () => {
  return (
    <>
      <div>
        <div>
          <div className="px-8 pt-8">
            <p className="font-bold md:text-3xl">Notifications</p>
          </div>

          <div className="mt-8">
            {/* Notification 1 */}
            <div className="bg-white m-8 px-6 rounded-2xl shadow-2xl flex md:flex-row flex-col">
              <div className="flex flex-col justify-center gap-y-2 md:h-36 md:w-[30rem] md:py-auto py-4">
                <p className="xl:text-base md:text-xs text-lg">
                  You have received a new Message
                </p>
                <div className="flex gap-x-2">
                  <img src="/img/clock-icon.svg" alt="" />
                  <p className="text-sm">25 mins ago</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, c...
                </p>
              </div>
              <div className="flex items-center md:pl-6 md:py-auto py-4">
                <button className="text-blue-700 border-2 border-blue-600 h-12 px-8 hover:bg-blue-600 rounded-lg hover:text-white duration-500">
                  View
                </button>
              </div>
            </div>

            {/* Notification 2 */}
            <div className="bg-white m-8 px-6 rounded-2xl shadow-2xl flex md:flex-row flex-col">
              <div className="flex flex-col justify-center gap-y-2 md:h-36 md:w-[30rem] md:py-auto py-4">
                <p className="xl:text-base md:text-xs text-lg">
                  You have received a new Message
                </p>
                <div className="flex gap-x-2">
                  <img src="/img/clock-icon.svg" alt="" />
                  <p className="text-sm">28 mins ago</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, c...
                </p>
              </div>
              <div className="flex items-center md:pl-6 md:py-auto py-4">
                <button className="text-blue-700 border-2 border-blue-600 h-12 px-8 hover:bg-blue-600 rounded-lg hover:text-white duration-500">
                  View
                </button>
              </div>
            </div>

            {/* Notification 3 */}
            <div className="bg-white m-8 px-6 rounded-2xl shadow-2xl flex md:flex-row flex-col">
              <div className="flex flex-col justify-center gap-y-2 md:h-36 md:w-[30rem] md:py-auto py-4">
                <p className="xl:text-base md:text-xs text-lg">
                  You have received a new Message
                </p>
                <div className="flex gap-x-2">
                  <img src="/img/clock-icon.svg" alt="" />
                  <p className="text-sm">1h ago</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, c...
                </p>
              </div>
              <div className="flex items-center md:pl-6 md:py-auto py-4">
                <button className="text-blue-700 border-2 border-blue-600 h-12 px-8 hover:bg-blue-600 rounded-lg hover:text-white duration-500">
                  View
                </button>
              </div>
            </div>

            {/* Notification 4 */}
            <div className="bg-white m-8 px-6 rounded-2xl shadow-2xl flex md:flex-row flex-col">
              <div className="flex flex-col justify-center gap-y-2 md:h-36 md:w-[30rem] md:py-auto py-4">
                <p className="xl:text-base md:text-xs text-lg">
                  You have received a new Message
                </p>
                <div className="flex gap-x-2">
                  <img src="/img/clock-icon.svg" alt="" />
                  <p className="text-sm">2h ago</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-sm font-light">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, c...
                </p>
              </div>
              <div className="flex items-center md:pl-6 md:py-auto py-4">
                <button className="text-blue-700 border-2 border-blue-600 h-12 px-8 hover:bg-blue-600 rounded-lg hover:text-white duration-500">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;

{
  /* <div className='bg-purple-500 h-22 w-24 flex items-center justify-center'>
</div> */
}
