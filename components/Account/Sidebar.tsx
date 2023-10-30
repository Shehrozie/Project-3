import React, { useState } from "react";
import Profile from "../Profile";
import ProfileSetting from "./Profile";
import PasswordSetting from "./Password";
import NotificationSetting from "./Notification";
import PayingHistory from "./PayHistory";
import AboutGetHired from "./AboutHired";
import HelpLine from "./Help";
import PrivacyAndPolicy from "./Privacy&Policy";
import PaymentMethod from "./PaymentMethods";
import ActiveLink from "../Globals/ActiveLinkTwo";

const SideBars = () => {
  // Change Style Of UnorderList Or NavLinks When Onclick Start
  const navLinks: {
    id?: string | number;
    title: string;
    path?: string | string[];
  }[] = [
    {
      id: 1,
      title: "Profile",
      // path: "",
    },
    {
      id: 2,
      title: "Password",
      path: "",
    },
    {
      id: 3,
      title: "Notification",
      path: "",
    },
    {
      id: 4,
      title: "Payment Method",
      path: "",
    },
    {
      id: 5,
      title: "Payment History",
      path: "",
    },
    {
      id: 6,
      title: "About",
      path: "",
    },
    {
      id: 7,
      title: "Help",
      path: "",
    },
    {
      id: 8,
      title: "Privacy & Policy",
      path: "",
    },
    {
      id: 9,
      title: "Terms & Condition",
      path: "",
    },
  ];

  const renderNavLinks = navLinks.map(
    (
      link: { id?: string | number; title: string; path?: string | string[] },
      index: number
    ) => {
      return (
        <React.Fragment key={`${link.id}${index}${link.title}`}>
          <ActiveLink title={link.title} path={link.path} />
        </React.Fragment>
      );
    }
  );
  // Change Style Of UnorderList Or NavLinks When Onclick End

  return (
    <nav className="flex">
      <ul
        id="navbar"
        className="bg-white md:w-52 w-full md:static absolute h-screen pt-6 flex flex-col md:items-start items-center"
      >
        {renderNavLinks}
        {/* <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Profile
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Password
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Notifications
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Payment Methods
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Payment History
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          About
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Help
        </li>
        <li className="md:border-0 border-t-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Privacy & Policy
        </li>
        <li className="md:border-0 border-y-2 w-full h-full cursor-pointer text-gray-600 pl-4">
          Terms & Conditions
        </li> */}
      </ul>
      {/* <ProfileSetting /> */}
      {/* <PasswordSetting/> */}
      {/* <NotificationSetting/> */}
      {/* <PayingHistory /> */}
      {/* <AboutGetHired /> */}
      {/* <HelpLine /> */}
      {/* <PrivacyAndPolicy /> */}
      <PaymentMethod />
    </nav>
  );
};

export default SideBars;
