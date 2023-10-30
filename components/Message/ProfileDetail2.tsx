import React, { useState } from "react";
import MessageBar from "./MessageBar2";

const ProfileDetail = () => {
  const [rtc, setRtc] = useState(false);
  return (
    <div className="lg:w-1/4 w-full h-screen overflow-y-scroll bg-white border-4">
      {rtc && (
        <div className="w-full h-screen absolute">
          <MessageBar />
        </div>
      )}
      <div className="mt-4 flex flex-col justify-center items-center gap-y-3">
        <img
          className="xl:h-28 xl:w-28 h-14 w-14"
          src="/img/profile_img2.png"
          alt=""
        />
        <p className="2xl:text-3xl xl:text-xl text-lg font-bold">
          Angelena Martin
        </p>
        <p className="text-gray-500 xl:text-base text-xs">France</p>
        <div className="bg-green-100 p-4 my-4 rounded-xl flex gap-3 xl:flex-row flex-col justify-center items-center">
          <div className="bg-green-500 h-6 w-6 rounded-full"></div>
          <p className="font-bold xl:text-lg text-xs text-center">
            Web, Mobile & Software Development
          </p>
        </div>
        <h1 className="2xl:text-4xl xl:text-xl text-lg">68% Match</h1>
        <p className="text-blue-700 xl:text-base text-xs">
          Software Architecture
        </p>
      </div>

      {/* Skills Square Boxes Start */}
      <div className="w-full p-4">
        <div className="py-12 border-b-[1px]">
          <div className="font-bold text-2xl">Required Skills</div>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
              HTML (+5 Years)
            </div>
            <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
              CSS (+5 Years)
            </div>
            <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
              Javascript: Angular (+3 Years)
            </div>
            <div className="font-bold bg-green-100 px-6 py-4 rounded-xl">
              Javascript: React (+3 Years)
            </div>
            <div className="font-bold bg-purple-100 px-6 py-4 rounded-xl">
              Javascript: NodeJS (+3 Years)
            </div>
            <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
              PHP (+3 Years)
            </div>
            <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
              Ruby (+2 Years)
            </div>
            <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
              Python (+2 Years)
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4">
        <div className="py-12 border-b-[1px]">
          <div className="font-bold text-2xl">Bonus Skills</div>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
              HTML (+5 Years)
            </div>
            <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
              CSS (+5 Years)
            </div>
            <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
              Javascript: Angular (+3 Years)
            </div>
            <div className="font-bold bg-green-100 px-6 py-4 rounded-xl">
              Javascript: React (+3 Years)
            </div>
            <div className="font-bold bg-purple-100 px-6 py-4 rounded-xl">
              Javascript: NodeJS (+3 Years)
            </div>
            <div className="font-bold bg-blue-100 px-6 py-4 rounded-xl">
              PHP (+3 Years)
            </div>
            <div className="font-bold bg-yellow-100 px-6 py-4 rounded-xl">
              Ruby (+2 Years)
            </div>
            <div className="font-bold bg-orange-100 px-6 py-4 rounded-xl">
              Python (+2 Years)
            </div>
          </div>
        </div>
      </div>
      {/* Skills Square Boxes End */}

      <div className="w-full lg:hidden block">
        <button
          onClick={() => setRtc(!rtc)}
          className="bg-blue-700 2xl:p-8 xl:p-4 p-2 w-full xl:rounded-2xl rounded-md 2xl:text-2xl xl:text-lg text-xs text-white"
        >
          Return To Conversation
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
