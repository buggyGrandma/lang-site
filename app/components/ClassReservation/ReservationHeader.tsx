"use client";
import React, { useContext } from "react";
import ReservationNav from "./ReservationNav";
import CloseButton from "./CompleteInfo/components/DataSelect/CloseButton";
import MobileCloseButton from "./CompleteInfo/components/DataSelect/MobileCloseButton";
import ResNavContext from "../../group-class/contexts/resNavContext";
import ModalsContext from "@/app/group-class/contexts/modalsContext";

const ReservationHeader = () => {
  const { step } = useContext(ResNavContext);
  const { modals, modalsDispatch } = useContext(ModalsContext);

  const onClose = () => {
    modalsDispatch({ ...modals, classReservation: false });
  };
  return (
    <>
      <div className="relative border-b h-[64px] md:h-[130px] md:px-[60px] flex items-center w-full bg-white md:rounded-t-[24px] ">
        <div className="hidden md:flex items-center">
          <button onClick={onClose}>
            <CloseButton />
          </button>
          <div className="text-[14px] text-[#757575] font-normal">
            برای رزرو کلاس ترمیک اطلاعات زیر را تکمیل کنید.
          </div>
          <ReservationNav registered={false} step={step} />
        </div>
        <div className="flex gap-[8px] px-[8px] items-center md:hidden">
          <button onClick={onClose}>
            <MobileCloseButton />
          </button>
          <div className="text-[#212121] text-[18px]  font-iranSansBold">
            رزرو کلاس ترمیک
          </div>
        </div>
      </div>
      <div className="md:hidden h-[105px] py-[12px] px-10 border-b bg-white">
        <ReservationNav registered={false} step={step} />
      </div>
    </>
  );
};

export default ReservationHeader;
