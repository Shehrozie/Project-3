import React from "react";
import PayHistoryMap from "./PaymentHistory";
import PaymentDetailsMap from "./PaymentDetail";

const PayingHistory = () => {
  return (
    <div className="w-full p-4 flex gap-y-4 flex-col items-center border-y-2">
      <h1 className="text-2xl">Payment History</h1>
      <div className="w-full">
        <PaymentDetailsMap />
        <PayHistoryMap />
      </div>
    </div>
  );
};

export default PayingHistory;
