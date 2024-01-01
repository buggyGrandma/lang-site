"use client";
import { useState } from "react";
import CheckButton from "../Book/CheckButton";
import CloseButton from "./CloseButton";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";

const DateSelect = ({ inputs }: { inputs: string[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState(inputs[0]);
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className={`${
          show ? "flex" : "hidden"
        } md:hidden absolute  left-0 top-0 w-[100vw] h-[100vh] bg-[#00000080]`}
      >
        <div className="w-full pb-[16px] absolute  bottom-0 bg-white rounded-t-[12px]  flex-col">
          <div className="flex items-center h-[54px]">
            <CloseButton />
            <p
              onClick={(event) => event.stopPropagation()}
              className="text-[#202020] text-[14px] font-iranSansBold font-medium"
            >
              تعیین سطح تلفنی
            </p>
          </div>
          {inputs.map((item) => (
            <div onClick={(event) => event.stopPropagation()} key={item}>
              <input
                onChange={(e) => {
                  setInput(item);
                  setText(e.target.value);
                }}
                className="hidden"
                type="radio"
                name="input"
                value={item}
                id={item}
              />
              <label
                className={`${
                  input === item ? "bg-[#D7F1E699]" : "bg-white"
                } flex justify-between items-center px-[16px] py-[9px]`}
                htmlFor={item}
              >
                <p className="text-[#212121] font-normal">{item}</p>
                <CheckButton selected={input === item} />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className={`${
          show
            ? "hidden md:flex md:bg-[#1CD3911A] md:text-[#189877] md:border md:border-[#46AD92]"
            : "bg-[#F6F6F6]"
        } md:w-[312px] h-[52px] px-[16px] flex justify-between items-center  w-full rounded-[4px] relative cursor-pointer`}
      >
        {text}
        <div>{show ? <ArrowUp /> : <ArrowDown />}</div>
        <div
          onClick={(event) => event.stopPropagation()}
          className={`${
            show && "md:flex"
          } hidden w-[312px] h-fit  flex-col py-2 bg-white shadow-modalShadow top-[60px] left-[50%] translate-x-[-50%]  absolute`}
        >
          {inputs.map((item) => (
            <div key={item}>
              <input
                onChange={(e) => {
                  setInput(item);
                  setText(e.target.value);
                }}
                className="hidden"
                type="radio"
                name="input"
                value={item}
                id={item}
              />
              <label
                className={`${
                  input === item ? "bg-[#D7F1E699]" : "bg-white"
                } flex justify-between items-center px-[16px] py-[9px]`}
                htmlFor={item}
              >
                <p className="text-[#212121] font-normal">{item}</p>
                <CheckButton selected={input === item} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DateSelect;
