/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const FPUP = () => {
  const [modell, setModell] = useState(true);

  const toggleModal = () => {
    setModell(!modell);
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content flex justify-between h-fit w-[90%]">
          <div className="w-[70%] h-full bg-red-300">
            <h1 className="font-bold">Extra Protection Options</h1>
          </div>
          <div className="flex w-[30%] justify-between bg-green-500">
            <div className="w-full flex justify-center items-center bg-red-400">
              <div className="bg-blue-400">
                <img
                  //   src={img}
                  className="bg-green-300 w-fit h-fit flex justify-center items-center text-center"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-emerald-400 h-full">
              <button
                className="close-modal flex bg-red-300 rounded-full p-1.5 h-fit"
                onClick={toggleModal}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FPUP;
