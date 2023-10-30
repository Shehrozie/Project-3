/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

const NB = () => {
  return (
    <div>
      <div className="bg-white flex justify-between items-center">
        <div className="p-4">
          <img className="h-8" src="/img/logo.svg" alt="" />
        </div>
        <div className="pr-4">
          <Link href="/opportunities">
            <a className="text-blue-700" href="/">
              Exit & Continue Later
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NB;
