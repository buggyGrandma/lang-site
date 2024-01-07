import React from "react";

import Bin from "./assets/Bin";
const Book = () => {
  return (
    <div className="w-full max-w-[670px] p-[12px] rounded-[12px] bg-[#F9F9F9]">
      <div className="w-full flex justify-between items-center bg-white px-[24px] py-[16px] rounded-[8px]">
        <div className="flex  items-center gap-[12px]">
          <div className="w-[62px] h-[62px] bg-blue-900" />
          <div className="text-[14px] font-medium font-iranSansBold text-[#212121] flex flex-col">
            <p>کتاب American English File1</p>
            <p>۱۵۰,۰۰۰ تومان</p>
          </div>
        </div>
        <Bin />
      </div>
    </div>
  );
};

export default Book;
