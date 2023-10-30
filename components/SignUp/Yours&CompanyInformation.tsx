/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import InitiateChat from "../Home/InitiateChat";
import * as Icons from "@/components/Icons";
import cn from "classnames";

const YACI = () => {
  const [showProfileDetail, setShowProfileDetail] = useState<boolean>(false);
  return (
    <>
      <div className="h-full w-full p-4 flex">
        <div className="md:w-[65%] w-full">
          <h1 className="text-3xl">Confirm Your Email Address</h1>
          <form action="" className="pt-4 flex flex-col gap-y-8">
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor="FN"
              >
                First Name
              </label>
              <input className="rounded-lg py-3 mr-8" type="text" />
            </div>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor="LN"
              >
                Last Name
              </label>
              <input className="rounded-lg py-3 mr-8" type="text" />
            </div>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor="CN"
              >
                Company Name
              </label>
              <input className="rounded-lg py-3 mr-8" type="text" />
            </div>
            <div className="h-12 flex flex-col">
              <label
                htmlFor=""
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
              >
                Company Size
              </label>
              <select name="" id="" className="rounded-lg py-3 mr-8">
                <option value="">Please Select</option>
                <option value="">1 - 10 employees</option>
                <option value="">26 - 50 employees</option>
                <option value="">51 - 100+ employees</option>
              </select>
            </div>
            <div className="h-12 flex flex-col">
              <label
                htmlFor=""
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
              >
                Company Location
              </label>
              <select name="" id="" className="rounded-lg py-3 mr-8">
                <option value="">Please Select</option>
                <option value="">United States</option>
                <option value="">United Kingdom</option>
              </select>
            </div>
            <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-x-2">
              <div className="w-1/2 h-20 flex flex-col">
                <label
                  htmlFor=""
                  className="bg-white w-fit relative top-[15%] -right-[8%] text-sm"
                >
                  Postal Code
                </label>
                <input type="text" className="w-full rounded-md" />
              </div>
              <div className="w-full h-20">
                <label
                  htmlFor=""
                  className="bg-white text-sm w-fit relative top-[15%] -right-[4%]"
                >
                  Address
                </label>
                <input type="text" className="w-full rounded-md" />
              </div>
              <div className="w-1/4 mr-8">
                <button className="bg-blue-100 w-full p-1 pb-2 pt-1.5 rounded-md text-blue-700">
                  Search
                </button>
              </div>
            </div>
            <button
              type="button"
              className="mr-8 rounded-xl text-blue-700 cursor-pointer"
            >
              + Add Another Company Location
            </button>
          </form>
          <form action="" className="pt-4 flex flex-col gap-y-8">
            <h1 className="text-3xl">Social Media (optional)</h1>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor=""
              >
                WEBSITE
              </label>
              <input
                className="rounded-lg py-3 mr-8"
                type="text"
                placeholder="https://"
              />
            </div>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor=""
              >
                LINKEDIN
              </label>
              <input
                className="rounded-lg py-3 mr-8"
                type="text"
                placeholder="https://"
              />
            </div>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor=""
              >
                FACEBOOK
              </label>
              <input
                className="rounded-lg py-3 mr-8"
                type="text"
                placeholder="https://"
              />
            </div>
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[6%] text-sm w-fit"
                htmlFor=""
              >
                INSTAGRAM
              </label>
              <input
                className="rounded-lg py-3 mr-8"
                type="text"
                placeholder="https://"
              />
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="md:block hidden">
          <InitiateChat showProfileDetails={() => setShowProfileDetail(true)} />
        </div>
      </div>
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

          <div className="h-fit py-8 flex justify-between flex-col gap-y-8 overflow-y-scroll">
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
    </>
  );
};

export default YACI;
