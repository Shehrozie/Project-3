/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import InitiateChat from "../Home/InitiateChat";
import * as Icons from "@/components/Icons";
import cn from "classnames";
import Link from "next/link";

const Congratulations = () => {
  return (
    <div className="bg-white absolute w-full h-screen z-20 border-t-2 flex flex-col justify-between">
      <div className="w-full p-6 flex">
        <div className="md:w-[65%] w-full flex flex-col gap-y-12">
          <h1 className="text-4xl">You've submitted your Company Profile</h1>
          <p className="text-2xl">
            Good luck and we hope you find a perfect Candidate for your
            business!
          </p>
          <p className="text-slate-700">
            <b className="font-black text-xl text-slate-700">Attention:</b> You
            have to Review every Application and you have 7 days to respond to
            it. By Reviweing you need to Approve or Reject wanted Applicant. If
            you Approve Applicant, you both are going into Chat. If you Reject
            it, you have to writte a short reason why you are rejecting the
            Applicant.
          </p>
          <p className="text-slate-700">
            As soon Candidate applies, the Applicant will appear under
            ‘Applicants’ page where you can Review them
          </p>
        </div>
        <div className="md:block hidden">
          <img src="/img/success-vector.svg" alt="" />
        </div>
      </div>
      <div className="h-[30%] flex flex-col justify-between border-y-2">
        <div className="bg-white p-4 w-full">
          <div className="flex justify-around">
            <Link href="/">
              <button
                type="button"
                className="bg-blue-600 px-8 py-4 rounded-xl text-white cursor-pointer"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
