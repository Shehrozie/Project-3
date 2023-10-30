/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import LogIns from "./LogIn";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white flex h-[110%]">
      {show && (
        <div className="absolute w-full h-screen">
          <LogIns />
        </div>
      )}
      <div className="">
        <div className="pt-6 flex gap-y-12 flex-col justify-center items-center">
          <img src="/img/login-logo.svg" alt="" />
          <div className="flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-3xl">Forgot Password</h1>
          </div>
        </div>
        <div className="pt-12 px-4 flex justify-center items-center">
          <p className="text-center text-gray-600">
            In order to reset your password. Please type in your E-Mail Address
            down below so we can send you a link to reset your password.
          </p>
        </div>
        <div className="w-full pt-8 flex flex-col">
          <form action="" className="flex flex-col">
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[12%] text-sm w-fit"
                htmlFor="Email"
              >
                E-Mail Address
              </label>
              <input
                className="rounded-lg py-3 mx-4"
                type="text"
                //   autoComplete="off"
                //   value={registerForm.email}
                //   onChange={handleInput}
                //   name="email"
                //   id="email"
              />
            </div>
            <br />
            <br />
            <div className="mx-4 flex flex-col gap-y-4">
              <button className="bg-blue-700 p-4 rounded-md text-white">
                Send Password To Reset
              </button>
              <button className="w-full p-4 text-gray-600">
                Back To Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <img
        src="/img/login-banner.png"
        className="w-[70%] md:block hidden"
        alt=""
      />
    </div>
  );
};

export default ForgotPassword;
