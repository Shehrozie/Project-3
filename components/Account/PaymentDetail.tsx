/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FrontEndDevelopment from "../FrontEnddeveloper/FrontEndDeveloper";

const PaymentDetailsMap: React.FC = () => {
  const activesData = [
    {
      id: 1,
      teamName: "Description",
      daysRemain: "Payment ID",
      number: "Method",
      notesIcon: "Date",
      dateApplied: "Amount",
      status: "Status",
      // applyTime: "Pending",
    },
  ];

  const renderActivesData = activesData.map((copy: any, index: number) => {
    return (
      <React.Fragment key={`${copy.id}${index}`}>
        {/* Desktop */}
        <div className="w-full px-3 py-8 mx-3 rounded-lg md:flex justify-between hidden">
          <div className="lg:w-1/2 w-[70%] lg:m-0 mx-2 flex justify-between">
            <div className="flex items-center gap-x-4">
              <p className="text-gray-600 text-sm ml-4">{copy.teamName}</p>
            </div>

            <div className="lg:m-0 ml-4 w-[60%] flex items-center justify-evenly gap-x-6">
              <div className="text-gray-600 text-sm">{copy.daysRemain}</div>
              <div className="px-2.5 py-2.5 rounded-md flex items-center gap-x-2">
                <p className="text-gray-600 text-sm">{copy.number}</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-evenly items-center">
            <p className="text-gray-600 text-sm">{copy.notesIcon}</p>
            <p className="text-gray-600 text-sm">{copy.dateApplied}</p>
            <div className="flex items-center gap-x-2">
              <p className="text-gray-600 text-sm">{copy.status}</p>
            </div>
          </div>
        </div>
        {/* Desktop */}
      </React.Fragment>
    );
  });

  return (
    <>
      <div>{renderActivesData}</div>
    </>
  );
};

export default PaymentDetailsMap;
