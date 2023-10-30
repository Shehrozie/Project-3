import React, { useEffect, useState } from "react";
import OverviewOfTeam from "./OverviewOfTeam";
import TeamLinks from "./TeamLinks";
import Profiles from "./Profiles";
import GethiredSuccessManagerMap from "./Gethired_Success_Manager";
import AdminMap from "./Admin";
import Link from "next/link";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";
import cn from "classnames";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import { HidePasswordIcon, ShowPasswordIcon } from "../Icons";
// import * as Icons from "@/components/Icons"

const Team: React.FC = () => {
  const [registerForm, setRegisterForm] = useState({
    fn: "",
    ln: "",
    email: "",
    role: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRegisterForm({ ...registerForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = {
      ...registerForm,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    // setRecords([...records, newRecords]);
    console.log(records);
    setRegisterForm({
      fn: "",
      ln: "",
      email: "",
      role: "",
    });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordd, setShowPasswordd] = useState<boolean>(false);
  const [teamLinks, setTeamLinks] = useState<number>(1);
  const [showProfileDetails, setShowProfileDetails] = useState<boolean>(false);
  const renderTeamLinks = () => {
    switch (teamLinks) {
      case 1:
        return (
          <>
            <Detail1 />
            <Profiles />
          </>
        );
      case 2:
        return (
          <>
            <Detail1 />
            <AdminMap />
          </>
        );
      case 3:
        return (
          <>
            <Detail2 />
            <GethiredSuccessManagerMap />
          </>
        );
    }
  };

  return (
    <>
      <div>
        {/* Overview of Team Start Here */}
        <div className="flex md:flex-row flex-col justify-between md:items-center gap-y-10 py-8 px-6">
          <div className="text-3xl font-bold">Overview of Team</div>
          <div onClick={() => setShowProfileDetails(true)}>
            <button className="bg-blue-600 md:py-4 py-4 md:px-6 w-full rounded-lg text-white font-bold">
              + Add new Member
            </button>
          </div>
        </div>

        {showProfileDetails && (
          <div className="absolute top-0 w-full h-screen bg-black opacity-70"></div>
        )}

        {/* Forms Start */}
        {
          <div
            className={cn(
              "fixed h-screen md:w-[30rem] w-full bg-white top-0 duration-500 ease-in-out",
              {
                "right-0": showProfileDetails,
                "-right-[100%]": !showProfileDetails,
              }
            )}
          >
            <div className="w-full flex justify-between flex-col items-center h-full">
              <div className="w-[90%]">
                <div className="ml-4 py-8">
                  <p className="font-bold text-3xl">+ Add new Member</p>
                </div>

                <div>
                  <form
                    onSubmit={handleSubmit}
                    className="flex gap-x-4 "
                    action=""
                  >
                    <input
                      className="rounded-lg w-1/2"
                      type="text"
                      autoComplete="off"
                      value={registerForm.fn}
                      onChange={handleInput}
                      name="fn"
                      id="fn"
                    />
                    <label
                      className="bg-white absolute text-sm md:left-14 left-[9%] top-[5.7rem] font-bold"
                      htmlFor="First Name"
                    >
                      FIRST NAME
                    </label>
                    <input
                      className="rounded-lg w-1/2"
                      type="text"
                      autoComplete="off"
                      value={registerForm.ln}
                      onChange={handleInput}
                      name="ln"
                      id="ln"
                    />
                    <label
                      className="bg-white absolute md:left-[16.8rem] left-[54%] text-sm top-[5.7rem] font-bold"
                      htmlFor="Last Name"
                    >
                      LAST NAME
                    </label>
                  </form>
                </div>
                <div className="mt-12">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                    action=""
                  >
                    <label
                      className="bg-white font-bold absolute top-[11.3rem] md:left-14 left-[9%] text-sm"
                      htmlFor="Email"
                    >
                      E-Mail Address
                    </label>
                    <input
                      className="rounded-lg py-3"
                      type="text"
                      autoComplete="off"
                      value={registerForm.email}
                      onChange={handleInput}
                      name="email"
                      id="email"
                    />
                    <br />

                    <label
                      className="bg-white font-bold absolute top-[16.3rem] md:left-[3.2rem] left-[9%]"
                      htmlFor="Role"
                    >
                      Role
                    </label>
                    <select
                      id="Role"
                      name="Role"
                      autoComplete="off"
                      value={registerForm.role}
                      onChange={handleInput}
                      className="rounded-lg py-4 mt-2"
                    >
                      <option
                        className="text-gray-100 bg-red-500"
                        value="Please Select"
                      >
                        Please Select
                      </option>
                      <option value="Web Developer" className="bg-red-500">
                        Web Developer
                      </option>
                      <option
                        className="bg-red-500"
                        value="Front-End Developer"
                      >
                        Front-End Developer
                      </option>
                      <option className="bg-red-500" value="Recruitment Agent">
                        Recruitment Agent
                      </option>
                      <option className="bg-red-500" value="Project Manager">
                        Project Manager
                      </option>
                      <option className="bg-red-500" value="Back-End Developer">
                        Back-End Developer
                      </option>
                    </select>
                    <br />

                    <label
                      className="bg-white font-bold absolute top-[22rem] md:left-12 left-[9%]"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      className="rounded-lg py-3 mt-2"
                      type={showPassword ? "text" : "password"}
                      autoComplete="off"
                      // value="registerForm"
                      // onChange={handleInput}
                      // name="Password"
                      // id="Password"
                    />
                    {showPassword ? (
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute top-[23.6rem] left-[85.6%]"
                      >
                        <FontAwesomeIcon
                          icon={faEyeLowVision}
                        ></FontAwesomeIcon>
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute top-[23.5rem] left-[85.6%]"
                      >
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </div>
                    )}

                    <div className="absolute top-[23.6rem] left-96"></div>
                    <br />

                    <label
                      className="bg-white font-bold absolute top-[27rem] md:left-12 left-[9%]"
                      htmlFor="Confirm Password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="rounded-lg py-3 mt-2"
                      type={showPasswordd ? "text" : "password"}
                      autoComplete="off"
                      // value="registerForm"
                      // onChange={handleInput}
                      // name="cp"
                      // id="cp"
                    />
                    {showPasswordd ? (
                      <div
                        onClick={() => setShowPasswordd(!showPasswordd)}
                        className="cursor-pointer absolute top-[28.6rem] left-[85.6%]"
                      >
                        <FontAwesomeIcon
                          icon={faEyeLowVision}
                        ></FontAwesomeIcon>
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPasswordd(!showPasswordd)}
                        className="cursor-pointer absolute top-[28.6rem] left-[85.6%]"
                      >
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </div>
                    )}
                    <br />
                    <br />

                    <div className="ml-2 mt-4 flex items-center gap-x-6">
                      <input
                        className="p-3 rounded-md border-blue-500 border-2"
                        type="checkbox"
                      />
                      <label
                        className="font-bold text-gray-700"
                        htmlFor="checked"
                      >
                        Send Notification on member e-mail about their account
                      </label>
                    </div>
                  </form>
                </div>
              </div>

              <div
                onClick={() => setShowProfileDetails(false)}
                className="mb-10 px-4 flex justify-around items-center w-full"
              >
                <div className="ml-4 text-gray-600 font-bold cursor-pointer">
                  Cancel
                </div>
                <div className="bg-blue-700 w-[70%] text-center py-4 rounded-lg text-white font-bold cursor-pointer">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        }

        {/* Forms End */}

        {/* Overview of Team End Here */}

        {/* TeamLinks Start Here */}
        <div className="pt-6">
          <ul className="flex md:justify-start justify-around gap-x-10 mx-6 h-10 border-b-[1px] border-gray-600">
            <li className="border-b-[3px] focus:border-blue-700 h-full">
              <Link href={""}>
                <a className="font-bold" onClick={() => setTeamLinks(1)}>
                  Members
                </a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className="font-bold" onClick={() => setTeamLinks(2)}>
                  Admin
                </a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className="font-bold" onClick={() => setTeamLinks(3)}>
                  Gethired - Success Manager
                </a>
              </Link>
            </li>
          </ul>

          <div>{renderTeamLinks()}</div>
          <div>
            {records.map((curElem) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div>
                  {/* Profiles Start Here */}
                  <div className="md:flex hidden flex-col">
                    <div className="bg-white mx-6 mt-2 py-6 rounded-xl shadow-2xl flex justify-between items-center">
                      <div className="mx-6 flex items-center gap-x-4">
                        <img
                          className="h-12 rounded-full"
                          src="/img/profile_img1"
                          alt=""
                        />
                        <p className="font-bold lg:text-base text-xs">
                          {/* {curElem.fn} {curElem.ln} */}
                        </p>
                      </div>
                      {/* <p className="lg:text-base text-xs">{curElem.role}</p> */}
                      <p className="lg:text-base text-xs">14/08/2019</p>
                      <p className="lg:text-base text-xs text-blue-600 font-bold">
                        {/* {curElem.email} */}
                      </p>
                      <div className="text-2xl lg:mr-28 mr-14 lg:ml-48 ml-24 mb-4">
                        ...
                      </div>
                    </div>
                  </div>

                  <div className="bg-white px-4 pb-4 m-4 rounded-xl md:hidden flex flex-col">
                    <div className="text-right text-2xl font-bold">...</div>
                    <div className="flex gap-x-4">
                      <img
                        className="h-14 rounded-full"
                        src="/img/profile_img.svg"
                        alt=""
                      />
                      <div className="flex flex-col justify-center">
                        <p className="font-bold">
                          {/* {curElem.fn} {curElem.ln} */}
                        </p>
                        {/* <p>{curElem.role}</p> */}
                      </div>
                    </div>
                    <div className="text-blue-800 font-bold py-4">
                      {/* {curElem.email} */}
                    </div>
                    <div className="pb-2 flex gap-x-4 items-center">
                      <p className="text-gray-600">14/08/2019</p>
                      <p className="text-xs font-bold text-gray-700">...</p>
                    </div>
                  </div>
                  {/* Profiles End Here */}
                </div>
              );
            })}
          </div>
        </div>
        {/* TeamLinks Start Here */}
      </div>
    </>
  );
};

export default Team;
