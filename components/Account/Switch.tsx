import React, { Component, useState } from "react";
import Switch from "react-js-switch";

export default function OnOffSwitch() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };

  return (
    <div>
      <Switch value={isSwitchOn} onChange={switch_onChange_handle} />
    </div>
  );
}
