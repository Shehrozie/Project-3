/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import ForgotPassword from "./ChangePassword";

const LogIns = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex">
      {show && (
        <div className="bg-white absolute z-10 w-full h-screen">
          <ForgotPassword />
        </div>
      )}
      <div className="">
        <div className="pt-6 flex gap-y-12 flex-col justify-center items-center">
          <img src="/img/login-logo.svg" alt="" />
          <div className="flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-3xl">Log In</h1>
            <p className="text-gray-500">As Talent</p>
          </div>
        </div>
        <div className="pt-12 px-4 flex justify-center items-center">
          <p className="text-center text-gray-600">
            Welcome to recruitment SaaS platform that puts the candidates in the
            technological sector at the centre of the process and removes the
            need for a recruitment agent.
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
            <div className="h-12 flex flex-col">
              <label
                className="bg-white font-bold relative top-[20%] left-[12%] text-sm w-fit"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="rounded-lg py-3 mx-4"
                type="password"
                //   autoComplete="off"
                //   value={registerForm.email}
                //   onChange={handleInput}
                //   name="email"
                //   id="email"
              />
            </div>
            <br />
            <div className="mx-4 pt-6 flex justify-between">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" />
                <p className="lg:text-sm text-xs text-gray-700">Remember Me</p>
              </div>
              <div>
                <Link href="">
                  <p
                    className="cursor-pointer lg:text-sm text-xs text-gray-700"
                    onClick={() => setShow(!show)}
                  >
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </div>
            <br />
            <div className="mx-4 flex flex-col gap-y-4">
              <button className="bg-blue-700 p-4 rounded-md text-white">
                Log In
              </button>
              <button className="w-full p-4 text-gray-600">
                <Link href="/signups">Sign Up</Link>
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

export default LogIns;
