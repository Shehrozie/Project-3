/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SecondDropdownMenuForReact from "./DropDownTwo";
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

const MobileResponsive = () => {
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
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between bg-white">
      <div className="w-full bg-slate-300 py-4 px-2 flex items-center justify-between">
        <div className="font-bold w-full">Samsung Galaxy S21 Ultra</div>
        <div className="flex justify-end items-center gap-x-2 w-full">
          <div className="">
            <SecondDropdownMenuForReact />
          </div>
          <div onClick={() => setUpDownArrow((prev) => !prev)} className="">
            {!upDownArrow ? (
              <button
                onClick={() => setShow((prev) => !prev)}
                className="border-orange-500 border-2 bg-white text-orange-500 font-bold text-lg px-4 py-2 rounded-md flex justify-between gap-x-2 h-fit"
              >
                <p id="changeText" className="">
                  {buttonText}
                </p>

                <div className="">
                  <KeyboardArrowDownIcon className="" />
                </div>
              </button>
            ) : (
              <button
                onClick={() => setShow((prev) => !prev)}
                className="border-black border-2 bg-black text-white font-bold text-lg px-4 py-2 rounded-md flex justify-between gap-x-2 h-fit"
              >
                <p id="changeText">{buttonText}</p>
                <div className="flex items-end justify-between gap-x-2">
                  {/* <p>{buttonDollars}</p> */}
                  <div className="">
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
              </button>
            )}
          </div>
          {show && (
            <div onClick={() => setUpDownArrow(false)}>
              <div className="bg-gray-100 h-full w-full z-10 absolute left-0 bottom-0 overflow-y-scroll flex flex-col gap-y-2 justify-between">
                <div onClick={handleClickOne} className="h-full">
                  <div
                    onClick={() => setImg("iphoneones.png")}
                    className="h-full"
                  >
                    <div
                      onClick={() => setShow(false)}
                      className="flex h-full border-2 border-orange-500 rounded-xl w-full py-1"
                    >
                      <img
                        className="h-32 rounded-xl"
                        src="softcase.jpeg"
                        alt=""
                      />
                      <div className="flex flex-col px-2">
                        <div className="flex justify-between">
                          <div className="text-2xl font-bold text-black">
                            Softcase
                          </div>
                          <div className="text-2xl font-bold text-orange-500">
                            $14.95
                          </div>
                        </div>
                        <div className="px-2 font-bold text-gray-500">
                          De softcase is gemaakt van zacht/flexibel material,
                          waardoor het hoesje een goede bescherming biedt zonder
                          je telefoon veel dikker te maken.
                        </div>
                        <div className="text-right pr-10">
                          <EventIcon className="text-red-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={handleClickTwo} className="h-full">
                  <div
                    onClick={() => setImg("iphonetwos.png")}
                    className="h-full"
                  >
                    <div
                      onClick={() => setShow(false)}
                      className="flex h-full border-2 border-orange-500 rounded-xl w-full py-2"
                    >
                      <img
                        className="h-32 rounded-xl"
                        src="heavydutycase.jpeg"
                        alt=""
                      />
                      <div className="flex flex-col px-2">
                        <div className="flex justify-between">
                          <div className="text-2xl font-bold text-black">
                            Heavy duty case
                          </div>
                          <div className="text-2xl font-bold text-orange-500">
                            $24.95
                          </div>
                        </div>
                        <div className="px-2 font-bold text-gray-500 text-sm">
                          De heavy duty case bestaat uit 2 delen, een harde
                          buitenkant en een zachte binnenkant om jouw telefoon
                          extra te beschermen. Jouw ontwerp zal volledig rondom
                          bedrukt worden, inclusief de zijkanten van de case.
                        </div>
                        <div className="text-right pr-10">
                          <EventIcon className="text-red-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={handleClickThree} className="h-full">
                  <div
                    onClick={() => setImg("iphonethrees.png")}
                    className="h-full"
                  >
                    <div
                      onClick={() => setShow(false)}
                      className="flex h-full border-2 border-orange-500 rounded-xl w-full py-1"
                    >
                      <img
                        className="h-32 rounded-xl"
                        src="walletcase-small.jpeg"
                        alt=""
                      />
                      <div className="flex flex-col px-2">
                        <div className="flex justify-between">
                          <div className="text-2xl font-bold text-black">
                            Wallet case
                          </div>
                          <div className="text-2xl font-bold text-orange-500">
                            $20.95
                          </div>
                        </div>
                        <div className="px-2 font-bold text-gray-500">
                          De wallet case kan op de voorkant en achterkant
                          bedrukt worden met jouw ontwerp. Aan de binnenkant heb
                          je ruimte voor 2 pasjes.
                        </div>
                        <div className="text-right pr-10">
                          <EventIcon className="text-red-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={handleClickFour} className="h-full">
                  <div
                    onClick={() => setImg("iphonefours.png")}
                    className="h-full"
                  >
                    <div
                      onClick={() => setShow(false)}
                      className="flex h-full border-2 border-orange-500 rounded-xl w-full py-1"
                    >
                      <img
                        className="h-32 rounded-xl"
                        src="crossbody-case.jpeg"
                        alt=""
                      />
                      <div className="flex flex-col px-2">
                        <div className="flex justify-between">
                          <div className="text-2xl font-bold text-black">
                            Crossbody case
                          </div>
                          <div className="text-2xl font-bold text-orange-500">
                            $21.95
                          </div>
                        </div>
                        <div className="px-2 font-bold text-gray-500">
                          De Crossbody case is een telefoonhoesje met koord,
                          zodat je je telefoon altijd gemakkelijk kunt meenemen.
                        </div>
                        <div className="text-right pr-10">
                          <EventIcon className="text-red-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex bg-white w-full h-[80%] justify-center items-center">
        <div className="w-full h-[80%] flex justify-center items-center">
          <div className=" h-[80%]">
            <img
              src={img}
              className="w-fit  h-[80%] flex justify-center items-center text-center"
              alt=""
            />
          </div>
        </div>
      </div>
      {!button ? (
        <div onClick={() => setButton((prev) => !prev)}>
          <div className="px-4">
            <button className="bg-orange-500 text-white text-xl font-bold w-full p-4 rounded-xl">
              <ImageIcon className="float-left" />
              Upload Image
            </button>
          </div>
        </div>
      ) : (
        <div onClick={() => setFPUP((prev) => !prev)}>
          <div onClick={() => setButton((prev) => !prev)}>
            <div onClick={toggleModal}>
              <div className="px-4">
                <button className="bg-orange-500 flex justify-center items-center gap-x-3 text-white text-xl font-bold w-full p-4 rounded-xl">
                  <div>Continue</div>
                  <ArrowForwardIosIcon className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-around mb-4 gap-x-4">
        <div className="flex justify-between items-center gap-x-4">
          <div className="bg-green-300 text-green-600 h-fit p-1 rounded">
            <DoneOutlineIcon />
          </div>
          <p className="text-gray-500 font-bold text-lg">Ready In 24h</p>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div className="bg-green-300 text-green-600 h-fit p-1 rounded">
            <LocalShippingIcon />
          </div>
          <p className="text-gray-500 font-bold text-lg">Free Shipping</p>
        </div>
      </div>
      {!FPUPP ? (
        <div className="w-full h-screen">
          <div className="modal">
            <div className="overlay">
              <div className="modal-content2 flex justify-between h-fit w-full">
                <div className="w-full h-full bg-slate-100">
                  <div className="flex justify-between mb-6">
                    <div className="w-full bg-slate-300 py-4 px-2 flex items-center justify-between">
                      <div className="font-bold w-full">
                        Samsung Galaxy S21 Ultra
                      </div>
                      <div
                        onClick={() => setFPUP(true)}
                        className="cursor-pointer flex justify-end items-center bg-orange-500 w-fit py-2.5 px-12 text-xl font-bold text-white rounded-md"
                      >
                        <div className="">Back</div>
                      </div>
                    </div>
                  </div>
                  {/* Selection Area */}
                  <div className="w-full flex flex-col justify-between gap-y-4 px-4">
                    <div className="flex flex-col gap-y-4">
                      {/* Selection Area 1 */}
                      {!screenProtector ? (
                        <div onClick={() => setGiftPackaging(false)}>
                          <div onClick={() => setNoThanks(false)}>
                            <div
                              onClick={() => setImgTwo("screenprotectorr.jpg")}
                            >
                              <div
                                onClick={() => setScreenProtector(true)}
                                className="bg-white flex border-2 rounded-xl w-full py-1"
                              >
                                <div className="flex items-center pl-4">
                                  <div className="rounded-full text-center border-2 border-gray-300 p-1">
                                    <div className="p-1 rounded-full"></div>
                                  </div>
                                </div>
                                <img
                                  className="h-32 rounded-2xl p-2"
                                  src="screenprotector.jpg"
                                  alt=""
                                />
                                <div className="flex flex-col px-2">
                                  <div className="flex justify-between">
                                    <div className="text-2xl font-bold text-black">
                                      Screenprotector
                                    </div>
                                    <div className="flex gap-x-2 text-xl font-bold text-orange-500">
                                      <div className="line-through text-black">
                                        $14.95
                                      </div>
                                      <div>$5.95</div>
                                    </div>
                                  </div>
                                  <div className="pt-2 font-bold text-gray-500">
                                    Bescherm je beeldscherm met een
                                    screenprotector van gehard glas. De
                                    screenprotector vormt een extra
                                    (onzichtbare) laag tegen krassen en barsten.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div onClick={() => setImg("iphoneones.png")}>
                            <div
                              onClick={() => setShow(false)}
                              className="bg-white flex border-2 border-orange-500 rounded-xl w-full py-1"
                            >
                              <div className="flex items-center pl-4">
                                <div className="rounded-full text-orange-700 text-center border-2 border-orange-700 p-1">
                                  <div className="bg-orange-700 p-1 rounded-full"></div>
                                </div>
                              </div>
                              <img
                                className="h-32 rounded-2xl p-2"
                                src="screenprotector.jpg"
                                alt=""
                              />
                              <div className="flex flex-col px-2">
                                <div className="flex justify-between">
                                  <div className="text-2xl font-bold text-black">
                                    Screenprotector
                                  </div>
                                  <div className="flex gap-x-2 text-xl font-bold text-orange-500">
                                    <div className="line-through text-black">
                                      $14.95
                                    </div>
                                    <div>$5.95</div>
                                  </div>
                                </div>
                                <div className="pt-2 font-bold text-gray-500">
                                  Bescherm je beeldscherm met een
                                  screenprotector van gehard glas. De
                                  screenprotector vormt een extra (onzichtbare)
                                  laag tegen krassen en barsten.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Selection Area 1 */}
                      {/* Selection Area 2 */}
                      {!giftPackaging ? (
                        <div onClick={() => setScreenProtector(false)}>
                          <div onClick={() => setNoThanks(false)}>
                            <div
                              onClick={() => setImgTwo("giftpackagingg.jpg")}
                            >
                              <div
                                onClick={() => setGiftPackaging(true)}
                                className="bg-white flex border-2 rounded-xl w-full py-1"
                              >
                                <div className="flex items-center pl-4">
                                  <div className="rounded-full text-center border-2 border-gray-300 p-1">
                                    <div className="p-1 rounded-full"></div>
                                  </div>
                                </div>
                                <img
                                  className="h-32 rounded-2xl p-2"
                                  src="giftpackaging.jpg"
                                  alt=""
                                />
                                <div className="flex flex-col px-2">
                                  <div className="flex justify-between">
                                    <div className="text-2xl font-bold text-black">
                                      Gift packaging
                                    </div>
                                    <div className="flex gap-x-2 text-xl font-bold text-orange-500">
                                      <div className="line-through text-black">
                                        $14.95
                                      </div>
                                      <div>$0</div>
                                    </div>
                                  </div>
                                  <div className="pt-2 font-bold text-gray-500">
                                    Bestel nu een geschenkverpakking om jouw
                                    case als cadeau in te kunnen pakken
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div onClick={() => setImg("iphoneones.png")}>
                            <div
                              onClick={() => setShow(false)}
                              className="bg-white flex border-2 border-orange-500 rounded-xl w-full py-1"
                            >
                              <div className="flex items-center pl-4">
                                <div className="rounded-full text-orange-700 text-center border-2 border-orange-700 p-1">
                                  <div className="bg-orange-700 p-1 rounded-full"></div>
                                </div>
                              </div>
                              <img
                                className="h-32 rounded-2xl p-2"
                                src="giftpackaging.jpg"
                                alt=""
                              />
                              <div className="flex flex-col px-2">
                                <div className="flex justify-between">
                                  <div className="text-2xl font-bold text-black">
                                    Gift packaging
                                  </div>
                                  <div className="flex gap-x-2 text-xl font-bold text-orange-500">
                                    <div className="line-through text-black">
                                      $14.95
                                    </div>
                                    <div>$0</div>
                                  </div>
                                </div>
                                <div className="pt-2 font-bold text-gray-500">
                                  Bestel nu een geschenkverpakking om jouw case
                                  als cadeau in te kunnen pakken
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Selection Area 2 */}
                      {/* Selection Area 3 */}
                      {!noThanks ? (
                        <div onClick={() => setGiftPackaging(false)}>
                          <div onClick={() => setScreenProtector(false)}>
                            <div onClick={() => setImg("iphoneones.png")}>
                              <div
                                onClick={() => setNoThanks(true)}
                                className="bg-white flex border-2 rounded-xl w-full py-6"
                              >
                                <div className="flex items-center justify-center gap-x-4 pl-4">
                                  <div className="rounded-full text-center border-2 border-gray-300 p-1">
                                    <div className="p-1 rounded-full"></div>
                                  </div>
                                  <div className="font-black">No, Thanks</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div onClick={() => setImg("iphoneones.png")}>
                            <div
                              onClick={() => setShow(false)}
                              className="bg-white flex border-2 border-orange-500 rounded-xl w-full py-6"
                            >
                              <div className="flex items-center justify-center gap-x-4 pl-4">
                                <div className="rounded-full text-orange-700 text-center border-2 border-orange-700 p-1">
                                  <div className="bg-orange-700 p-1 rounded-full"></div>
                                </div>
                                <div className="font-black">No, Thanks</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Selection Area 3 */}
                    </div>

                    {/* Cart Button */}
                    <div className="flex flex-col gap-y-4">
                      <div>
                        <div>
                          <div>
                            <button className="bg-orange-500 flex justify-center items-center gap-x-3 text-white text-xl font-bold w-full p-4 rounded-xl">
                              <div className="w-[40%] flex">
                                <ShoppingCartIcon className="w-fit" />
                              </div>
                              <div
                                onClick={() => setFPUP(true)}
                                className=" w-[60%] flex"
                              >
                                Add Me Cart
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-around gap-x-4">
                        <div className="flex justify-between items-center gap-x-4">
                          <div className="bg-green-300 text-green-600 h-fit p-1 rounded">
                            <DoneOutlineIcon />
                          </div>
                          <p className="text-gray-500 font-bold text-lg">
                            Ready In 24h
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-x-4">
                          <div className="bg-green-300 text-green-600 h-fit p-1 rounded">
                            <LocalShippingIcon />
                          </div>
                          <p className="text-gray-500 font-bold text-lg">
                            Free Shipping
                          </p>
                        </div>
                      </div>
                      <div className="font-bold">
                        *Orders Above $20.00 Will Receive A
                        <p className="inline text-orange-500">
                          {" "}
                          Free Shipping{" "}
                        </p>
                        Bonus
                      </div>
                    </div>
                    {/* Cart Button */}
                  </div>
                  {/* Selection Area */}
                </div>
                {/* Image Area */}
                {/* Image Area */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileResponsive;
