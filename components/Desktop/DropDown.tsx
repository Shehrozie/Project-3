import React, { useEffect, useRef, useState } from "react";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ImageIcon from "@mui/icons-material/Image";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const FirstDropdownMenuForReact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal2, setModal2] = useState(true);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="w-full" ref={menuRef}>
      {!modal2 ? (
        <div className="w-full h-full absolute text-center flex justify-center">
          <div className="bg-white text-black relative z-30 w-fit h-fit flex flex-col py-4 px-6 rounded-xl">
            <div className="flex w-full justify-end">
              <div className="w-fit bg-slate-200 p-1.5 rounded-full">
                <CloseIcon onClick={() => setModal2(true)} />
              </div>
            </div>
            <div>
              <div className="rounded-full w-full flex justify-center">
                <div className="bg-orange-500 w-fit p-2.5 rounded-xl text-white">
                  <ReportGmailerrorredIcon />
                </div>
              </div>
              <div className="text-xl font-bold py-4">Notification Message</div>
              <div className="font-bold text-gray-500">
                The softcase is made of soft and <br /> slim material. Your
                design will be <br /> printed on the back, on a <br /> softcase
                with transparent edges.
              </div>
              <div
                onClick={() => setModal2(true)}
                className="bg-orange-500 w-full mt-6 p-2.5 rounded-md text-white font-bold"
              >
                PROCEED
              </div>
            </div>
          </div>
          <div className="w-[1000%] h-[1000%] absolute bg-black opacity-30 text-center -left-[100%] -bottom-[100%]"></div>
        </div>
      ) : null}

      <button className="w-1/2 flex" onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen ? (
          <div className="bg-orange-500 text-white font-bold text-lg px-12 py-2 rounded-md">
            Edit
          </div>
        ) : (
          <div className="bg-black text-white font-bold text-lg px-12 py-2 rounded-md">
            <div className="relative text-white z-50">Close</div>
          </div>
        )}
      </button>

      {isOpen && (
        <div className=" absolute z-20 mt-4 w-[24%]">
          <div className="bg-gray-100 border-2 rounded relative z-40">
            <div
              className="py-3 hover:bg-slate-300 font-bold text-left"
              onClick={() => setIsOpen(false)}
            >
              <CleaningServicesIcon className="text-red-600 mx-4" />
              Reset Design
            </div>
            <div
              className="py-3 hover:bg-slate-300 font-bold border-t-2 text-left"
              onClick={() => setIsOpen(false)}
            >
              <ImageIcon className="mx-4" />
              Upload Image
            </div>
            <div onClick={() => setModal2((prev) => !prev)}>
              <div
                className="py-3 hover:bg-slate-300 font-bold border-t-2 text-left"
                onClick={() => setIsOpen(false)}
              >
                <HeadsetMicIcon className="mx-4" />
                Support
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="bg-black opacity-70 absolute h-[2000%] w-[2000%] -left-96 -top-96 z-0"
          ></div>
        </div>
      )}
    </div>
  );
};

export default FirstDropdownMenuForReact;
function handler(this: Document, ev: MouseEvent) {
  throw new Error("Function not implemented.");
}
