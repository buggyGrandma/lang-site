"use client";

import { useState } from "react";

const TextInput = ({
  label,
  placeholder,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) => {
  const [color, setColor] = useState("text-[#5A5A5A]");
  const [input, setInput] = useState("");
  onChange(input);
  return (
    <div className="flex flex-col ">
      {label && (
        <label
          htmlFor="1"
          className={`mb-[19px] text-[12px] font-normal ${color}`}
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        id="1"
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setColor("text-[#0CAC67]")}
        onBlur={() => setColor("text-[#5A5A5A]")}
        className=" h-[52px] p-2 bg-[#F6F6F6] w-full focus:bg-white outline-[#0CAC67] rounded-[4px]"
      ></input>
    </div>
  );
};

export default TextInput;
