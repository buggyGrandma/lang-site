"use client";
import { useState } from "react";
import Options from "./Options";

const EvaluationQuestion = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full flex flex-col justify-center items-center mb-[128px]">
      <div className="relative mb-[90px]  w-full max-w-[648px] h-[220px] bg-white rounded-[12px] flex justify-center items-center">
        <div className="bg-[#F1F1F1] absolute top-3 left-3 w-[40px] h-[40px] rounded-[8px] flex items-center justify-center text-[18px] text-[#555555] font-medium">
          60
        </div>
        <div className="bg-[#F5F5F5] text-[18px] font-normal text-[#818181] px-[16px] py-[8px] rounded-full absolute top-3 right-3">
          I don`t know
        </div>
        <div className="text-[24px] font-medium">She was sick</div>
      </div>
      <input
        onChange={() => setSelected("A")}
        className="hidden"
        type="radio"
        name="options"
        value="A"
        id="A"
      />
      <label className="w-full max-w-[648px]" htmlFor="A">
        <Options selected={selected === "A"} />
      </label>
      <input
        onChange={() => setSelected("B")}
        className="hidden"
        type="radio"
        name="options"
        value="B"
        id="B"
      />
      <label className="w-full max-w-[648px]" htmlFor="B">
        <Options selected={selected === "B"} />
      </label>
      <input
        onChange={() => setSelected("C")}
        className="hidden"
        type="radio"
        name="options"
        value="C"
        id="C"
      />
      <label className="w-full max-w-[648px]" htmlFor="C">
        <Options selected={selected === "C"} />
      </label>
      <input
        onChange={() => setSelected("D")}
        className="hidden"
        type="radio"
        name="options"
        value="D"
        id="D"
      />
      <label className="w-full max-w-[648px]" htmlFor="D">
        <Options selected={selected === "D"} />
      </label>
    </div>
  );
};

export default EvaluationQuestion;
