import React, { useState } from "react";
import NB from "../CreateNewOpportunity/Navbar";
import FL from "./FooterLinks";

const SigningUp = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <NB />
      <FL />
    </div>
  );
};

export default SigningUp;
