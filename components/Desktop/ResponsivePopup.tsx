import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ResPopup = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
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
  );
};

export default ResPopup;
