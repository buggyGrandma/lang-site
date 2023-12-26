import React from "react";

const Options = ({ selected }: { selected: boolean }) => {
  const renderedContainerClass = selected
    ? "text-[#202020] bg-[#FFD073]"
    : "text-[#818181]  bg-white";
  const renderedBarClass = selected ? "bg-[#FFE0A5]" : "bg-[#DADADA]";
  const renderedOptionClass = selected ? "bg-[#FFE0A5]" : "bg-[#EEEEEE]";
  return (
    <div
      className={`${renderedContainerClass} text-[18px] font-medium relative px-[11px] w-full flex flex-row-reverse justify-start items-center rounded-[12px] max-w-[648px] h-[64px] my-[12px]`}
    >
      <div
        className={`${renderedBarClass} absolute left-0 rounded-r-[50px] w-[5px] h-[44px]`}
      ></div>
      <div
        className={`${renderedOptionClass}   mr-[12px] w-[44px] h-[44px] rounded-[8px] flex items-center justify-center`}
      >
        A
      </div>
      Options
    </div>
  );
};

export default Options;
