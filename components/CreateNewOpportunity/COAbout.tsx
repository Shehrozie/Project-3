/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import InitiateChat from "./InitiateChat";
import cn from "classnames";
import * as Icons from "@/components/Icons";
import DropDownMS from "./DropDownMultiSelect";
import Link from "next/link";

const AboutCO = () => {
  const [showProfileDetail, setShowProfileDetail] = useState<boolean>(false);
  return (
    <div className="w-full flex justify-between pt-8">
      <form className="w-full px-4 flex flex-col" action="" method="post">
        <h1 className="font-bold text-3xl py-4">Opportunity About</h1>
        <p className="text-gray-500 pb-6">
          Please write opportunity title and add your office location
        </p>
        <label htmlFor="">Opportunity Type</label>
        <select name="" id="" className="rounded-md">
          <option value="" className="text-gray-500">
            Please Select
          </option>
          <option value="" className="bg-white">
            Front-End Developer
          </option>
          <option value="">Back-End Developer</option>
          <option value="">Full-Stack Developer</option>
        </select>
        <label htmlFor="">Opportunity Title</label>
        <input type="text" className="rounded-md" />
        <label htmlFor="">Talent Office Locations</label>
        <DropDownMS />
      </form>
      <InitiateChat showProfileDetails={() => setShowProfileDetail(true)} />
      {showProfileDetail && (
        <div
          onClick={() => setShowProfileDetail(false)}
          className="absolute top-0 w-full h-screen bg-black opacity-70"
        ></div>
      )}
      <div
        className={cn(
          "fixed h-screen md:w-[30rem] w-full bg-white top-0 duration-500 ease-in-out",
          {
            "right-0": showProfileDetail,
            "-right-[100%]": !showProfileDetail,
          }
        )}
      >
        <div className="w-full flex flex-col justify-between h-full px-5">
          <div
            onClick={() => setShowProfileDetail(false)}
            className="cursor-pointer mt-4 py-4 w-full border-b-2 flex justify-between"
          >
            <div className="flex items-center gap-x-4">
              <div>
                <img className="h-20" src="/img/chat-initiater.png" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-3xl">Kelly</h1>
                <p className="font-bold text-gray-600">
                  Gethired Chat <br /> Support
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Icons.CloseIcon />
            </div>
          </div>

          <div className="h-fit py-8 flex justify-between flex-col gap-y-8">
            <div className="absolute md:bottom-[45%] bottom-[38%]">
              <img
                className="absolute h-16 bottom-[85%]"
                src="/img/chat-initiater.png"
                alt=""
              />
              <p className="bg-slate-100 p-5 mx-6 rounded-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                mattis nunc commodo pharetra vel elit. Elementum enim, mollis id
                dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem
                feugiat lacus et se?
              </p>
            </div>

            <div className="absolute md:bottom-[28%] bottom-[24%]">
              <img
                className="absolute bottom-[85%] h-16"
                src="/img/chat-initiater.png"
                alt=""
              />
              <p className="bg-slate-100 p-5 mx-6 rounded-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                mattis nunc commodo pharetra vel elit. Elementum enim, mollis id
                dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem
                feugiat lacus et se?
              </p>
            </div>

            <div>
              <p className="bg-blue-600 text-white p-5 m-6 rounded-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                mattis nunc commodo pharetra vel elit. Elementum enim, mollis id
                dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem
                feugiat lacus et se?
              </p>
            </div>

            <div className="flex gap-x-6 pt-4 border-t-2">
              <img src="/img/clip-icon.svg" alt="" />
              <input
                className="bg-gray-200 w-full rounded-xl border-none"
                type="text"
              />
              <img src="/img/send-message-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCO;
