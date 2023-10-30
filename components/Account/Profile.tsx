/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import RichTextEditor from "../CreateNewOpportunity/RichTextEditor";
// import TextEditor from "./RTE";

const ProfileSetting = () => {
  const [show1, setShow1] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(true);
  const [show3, setShow3] = useState<boolean>(true);
  const [show4, setShow4] = useState<boolean>(true);
  const [show5, setShow5] = useState<boolean>(true);
  const [show6, setShow6] = useState<boolean>(true);

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="p-4 flex gap-y-4 flex-col justify-between items-center border-y-2">
        <h1 className="text-2xl">Company Information</h1>
        <form action="" className="w-full">
          <div className="w-full flex">
            <div className="px-4 w-full">
              <label
                className="bg-white px-1 relative -right-[4%] -bottom-[20%]"
                htmlFor=""
              >
                First Name
              </label>
              <input type="text" className="w-full rounded-md" />
            </div>
            <div className="w-full px-4">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[4%] -bottom-[20%]"
              >
                Last Name
              </label>
              <input type="text" className="w-full rounded-md" />
            </div>
          </div>

          <div className="w-full py-8 flex flex-col gap-y-4 items-center">
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[18%]"
              >
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded-md"
                // onClick={(event) => {
                //   e.preventDefault();
                // }}
              />
            </div>
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[14%]"
              >
                Company Size
              </label>
              <select name="" id="" className="w-full rounded-md">
                <option value="">1 - 10 employees</option>
                <option value="">11 - 24 employees</option>
                <option value="">26 - 50 employees</option>
                <option value="">51 - 100 employees</option>
                <option value="">100+ employees</option>
              </select>
            </div>
            <div className="w-full px-4 h-20">
              <label
                htmlFor=""
                className="bg-white px-1 relative -right-[2%] -bottom-[14%]"
              >
                Field Of Occupation
              </label>
              <select name="" id="" className="w-full rounded-md">
                <option value="">Web, Mobile & Software Development</option>
                <option value="">AI Development</option>
                <option value="">Digital Marketing</option>
                <option value="">Data Sciences</option>
                <option value="">Backend Development</option>
              </select>
            </div>
          </div>
          <div className="w-full px-4">
            <button className="bg-blue-700 w-full p-4 rounded-md my-2 text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="w-full p-4 flex gap-y-4 flex-col justify-between items-center border-b-2">
        <div className="w-full flex justify-evenly items-center">
          <p className="text-2xl">Company Location</p>
          <p className="text-blue-800">+ Add Another Company Location</p>
        </div>

        <form action="" className="w-full">
          <div className="w-full px-4 h-20">
            <label htmlFor="" className="bg-white relative top-[15%] left-[2%]">
              Company Location
            </label>
            <input type="text" className="w-full rounded-md" />
          </div>
          <div className="w-full px-4 flex items-center gap-x-8">
            <div className="w-1/4 h-20 flex flex-col">
              <label
                htmlFor=""
                className="bg-white w-fit relative top-[15%] -right-[8%]"
              >
                Postal Code
              </label>
              <input type="text" className="w-full rounded-md" />
            </div>
            <div className="w-full h-20">
              <label
                htmlFor=""
                className="bg-white w-fit relative top-[15%] -right-[4%]"
              >
                Address
              </label>
              <input type="text" className="w-full rounded-md" />
            </div>
            <div className="w-1/4">
              <button className="bg-blue-100 w-full p-1 pb-2 mt-1.5 rounded-md text-blue-700">
                Search
              </button>
            </div>
          </div>
          <div className="w-full text-center px-4">
            <button className="bg-blue-700 w-full p-4 rounded-md text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="w-full border-b-2 flex flex-col justify-center items-center gap-y-4">
        <div className="text-2xl pt-4">Office Work Hours Timezone</div>
        <form action="" className="w-full px-6">
          <div className="w-full h-20 flex flex-col">
            <label
              htmlFor=""
              className="bg-white w-fit relative top-[13%] -right-[2%]"
            >
              From Timezone
            </label>
            <select name="" id="" className="w-full rounded-md">
              <option value="">GMT + 1</option>
              <option value="">GMT + 2</option>
              <option value="">GMT + 3</option>
              <option value="">GMT + 4</option>
              <option value="">GMT + 5</option>
              <option value="">GMT + 6</option>
              <option value="">GMT + 7</option>
              <option value="">GMT + 8</option>
              <option value="">GMT + 9</option>
              <option value="">GMT + 10</option>
              <option value="">GMT + 11</option>
              <option value="">GMT + 12</option>
            </select>
          </div>
          <div className="w-full h-20 flex flex-col">
            <label
              htmlFor=""
              className="bg-white w-fit relative top-[13%] -right-[2%]"
            >
              To Timezone
            </label>
            <select name="" id="" className="w-full rounded-md">
              <option value="">GMT + 1</option>
              <option value="">GMT + 2</option>
              <option value="">GMT + 3</option>
              <option value="">GMT + 4</option>
              <option value="">GMT + 5</option>
              <option value="">GMT + 6</option>
              <option value="">GMT + 7</option>
              <option value="">GMT + 8</option>
              <option value="">GMT + 9</option>
              <option value="">GMT + 10</option>
              <option value="">GMT + 11</option>
              <option value="">GMT + 12</option>
            </select>
          </div>
          <div className="w-full text-center mb-8">
            <button className="bg-blue-700 w-full p-4 rounded-md text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="w-full border-b-2 px-8 py-6 flex flex-col justify-center items-center gap-y-4">
        <div className="w-full flex justify-between">
          <p className="text-3xl">About</p>
          <p className="text-blue-800">+ Upload New Photo</p>
        </div>
        <div className="">
          <div className="flex">
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-about.jpeg"
              alt=""
            />
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-about.jpeg"
              alt=""
            />
          </div>
          <div className="flex pt-4">
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-about.jpeg"
              alt=""
            />
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-about.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white border-2 border-black">
          {/* <TextEditor /> */}
        </div>
        <div className="w-full text-center mb-8">
          <button className="bg-blue-700 w-full p-4 rounded-md text-white">
            Save Changes
          </button>
        </div>
      </div>

      <div className="w-full border-b-2 px-8 py-6 flex flex-col justify-center items-center gap-y-4">
        <div className="w-full flex justify-between">
          <p className="text-3xl">Culture & Benefits</p>
          <p className="text-blue-800">+ Upload New Photo</p>
        </div>
        <div className="">
          <div className="flex">
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-benefits.jpg"
              alt=""
            />
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-benefits.jpg"
              alt=""
            />
          </div>
          <div className="flex pt-4">
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-benefits.jpg"
              alt=""
            />
            <img
              className="w-1/2 px-2 hover:opacity-50"
              src="/img/profile-benefits.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white border-2 border-black">
          {/* <TextEditor /> */}
        </div>
        <div className="w-full text-center mb-8">
          <button className="bg-blue-700 w-full p-4 rounded-md text-white">
            Save Changes
          </button>
        </div>
      </div>

      <div className="w-full border-b-2 px-8 py-6 flex flex-col justify-center items-center gap-y-4">
        <div className="w-full flex justify-between">
          <p className="text-3xl">Technologies Used</p>
          <p className="text-blue-800">+ Add New Technology</p>
        </div>
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
        <div className="w-full text-center mb-8">
          <button className="bg-blue-700 w-full p-4 rounded-md text-white">
            Save Changes
          </button>
        </div>
      </div>

      <div className="w-full px-8 py-6 flex flex-col gap-y-4">
        <div className="font-bold text-3xl">Social Media</div>
        <div className="w-full">
          <form action="" className="w-full">
            <div className="w-full h-20">
              <label
                htmlFor=""
                className="bg-white relative top-[15%] left-[3%]"
              >
                Website
              </label>
              <input
                type="text"
                placeholder="www.pixelsandgraphs.com"
                className="w-full rounded-md"
              />
            </div>
            <div className="w-full h-20">
              <label
                htmlFor=""
                className="bg-white relative top-[15%] left-[3%]"
              >
                LinkedIn
              </label>
              <input
                type="text"
                placeholder="www.linkedin.com/pixelsandgraphs"
                className="w-full rounded-md"
              />
            </div>
            <div className="w-full h-20">
              <label
                htmlFor=""
                className="bg-white relative top-[15%] left-[3%]"
              >
                Facebook
              </label>
              <input
                type="text"
                placeholder="www.facebook.com/pixelsandgraphs"
                className="w-full rounded-md"
              />
            </div>
            <div className="w-full h-20">
              <label
                htmlFor=""
                className="bg-white relative top-[15%] left-[3%]"
              >
                Instagram
              </label>
              <input
                type="text"
                placeholder="www.instagram.com/pixelsandgraphs"
                className="w-full rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="w-full text-center mb-8">
          <button className="bg-blue-700 w-full p-4 rounded-md text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
