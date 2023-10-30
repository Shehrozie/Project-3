/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import InitiateChat from "./InitiateChat";
import DropDownMS from "./DropDownMultiSelect";
import cn from "classnames";
import * as Icons from "@/components/Icons";
import Link from "next/link";
import RichTextEditorr from "./RichTextEditor";

const CategoryCO = () => {
  const [show1, setShow1] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(true);
  const [show3, setShow3] = useState<boolean>(true);
  const [show4, setShow4] = useState<boolean>(true);
  const [show5, setShow5] = useState<boolean>(true);
  const [show6, setShow6] = useState<boolean>(true);
  const [show7, setShow7] = useState<boolean>(true);
  const [show8, setShow8] = useState<boolean>(true);
  const [show9, setShow9] = useState<boolean>(true);
  const [show10, setShow10] = useState<boolean>(true);
  const [show11, setShow11] = useState<boolean>(true);
  const [show12, setShow12] = useState<boolean>(true);

  const [showProfileDetail, setShowProfileDetail] = useState<boolean>(false);
  return (
    <div className="w-full h-full pt-8 overflow-y-auto no-scrollbar flex justify-between">
      <form className="w-full px-4 flex flex-col" action="" method="post">
        <h1 className="font-bold text-3xl py-4">Opportunity Category</h1>
        <p className="text-gray-500 pb-6">
          Please Select Wanted Opportunity Category
        </p>
        <div className="w-full h-full flex">
          <div className="flex flex-col w-full">
            <label htmlFor="">Opportunity Category</label>
            <select name="" id="" className="rounded-md">
              <option value="" className="text-gray-500">
                Please Select
              </option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
              <option value="">Category 4</option>
            </select>
          </div>
          <div className="flex flex-col pl-4">
            <h1>60-80</h1>
            <p>Possible</p>
            <p>Candidates</p>
          </div>
        </div>
        <h1 className="font-bold text-3xl py-4">Required Skills</h1>
        <p className="text-gray-500 pb-6">
          Please select up to 10 Skills which are going to reflect the
          opportunity requirements
        </p>
        <div className="w-full h-full">
          <div className="w-full flex flex-wrap gap-8">
            {show1 && (
              <div className="bg-blue-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>HTML</p>
                <p
                  onClick={() => setShow1(!show1)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show2 && (
              <div className="bg-orange-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>CSS</p>
                <p
                  onClick={() => setShow2(!show2)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show3 && (
              <div className="bg-red-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: Angular</p>
                <p
                  onClick={() => setShow3(!show3)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show4 && (
              <div className="bg-green-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: React</p>
                <p
                  onClick={() => setShow4(!show4)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show5 && (
              <div className="bg-yellow-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>Ruby</p>
                <p
                  onClick={() => setShow5(!show5)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show6 && (
              <div className="bg-purple-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: NodeJS</p>
                <p
                  onClick={() => setShow6(!show6)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full text-center my-8">
          <button className="bg-blue-700 w-full p-4 rounded-md text-white">
            + Add New Skill
          </button>
        </div>
        <h1 className="font-bold text-3xl py-4">Bonus Skills</h1>
        <p className="text-gray-500 pb-6">
          Please select up to 10 Skills which are going to reflect the
          opportunity requirments.
        </p>
        <div className="w-full h-full">
          <div className="w-full flex flex-wrap gap-8">
            {show7 && (
              <div className="bg-blue-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>HTML</p>
                <p
                  onClick={() => setShow7(!show7)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show8 && (
              <div className="bg-orange-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>CSS</p>
                <p
                  onClick={() => setShow8(!show8)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show9 && (
              <div className="bg-red-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: Angular</p>
                <p
                  onClick={() => setShow9(!show9)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show10 && (
              <div className="bg-green-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: React</p>
                <p
                  onClick={() => setShow10(!show10)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show11 && (
              <div className="bg-yellow-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>Ruby</p>
                <p
                  onClick={() => setShow11(!show11)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
            {show12 && (
              <div className="bg-purple-300 w-fit px-4 rounded-md flex items-center gap-x-4 cursor-pointer">
                <p>JavaScript: NodeJS</p>
                <p
                  onClick={() => setShow12(!show12)}
                  className="text-3xl font-thin"
                >
                  x
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full text-center my-8">
          <button className="bg-blue-700 w-full mb-8 p-4 rounded-md text-white">
            + Add New Bonus Skill
          </button>
        </div>
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

export default CategoryCO;
