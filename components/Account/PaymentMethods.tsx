/* eslint-disable @next/next/no-img-element */
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="w-full p-4 flex gap-y-4 flex-col items-center border-y-2">
      <h1>Payment Methods</h1>
      <div className="bg-white p-4 rounded-md w-full flex gap-10 shadow-2xl">
        <div className="flex flex-col gap-y-4 w-full">
          <div className="flex gap-x-6 items-center">
            <input type="radio" name="select" className="p-2 rounded-full" />
            <div className="p-4 bg-white shadow-2xl w-fit">
              <img src="/img/method-1.png" alt="" />
            </div>
            <p>1234 - 5678 - 1234 - 4541</p>
          </div>
          <div className="flex gap-x-6 items-center">
            <input type="radio" name="select" className="p-2 rounded-full" />
            <div className="p-4 bg-white shadow-2xl w-fit">
              <img src="/img/method-2.png" alt="" />
            </div>
            <p>1234 - 5678 - 1234 - 4242</p>
          </div>
          <div className="flex gap-x-6 items-center">
            <input type="radio" name="select" className="p-2 rounded-full" />
            <div className="p-4 bg-white shadow-2xl w-fit">
              <img src="/img/method-3.png" alt="" />
            </div>
            <p>1234 - 5678 - 1234 - 1337</p>
          </div>
          <div className="flex gap-x-6 items-center">
            <input type="radio" name="select" className="p-2 rounded-full" />
            <div className="p-4 bg-white shadow-2xl w-fit">
              <img src="/img/method-3.png" alt="" />
            </div>
            <p>1234 - 5678 - 1234 - 2455</p>
          </div>
        </div>
        <div className="lg:w-fit w-full h-full flex flex-col gap-y-4">
          <div className="text-blue-700 w-full flex justify-end">
            + Add A New Card
          </div>
          <div className="flex flex-col justify-around lg:w-[20rem] w-full h-full bg-[url('/img/credit-card-bg.svg')] bg-no-repeat bg-contain bg-center">
            <div className="flex justify-end">
              <img
                src="/img/method-1.png"
                alt=""
                className="pr-12 lg:pt-0 md:pt-4 pt-0"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-center text-white">
                <p>1234 - 5678 - 1234 - 4541</p>
              </div>
              <div className="flex justify-around pt-2">
                <p className="text-white">Waleed Ali</p>
                <p className="text-white">11/21</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-red-700 lg:text-base md:text-sm">
              Remove This Card
            </p>
            <p className="text-gray-600 lg:text-base md:text-sm">
              Edit Card Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
