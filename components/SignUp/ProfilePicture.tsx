/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Avatar from "react-avatar-edit";
// import Img from "/img/profile_img.png";
import { InputText } from "primereact/inputtext";
// import img from "/img/imageUploader.png";
// import ReactDOM from 'react-dom'

const PP = () => {
  const [dialogs, setDialogs] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);
  const onCrop = (view: boolean | ((prevState: boolean) => boolean)) => {
    setImgCrop(view);
  };
  const onClose = () => {
    setImgCrop(null);
  };
  const saveImage = () => {
    setStoreImage([...storeImage, { imgCrop }]);
    setImgCrop(false);
  };
  const profileImageShow = storeImage.map((item) => item.imgCrop);

  return (
    <div className="w-full">
      <div className="profile_img p-4 w-full">
        <div className="flex flex-col w-full">
          <img
            src="/img/imageUploader.png"
            // src={profileImageShow.length ? profileImageShow : Img}
            alt=""
            className="w-[200px] h-[200px] rounded-full object-cover"
            onClick={() => setDialogs(true)}
          />
          <Dialog
            visible={dialogs}
            header={() => <p>Update Profile</p>}
            onHide={() => setDialogs(false)}
          >
            <div className="confirmation-content border-2 bg-white w-full py-4 flex flex-col items-center">
              <div className="flex flex-col items-center w-full">
                <div className="flex md:flex-row flex-col justify-around gap-4 items-center w-full">
                  <Avatar
                    width={400}
                    height={300}
                    onClose={onClose}
                    onCrop={onCrop}
                  />
                  <Button
                    onClick={saveImage}
                    className="bg-blue-700 h-fit p-12 rounded-full"
                    label="Save"
                    icon="pi pi-check"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PP;
