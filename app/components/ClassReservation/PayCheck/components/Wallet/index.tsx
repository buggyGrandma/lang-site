import React from "react";
import WalletIcon from "./WalletIcon";
import Switch from "./Switch";

const Wallet = () => {
  return (
    <div className="w-full max-w-[670px] p-[12px] rounded-[12px] bg-[#F9F9F9]">
      <div className="font-semibold text-[14px] flex justify-between items-center bg-white px-[24px] py-[16px] rounded-[8px]">
        <div className="flex flex-col">
          <div className="text-[#434343]  flex gap-[8px]">
            <WalletIcon />
            <p>پرداخت از کیف پول </p>
          </div>
          <div className="text-[13px] flex gap-[6px]">
            <p className="text-[#828C89]">موجودی:</p>
            <p className="text-[#09BC7E]">۳،۵۰۰،۰۰۰ تومان</p>
          </div>
        </div>
        <Switch />
      </div>
    </div>
  );
};

export default Wallet;
