/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FrontEndDevelopment from "../FrontEnddeveloper/FrontEndDeveloper";

const PayHistoryMap: React.FC = () => {
  const activesData = [
    {
      id: 1,
      teamName: "Subscription",
      daysRemain: "30 Days",
      number: "6123RT2",
      notesIcon: "Visa",
      dateApplied: "14/08/2019",
      status: "$199.00",
      applyTime: "Pending",
    },

    {
      id: 2,
      teamName: "Subscription",
      daysRemain: "30 Days",
      number: "6123RT2",
      notesIcon: "Visa",
      dateApplied: "14/08/2019",
      status: "$199.00",
      applyTime: "Completed",
    },
    {
      id: 3,
      teamName: "Subscription",
      daysRemain: "30 Days",
      number: "6123RT2",
      notesIcon: "Visa",
      dateApplied: "14/08/2019",
      status: "$199.00",
      applyTime: "Rejected",
    },
  ];

  const renderActivesData = activesData.map((copy: any, index: number) => {
    return (
      <React.Fragment key={`${copy.id}${index}`}>
        {/* Desktop */}
        <div className="bg-white w-full px-3 py-8 mb-4 mx-3 rounded-lg shadow-xl md:flex justify-between hidden">
          <div className="lg:w-1/2 w-[70%] lg:m-0 mx-2 flex justify-between">
            <div className="flex flex-col items-center gap-x-4">
              <p className="font-bold">{copy.teamName}</p>
              <div className="text-gray-500 text-sm">{copy.daysRemain}</div>
            </div>

            <div className="lg:m-0 ml-4 w-[60%] flex items-center justify-evenly gap-x-6">
              <p className="text-xl">{copy.number}</p>
              <div className="px-2.5 py-2.5 rounded-md flex items-center gap-x-2">
                <p className="font-bold text-sm">{copy.notesIcon}</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-evenly items-center">
            <p className="font-bold text-sm lg:m-0 mx-2">{copy.dateApplied}</p>
            <p className="text-sm text-gray-900 lg:mx-0 mx-2">{copy.status}</p>
            <div className="flex items-center">
              <div className="bg-blue-500 p-2.5 rounded-full"></div>
              <p className="font-bold text-sm lg:m-0 mx-1">{copy.applyTime}</p>
            </div>
          </div>
        </div>
        {/* Desktop */}

        {/* Responsive */}
        <div className="bg-white my-6 mx-6 p-4 rounded-lg md:hidden">
          <div className="flex justify-between">
            <div className="text-black font-bold">{copy.teamName}</div>
            <p className="font-bold">{copy.notesIcon}</p>
          </div>

          <div className="mt-6 mb-2 flex items-center justify-between gap-x-2">
            <p className="font-bold text-gray-700">{copy.daysRemain}</p>
            <p className="text-gray-700">{copy.number}</p>
          </div>

          <div className="my-6 flex justify-between">
            <p className="text-gray-600">{copy.dateApplied}</p>
            <p className="font-bold">{copy.status}</p>
          </div>

          <div className="pt-6 pb-2 border-t-2 flex justify-center items-center gap-x-3">
            <div className="bg-blue-500 p-3 rounded-full"></div>
            <p className="font-bold text-gray-600">{copy.applyTime}</p>
          </div>
        </div>
        {/* Responsive */}
      </React.Fragment>
    );
  });

  return (
    <>
      <div>{renderActivesData}</div>
    </>
  );
};

export default PayHistoryMap;
