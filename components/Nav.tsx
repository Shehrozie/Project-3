/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import ActiveLink from "./Globals/ActiveLink";

const Nav = () => {
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleProfileMenu = () => {
    setProfileMenu(!profileMenu);
    if (profileMenu === false) {
      setShowNotification(false);
    }
  };

  const handleNotification = () => {
    setShowNotification(!showNotification);
    if (showNotification === false) {
      setProfileMenu(false);
    }
  };

  // Change Style Of UnorderList Or NavLinks When Onclick Start
  const navLinks: {
    id?: string | number;
    title: string;
    path?: string | string[];
  }[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Talents",
      path: "/talent",
    },
    {
      id: 3,
      title: "Messages",
      path: "/messagesss",
    },
    {
      id: 4,
      title: "Opportunities",
      path: "/opportunities",
    },
    {
      id: 5,
      title: "Profile",
      path: "/profile",
    },
    {
      id: 6,
      title: "Team",
      path: "/team",
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
    <div className="bg-white h-20 border-b-[1px] flex justify-between">
      <div className="ml-6 flex items-center">
        <img className="h-8" src="/img/logo.svg" alt="" />
      </div>
      <ul className="bg-white w-[58%] md:flex hidden justify-around items-center">
        {renderNavLinks}
      </ul>
      <div className="bg-white md:w-44 w-28 flex justify-between items-center mr-2">
        <img
          src="/img/bell-icon.svg"
          alt=""
          className="cursor-pointer md:block hidden"
          onClick={handleNotification}
        />
        <p className="md:block hidden">Shehroz</p>
        <Link href="/messagesss">
          <img
            src="/img/message-icon.svg"
            className="h-6 w-6 md:hidden"
            alt=""
          />
        </Link>
        <Link href="/notification">
          <img
            src="/img/bell-icon.svg"
            alt=""
            className="cursor-pointer block md:hidden"
            onClick={handleNotification}
          />
        </Link>
        <img
          onClick={handleProfileMenu}
          className="h-8 w-8 md:block hidden"
          src="/img/images.png"
          alt=""
        />
        <img
          onClick={handleProfileMenu}
          src="/img/Hamburger_icon.svg.png"
          alt=""
          className="md:hidden h-6 w-6"
        />
        <img
          onClick={handleProfileMenu}
          className="h-4 w-4 md:block hidden"
          src="/img/download.png"
          alt=""
        />
        {profileMenu && (
          <div className="bg-white w-44 absolute z-20 top-20 right-4 rounded-b-3xl border-x-2 border-b-2 border-black">
            {/* Div 1 Start */}
            <div className="flex flex-col justify-center pl-7 gap-y-3 py-4">
              <Link href="/account">
                <a href="/Account">Account</a>
              </Link>
              <Link href="/testingg">
                <a href="/+ InviteAMember">+ InviteAMember</a>
              </Link>
              <Link href="/">
                <a href="/ContactSupport">ContactSupport</a>
              </Link>
              <Link href="/">
                <a href="/Help">Help</a>
              </Link>
            </div>
            {/* Div 1 End */}

            {/* Div 2 Start */}
            <div className="bg-white relative z-10 border-y-2 border-black py-2 flex md:hidden flex-col list-none gap-y-2 pl-7">
              {renderNavLinks}
            </div>
            {/* Div 2 End */}

            {/* Div 3 Start */}
            <div className="flex flex-col justify-center items-center">
              {/* <hr className="w-[90%] border-black" /> */}
              <a className="py-3" href="">
                <Link href="/logoutss">Log Out</Link>
              </a>
            </div>
            {/* Div 3 End */}
          </div>
        )}
        {showNotification && (
          <div className="absolute z-50 w-[30rem] top-20 right-40 bg-white rounded-b-2xl md:block hidden">
            <div className="rounded-b-3xl">
              <div className="py-8 flex justify-around items-center gap-x-8">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <p className="text-xs cursor-pointer font-bold">
                  Mark All As Read
                </p>
              </div>

              {/* Notification 1 */}
              <div className="border-y-2 flex flex-col">
                <div className="py-4 flex justify-around">
                  <h1 className="font-bold">You have received a new Message</h1>
                  <p className="text-blue-700 font-bold cursor-pointer">View</p>
                </div>
                <div className="flex justify-around px-12">
                  <p className="text-sm text-gray-500 ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, c...
                  </p>
                </div>
                <div className="py-4 flex justify-around gap-x-32">
                  <div className="flex gap-x-3">
                    <img src="/img/clock-icon.svg" alt="" />
                    <p className="text-sm text-gray-500 ">25 mins ago</p>
                  </div>
                  <p className="text-sm text-gray-500  cursor-pointer">
                    Mark as Read
                  </p>
                </div>
              </div>
              {/* Notification 1 */}

              {/* Notification 2 */}
              <div className="border-b-2 flex flex-col">
                <div className="py-4 flex justify-around">
                  <h1 className="font-bold">You have received a new Message</h1>
                  <p className="text-blue-700 font-bold cursor-pointer">View</p>
                </div>
                <div className="flex justify-around px-12">
                  <p className="text-sm text-gray-500 ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, c...
                  </p>
                </div>
                <div className="py-4 flex justify-around gap-x-32">
                  <div className="flex gap-x-3">
                    <img src="/img/clock-icon.svg" alt="" />
                    <p className="text-sm text-gray-500 ">28 mins ago</p>
                  </div>
                  <p className="text-sm text-gray-500  cursor-pointer">
                    Mark as Read
                  </p>
                </div>
              </div>
              {/* Notification 2 */}

              {/* Notification 3 */}
              <div className="border-b-2 flex flex-col">
                <div className="py-4 flex justify-around">
                  <h1 className="font-bold">You have received a new Message</h1>
                  <p className="text-blue-700 font-bold cursor-pointer">View</p>
                </div>
                <div className="flex justify-around px-12">
                  <p className="text-sm text-gray-500">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, c...
                  </p>
                </div>
                <div className="py-4 flex justify-around gap-x-32">
                  <div className="flex gap-x-3">
                    <img src="/img/clock-icon.svg" alt="" />
                    <p className="text-sm text-gray-500">1h ago</p>
                  </div>
                  <p className="text-sm text-gray-500 cursor-pointer">
                    {" "}
                    Mark as Read
                  </p>
                </div>
              </div>
              {/* Notification 3 */}

              <div className="py-6 rounded-b-3xl flex justify-center">
                <Link href="/notification">
                  <button className="text-blue-600 cursor-pointer">
                    See all Notifications
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
