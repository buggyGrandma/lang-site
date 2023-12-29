"use client";
import { useState } from "react";
import CheckButton from "./Book/CheckButton";
import CloseButton from "./CloseButton";

const DateSelect = ({ dates }: { dates: string[] }) => {
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [text, setText] = useState(dates[0]);
  return (
    <>
      <div
        className={`${
          show ? "flex" : "hidden"
        } md:hidden absolute left-0 top-0 w-[100vw] h-[100vh] bg-[#00000080]`}
      >
        <div className="w-full pb-[16px] absolute bottom-0 bg-white rounded-t-[12px]  flex-col">
          <div className="flex items-center h-[54px]">
            <CloseButton />
            <p className="text-[#202020] text-[14px] font-iranSansBold font-medium">
              تعیین سطح تلفنی
            </p>
          </div>
          {dates.map((item) => (
            <div key={item}>
              <input
                onChange={(e) => {
                  setDate(item);
                  setText(e.target.value);
                }}
                className="hidden"
                type="radio"
                name="date"
                value={item}
                id={item}
              />
              <label
                className={`${
                  date === item ? "bg-[#D7F1E699]" : "bg-white"
                } flex justify-between items-center px-[16px] py-[9px]`}
                htmlFor={item}
              >
                <p className="text-[#212121] font-normal">{item}</p>
                <CheckButton selected={date === item} />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className={`${
          show
            ? "bg-[#1CD3911A] text-[#189877] border border-[#46AD92]"
            : "bg-[#F6F6F6]"
        } md:w-[312px] h-[52px] px-[16px] flex justify-between items-center  w-full rounded-[4px] relative cursor-pointer`}
      >
        {text}
        <div>
          {show ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9396 11.8501C14.7971 11.8501 14.6546 11.7976 14.5421 11.6851L9.65215 6.79506C9.29215 6.43506 8.70715 6.43506 8.34715 6.79506L3.45715 11.6851C3.23965 11.9026 2.87965 11.9026 2.66215 11.6851C2.44465 11.4676 2.44465 11.1076 2.66215 10.8901L7.55215 6.00006C8.34715 5.20506 9.64465 5.20506 10.4471 6.00006L15.3371 10.8901C15.5546 11.1076 15.5546 11.4676 15.3371 11.6851C15.2246 11.7901 15.0821 11.8501 14.9396 11.8501Z"
                fill="#189877"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99965 12.6C8.47465 12.6 7.94965 12.3975 7.55215 12L2.66215 7.10998C2.44465 6.89248 2.44465 6.53248 2.66215 6.31498C2.87965 6.09748 3.23965 6.09748 3.45715 6.31498L8.34715 11.205C8.70715 11.565 9.29215 11.565 9.65215 11.205L14.5421 6.31498C14.7596 6.09748 15.1196 6.09748 15.3371 6.31498C15.5546 6.53248 15.5546 6.89248 15.3371 7.10998L10.4471 12C10.0496 12.3975 9.52465 12.6 8.99965 12.6Z"
                fill="#757575"
              />
            </svg>
          )}
        </div>
        <div
          className={`${
            show && "md:flex"
          } hidden w-[312px] h-fit  flex-col py-2 bg-white shadow-modalShadow top-[60px] left-[50%] translate-x-[-50%]  absolute`}
        >
          {dates.map((item) => (
            <div key={item}>
              <input
                onChange={(e) => {
                  setDate(item);
                  setText(e.target.value);
                }}
                className="hidden"
                type="radio"
                name="date"
                value={item}
                id={item}
              />
              <label
                className={`${
                  date === item ? "bg-[#D7F1E699]" : "bg-white"
                } flex justify-between items-center px-[16px] py-[9px]`}
                htmlFor={item}
              >
                <p className="text-[#212121] font-normal">{item}</p>
                <CheckButton selected={date === item} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DateSelect;
