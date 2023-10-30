/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import MessageBar from "./MessageBar";
import MessageBar1 from "./MessageBar1";
import MessageBar2 from "./MessageBar2";
import MessageBar3 from "./MessageBar3";
import MessageBar4 from "./MessageBar4";
import MessageBar5 from "./MessageBar5";

const ResponsiveChatUser = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  return (
    <div>
      {show && (
        <div className="absolute h-screen w-full">
          <MessageBar />
        </div>
      )}
      {show1 && (
        <div className="absolute h-screen w-full">
          <MessageBar1 />
        </div>
      )}
      {show2 && (
        <div className="absolute h-screen w-full">
          <MessageBar2 />
        </div>
      )}
      {show3 && (
        <div className="absolute h-screen w-full">
          <MessageBar3 />
        </div>
      )}
      {show4 && (
        <div className="absolute h-screen w-full">
          <MessageBar4 />
        </div>
      )}
      {show5 && (
        <div className="absolute h-screen w-full">
          <MessageBar5 />
        </div>
      )}
      <div className="flex w-full">
        <div className="bg-white flex flex-col w-full border-2 overflow-y-scroll h-screen">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="border-x-0 w-full"
            />
          </form>
          {/* ChatUser 1 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img.png" alt="" />
                <div className="">Waleed Ali Khan</div>
              </div>

              <div>30 Min Ago</div>
            </div>

            <p>
              Hello I was just wondering how we could handle this transfer from
              Germany to...
            </p>
          </div>
          {/* ChatUser 1 End Here */}

          {/* ChatUser 2 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow1(!show1)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img1.png" alt="" />
                <div>Jim Halpert</div>
              </div>

              <div>1H Ago</div>
            </div>

            <p>
              The problem we are facing is beyond you and me. We should hire
              someone else...
            </p>
          </div>
          {/* ChatUser 2 End Here */}

          {/* ChatUser 3 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow2(!show2)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img2.png" alt="" />
                <div>Angelena Martin</div>
              </div>

              <div>2 Days Ago</div>
            </div>

            <p>
              Thank you so much for everything, it was amazing and I really
              liked it.
            </p>
          </div>
          {/* ChatUser 3 End Here */}

          {/* ChatUser 4 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow3(!show3)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img3.png" alt="" />
                <div>Ryan Howard</div>
              </div>

              <div>3 Days Ago</div>
            </div>

            <p>
              No, I only work Remotely. But however if job is good I am more
              than happy to work...
            </p>
          </div>
          {/* ChatUser 4 End Here */}

          {/* ChatUser 5 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow4(!show4)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/chat-initiater.png" alt="" />
                <div>Erin Hannon</div>
              </div>

              <div>14/08/2019</div>
            </div>

            <p>
              Oh my, I just hope we can get this right, unless we can try to
              search for some so...
            </p>
          </div>
          {/* ChatUser 5 End Here */}

          {/* ChatUser 6 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow5(!show5)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/images.png" alt="" />
                <div>Dwight Schrute</div>
              </div>

              <div>05/08/2019</div>
            </div>

            <p>
              I really liked this amazing work that you just delivered,
              fantastic!
            </p>
          </div>
          {/* ChatUser 6 End Here */}

          {/* ChatUser 7 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img.png" alt="" />
                <div>Waleed Ali Khan</div>
              </div>

              <div>30 Min Ago</div>
            </div>

            <p>
              Hello I was just wondering how we could handle this transfer from
              Germany to...
            </p>
          </div>
          {/* ChatUser 7 End Here */}

          {/* ChatUser 8 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow1(!show1)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img1.png" alt="" />
                <div>Jim Halpert</div>
              </div>

              <div>1H Ago</div>
            </div>

            <p>
              The problem we are facing is beyond you and me. We should hire
              someone else...
            </p>
          </div>
          {/* ChatUser 8 End Here */}

          {/* ChatUser 9 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow2(!show2)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img2.png" alt="" />
                <div>Angelena Martin</div>
              </div>

              <div>2 Days Ago</div>
            </div>

            <p>
              Thank you so much for everything, it was amazing and I really
              liked it.
            </p>
          </div>
          {/* ChatUser 9 End Here */}

          {/* ChatUser 10 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow3(!show3)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/profile_img3.png" alt="" />
                <div>Ryan Howard</div>
              </div>

              <div>3 Days Ago</div>
            </div>

            <p>
              No, I only work Remotely. But however if job is good I am more
              than happy to work...
            </p>
          </div>
          {/* ChatUser 10 End Here */}

          {/* ChatUser 11 Start Here */}
          <div
            className="p-5 flex flex-col gap-y-2 border-2 cursor-pointer"
            onClick={() => setShow4(!show4)}
          >
            <div className="flex justify-between items-center 2xl:flex-row flex-col">
              <div className="flex items-center gap-4 xl:flex-row flex-col">
                <img className="h-12" src="/img/chat-initiater.png" alt="" />
                <div>Erin Hannon</div>
              </div>

              <div>14/08/2019</div>
            </div>

            <p>
              Oh my, I just hope we can get this right, unless we can try to
              search for some so...
            </p>
          </div>
          {/* ChatUser 11 End Here */}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveChatUser;
