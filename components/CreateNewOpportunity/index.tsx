import React, { useState } from "react";
import InitiateChat from "./InitiateChat";
import NB from "./Navbar";
import OpportunitiesAbout from "./OpportunitiesAbout";
import SB from "./Sidebar";
import * as Icons from "@/components/Icons";
import cn from "classnames";
``;
const CNO = () => {
  return (
    <div>
      <NB />
      <div className="flex md:bg-transparent bg-white">
        <SB />
        <OpportunitiesAbout />
      </div>
    </div>
  );
};

export default CNO;
