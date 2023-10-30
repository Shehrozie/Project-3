import React, { useEffect, useRef, useState } from "react";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ImageIcon from "@mui/icons-material/Image";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "./Popup";
import ResPopup from "./ResponsivePopup";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EventIcon from "@mui/icons-material/Event";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import CloseIcon from "@mui/icons-material/Close";
// import ImageIcon from "@mui/icons-material/Image";
// import CloseIcon from '@mui/icons-material/Close';

const SecondDropdownMenuForReact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal2, setModal2] = useState(true);
  const [screenProtector, setScreenProtector] = useState(false);
  const [giftPackaging, setGiftPackaging] = useState(false);
  const [noThanks, setNoThanks] = useState(true);
  const [FPUPP, setFPUP] = useState(true);
  const [button, setButton] = useState(false);
  const [buttonText, setButtonText] = useState("Softcase");
  const [buttonDollars, setButtonDollars] = useState("$14.95");
  const [upDownArrow, setUpDownArrow] = useState(false);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("iphoneones.png");
  const [imgTwo, setImgTwo] = useState("screenprotectorr.jpg");
  // const [modal, setModal] = useState(false);
  // const [modal2, setModal2] = useState(false);

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  function handleClickOne() {
    setButtonText("Softcase");
    setButtonDollars("$14.95");
  }
  function handleClickTwo() {
    setButtonText("Heavy Duty Case");
    setButtonDollars("$24.95");
  }
  function handleClickThree() {
    setButtonText("Wallet Case");
    setButtonDollars("$20.95");
  }
  function handleClickFour() {
    setButtonText("Crossbody Case");
    setButtonDollars("$21.95");
  }

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

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full" ref={menuRef}>
      {!modal2 ? (
        <div className="modal h-full w-full">
          {/* <div onClick={toggleModal} className="overlay"></div> */}
          <div className="modal-content2">
            <div className="flex justify-between py-4">
              <h1 className="font-bold">Support</h1>
              <button
                className="close-modal bg-slate-300 rounded-full p-1.5"
                onClick={toggleModal}
              >
                <CloseIcon />
              </button>
            </div>
            <form action="" className="flex flex-col gap-y-10 py-4">
              <div className="w-full">
                <label htmlFor="">Your First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">Your Order Name</label>
                <input
                  type="text"
                  placeholder="Order Name"
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">Your Email</label>
                <input
                  type="text"
                  placeholder="Name@gmail.com"
                  className="w-full rounded-md"
                />
              </div>
              <div className="w-full">
                <input
                  type="submit"
                  className="text-white bg-slate-700 px-6 py-4 float-right rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <button className="w-1/2 flex" onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen ? (
          <div className="bg-orange-500 text-white font-bold text-lg px-2 py-2 rounded-md">
            <SettingsIcon />
          </div>
        ) : (
          <div className="bg-black text-white font-bold text-lg px-2 py-2 rounded-md">
            <div className="relative text-white z-50">
              <CloseIcon />
            </div>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute z-20 right-[0%] mt-4 w-[100%]">
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
            className="bg-black opacity-70 absolute h-[710%] w-[1000%] -left-96 z-0"
          ></div>
        </div>
      )}
    </div>
  );
};

export default SecondDropdownMenuForReact;
function handler(this: Document, ev: MouseEvent) {
  throw new Error("Function not implemented.");
}
