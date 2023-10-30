import React, { useState } from "react";
import Notification from "~/components/Notification";
import OnOffSwitch from "./Switch";

const NotificationSetting = () => {
  return (
    <div className="w-full p-4 flex gap-y-4 flex-col items-center border-y-2">
      <h1>Notifications</h1>
      <div className="bg-white p-4 rounded-md flex flex-col gap-10 shadow-2xl">
        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">If I got rejected from Opportunity</p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">If Opportunity got Closed</p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">
            If Opportunity is expiring in less then 24h
          </p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">
            Notify me about Opportunities with 50% Match and more
          </p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">If I got rejected from Opportunity</p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">
            Notify me on E-Mail Daily Opportunity Findings
          </p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">New Features & News</p>
        </div>

        <div className="flex gap-x-4">
          <div>
            <OnOffSwitch />
          </div>
          <p className="capitalize">Turn Off All Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
