import React, { useState } from "react";
import YI from "./YourInformation";
import CYEA from "./ConfirmYourEmailAddress";
import YACI from "./Yours&CompanyInformation";
import CFOO from "./CompanysFieldOfOccuprtion";
import CL from "./CompanyLogo";
import Congratulations from "./Congratulation";

const FL = () => {
  const [showProfileDetail, setShowProfileDetail] = useState<boolean>(false);
  let [steps, setSteps] = useState<number>(1);

  const renderOpportunitySteps = () => {
    switch (steps) {
      case 1:
        return <YI />;
      case 2:
        return <CYEA />;
      case 3:
        return (
          <>
            <YACI />
          </>
        );
      case 4:
        return (
          <>
            <CFOO />
          </>
        );
      case 5:
        return (
          <>
            <CL />
          </>
        );
      case 6:
        return (
          <>
            <Congratulations />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="">{renderOpportunitySteps()}</div>
      <div className="bg-white p-4 pl-16 w-full z-10 fixed bottom-[0%]">
        <div className="flex justify-around">
          <button
            onClick={() => {
              steps > 1 ? setSteps((steps = steps - 1)) : null;
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-blue-600 px-8 py-4 rounded-xl text-white cursor-pointer"
            onClick={() => setSteps((steps = steps + 1))}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FL;
