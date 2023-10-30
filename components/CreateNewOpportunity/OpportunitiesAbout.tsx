/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import AboutCO from "./COAbout";
import DescriptionCo from "./CODescription";
import CategoryCO from "./COCategory";
import DropDownMS from "./DropDownMultiSelect";
import InitiateChat from "./InitiateChat";
import cn from "classnames";
import * as Icons from "@/components/Icons";
import Link from "next/link";
import TextEditor from "./RichTextEditor";
import SalaryCO from "./COSalary";
import TalentCO from "./COTalent";
import FrontEndsCO from "./COFrontEnd";

const OpportunitiesAbout: React.FC = () => {
  let [steps, setSteps] = useState<number>(1);

  const renderOpportunitySteps = () => {
    switch (steps) {
      case 1:
        return <AboutCO />;
      case 2:
        return <DescriptionCo />;
      case 3:
        return <CategoryCO />;
      case 4:
        return <SalaryCO />;
      case 5:
        return <TalentCO />;
      case 6:
        return <FrontEndsCO />;

      default:
        return null;
    }
  };

  return (
    <div className="md:pb-0 flex flex-col justify-between w-full h-screen">
      {renderOpportunitySteps()}
      <div className="bg-white p-4 pb-20 w-full">
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

export default OpportunitiesAbout;
