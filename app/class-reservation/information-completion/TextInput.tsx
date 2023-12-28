"use client";

import { useState } from "react";

const TextInput = () => {
  const [color, setColor] = useState("text-[#5A5A5A]");
  return (
    <div className="flex flex-col ">
      <label
        htmlFor="1"
        className={`mb-[19px] text-[12px] font-normal ${color}`}
      >
        نام و نام‌خانوادگی*
      </label>
      <input
        id="1"
        type="text"
        onFocus={() => setColor("text-[#0CAC67]")}
        onBlur={() => setColor("text-[#5A5A5A]")}
        className="md:w-[312px] h-[52px] p-2 bg-[#F6F6F6] w-full focus:bg-white outline-[#0CAC67] rounded-[4px]"
      ></input>
    </div>
  );
};

export default TextInput;
