import React from "react";
import ReservationNav from "./ReservationNav";
import CloseButton from "./information-completion/components/DataSelect/CloseButton";
import MobileCloseButton from "./information-completion/components/DataSelect/MobileCloseButton";

const ReservationHeader = () => {
  return (
    <>
      <div className="relative border-b h-[64px] md:h-[130px] md:px-[60px] flex items-center w-full bg-white md:rounded-t-[24px] ">
        <div className="hidden md:flex items-center">
          <CloseButton />
          <div className="text-[14px] text-[#757575] font-normal">
            برای رزرو کلاس ترمیک اطلاعات زیر را تکمیل کنید.
          </div>
          <ReservationNav registered={false} step="completeInfo" />
        </div>
        <div className="flex gap-[8px] px-[8px] items-center md:hidden">
          <MobileCloseButton />
          <div className="text-[#212121] text-[18px]  font-iranSansBold">
            رزرو کلاس ترمیک
          </div>
        </div>
      </div>
      <div className="md:hidden h-[105px] py-[12px] px-10 border-b bg-white">
        <ReservationNav registered={false} step="check" />
      </div>
    </>
  );
};

export default ReservationHeader;
