import React from "react";
import PhoneTextIcon from "../PhoneTextIcon";
import Link from "next/link";

const CodeEvaluationPage = () => {
  return (
    <div className="w-full h-screen md:max-w-[424px] flex flex-col">
      <PhoneTextIcon />
      <p className="flex items-center justify-between w-full mt-[16px] mb-[8px] text-[#212121] font-iranSansBold font-bold text-[16px]">
        کد تایید را وارد کنید
        <Link
          href={"/class-reservation/register"}
          className="text-[#0CAC67] text-[12px] font-bold font-iranSansBold"
        >
          ویرایش شماره
        </Link>
      </p>
      <p className="mb-[24px] w-full text-[#818181] font-medium text-[14px]">
        کد به شماره ۰۹۱۲۹۲۳۶۰۶۹ ارسال گردید.
      </p>

      <p className="mt-[16px] text-[#979797] font-iranSansBold font-normal text-[12px]">
        ارسال مجدد کد تا ۸۳ ثانیه دیگر
      </p>
    </div>
  );
};

export default CodeEvaluationPage;
