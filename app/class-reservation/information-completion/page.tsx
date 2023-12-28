"use client";
import { useState } from "react";
import RadioIcon from "../../components/RadioIcon";

const InformationCompletion = () => {
  const [selected, setSelected] = useState<"male" | "female">("male");
  return (
    <>
      <div className="max-w-[984px]">
        <div className="md:hidden mb-[16px] text-[14px] text-[#757575] font-normal">
          برای رزرو کلاس ترمیک اطلاعات زیر را تکمیل کنید.
        </div>
        <div className="border-b py-[24px] gap-x-[24px] gap-y-[16px] flex flex-col md:flex-row-reverse md:items-end">
          <div className="h-fit px-[16px] py-[13px] max-w-[648px] bg-[#FFCC68] bg-opacity-20 text-[#555555] text-[14px] font-normal rounded-[4px]">
            برای دقیق‌تر کردن تعیین سطح، نیاز به تماس تلفنی کوتاهی است که از
            جانب تیم ما با شما گرفته ‌خواهد شد. لطفا زمان مناسب برای تماس تلفنی
            را در زیر انتخاب کنید
          </div>
          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[14px] font-iranSansBold font-medium">
              تعیین سطح تلفنی
            </div>
            <div className="md:w-[312px] h-[52px] bg-[#F6F6F6] w-full "></div>
          </div>
        </div>
        <div className="border-b py-[24px] gap-x-[24px] gap-y-[16px] flex flex-col md:flex-row ">
          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
              نام و نام‌خانوادگی*
            </div>
            <div className="md:w-[312px] h-[52px] bg-[#F6F6F6] w-full "></div>
          </div>
          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
              سن*
            </div>
            <div className="md:w-[312px] h-[52px] bg-[#F6F6F6] w-full "></div>
          </div>
          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
              جنسیت*
            </div>
            <div className="text-[#212121] text-[14px] font-normal flex gap-[40px] items-center">
              <input
                onChange={() => setSelected("male")}
                className="hidden"
                type="radio"
                name="sex"
                value="male"
                id="male"
              />
              <label
                className="flex gap-[12px] justify-center items-center"
                htmlFor="male"
              >
                <RadioIcon selected={selected === "male"} />
                <p>مرد</p>
              </label>
              <input
                onChange={() => setSelected("female")}
                className="hidden"
                type="radio"
                name="sex"
                value="female"
                id="female"
              />
              <label
                className="flex gap-[12px] justify-center items-center"
                htmlFor="female"
              >
                <RadioIcon selected={selected === "female"} />
                <p>زن</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCompletion;
