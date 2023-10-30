import React from "react";
import Modal from "./Popup";
import Modals from "./OpenPopUp";
import MobileResponsive from "./Responsive";

const DesktopResponsive = () => {
  return (
    <>
      <div className="w-fit md:flex gap-12 m-4 hidden">
        <Modals />
        <Modal />
      </div>
      <div className="md:hidden flex h-full w-full">
        <MobileResponsive />
      </div>
    </>
  );
};

export default DesktopResponsive;
