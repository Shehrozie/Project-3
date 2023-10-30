/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ProfileDetail from "./ProfileDetail";
import ResponsiveChatUser from "./ResponseChatUsers";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MessageBar = () => {
  const [userDetail, setUserDetail] = useState(false);
  const [show, setShow] = useState(false);

  const [submit, setSubmit] = useState("");
  const [items, setItems] = useState([]);

  const message = (event) => {
    event.preventDefault();
    setSubmit(event.target.value);
  };
  const itemOfLists = () => {
    setItems((oldItems) => {
      return [...oldItems, submit];
    });
    setSubmit("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white w-full h-screen flex flex-col justify-between">
      {show && (
        <div className="absolute w-full h-screen">
          <ResponsiveChatUser />
        </div>
      )}
      {userDetail && (
        <div className="absolute w-full h-screen">
          <ProfileDetail />
        </div>
      )}
      <div className="flex items-center justify-between border-2 w-full">
        <div className="ml-4 flex items-center justify-center gap-x-6">
          <div
            onClick={() => setShow(!show)}
            className="cursor-pointer lg:hidden block"
          >
            <ArrowBackIosIcon />
          </div>
          <img className="h-20" src="/img/profile_img.png" alt="" />
          <div>
            <h1 className="font-bold text-2xl">Waleed Ali Khan</h1>
            <p className="text-blue-700">Front-End Developer</p>
          </div>
        </div>
        <div>
          <div
            className="text-4xl mr-8 cursor-pointer lg:hidden block"
            onClick={() => setUserDetail(!userDetail)}
          >
            ...
          </div>
        </div>
      </div>

      {/* Message Bar */}
      <div className="px-20 overflow-y-scroll h-[80%]">
        <div className="bg-gray-300 my-8 p-8 rounded-2xl">
          <img className="h-20" src="/img/profile_img.png" alt="" />
          <p className="">
            Lorem ipsum dolor sit amet, cum ex delectus moderatius, sit in
            semper maluisset. Sea ea mandamus expetendis, eam cu purto
            scriptorem. Sed augue disputationi ex. Pro illum oportere imperdiet
            ne, per solum iuvaret nominavi te. Eros semper scripserit id mei,
            duo ut omittam tincidunt.Mea quot autem democritum ea, mel vero cibo
            dolores id. Est te verear discere facilis, legimus mediocrem ei duo.
            Dolorum delicata principes pro te, mea tritani perfecto ne. Discere
            electram te eos. Usu eu ponderum vivendum. Ex sed solum molestie,
            usu alii vidisse dolorem ei.
          </p>
        </div>

        <div className="bg-gray-300 my-8 p-8 rounded-2xl">
          <img className="h-20" src="/img/profile_img.png" alt="" />
          <p className="">
            Lorem ipsum dolor sit amet, cum ex delectus moderatius, sit in
            semper maluisset. Sea ea mandamus expetendis, eam cu purto
            scriptorem. Sed augue disputationi ex. Pro illum oportere imperdiet
            ne, per solum iuvaret nominavi te. Eros semper scripserit id mei,
            duo ut omittam tincidunt.Mea quot autem democritum ea, mel vero cibo
            dolores id. Est te verear discere facilis, legimus mediocrem ei duo.
            Dolorum delicata principes pro te, mea tritani perfecto ne. Discere
            electram te eos. Usu eu ponderum vivendum. Ex sed solum molestie,
            usu alii vidisse dolorem ei.
          </p>
        </div>

        <div className="bg-blue-300 my-8 p-8 rounded-2xl">
          <p className="">
            That sounds amazing, I would would be more then avaible to get in
            touch as soon is possible, let me know as soon as you can and lets
            work as soon is!
          </p>
          <div className="flex justify-end">
            <img className="h-20" src="/img/profile_img1.png" alt="" />
          </div>
        </div>

        <div>
          {items.map((itemval) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="bg-blue-300 my-8 p-8 rounded-2xl">
                <p className="">{itemval}</p>
                <div className="flex justify-end">
                  <img className="h-20" src="/img/profile_img1.png" alt="" />
                </div>
              </div>
            );
          })}
        </div>
        {/* Message Bar */}
      </div>

      <div className="mb-6 flex items-center justify-evenly">
        <img src="/img/clip-icon.svg" alt="" className="mx-6" />
        <form action="" className="w-full flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full rounded-xl"
            value={submit}
            onChange={message}
          />
          <button onClick={itemOfLists} className="mx-6">
            <img src="/img/send-message-icon.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageBar;

// className="h-20 absolute top-[49%] left-[18%]"
