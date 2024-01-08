import ResNavContext from "@/app/group-class/contexts/resNavContext";
import PhoneTextIcon from "@/app/components/ClassReservation/Register/PhoneTextIcon";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TextInput from "../../TextInput";

const Register = () => {
  const [number, setNumber] = useState("");
  const { dispatch } = useContext(ResNavContext);
  dispatch("register");
  return (
    <div className="w-full h-screen md:max-w-[424px] flex flex-col">
      <PhoneTextIcon />
      <p className="mt-[16px] mb-[8px] text-[#212121] font-iranSansBold font-bold text-[16px]">
        لطفا شماره موبایل خود را وارد نمایید.
      </p>
      <p className="mb-[24px] text-[#818181] font-medium text-[14px]">
        یک کد چهار رقمی برای این شماره ارسال خواهد شد.
      </p>
      <TextInput onChange={setNumber} placeholder="مثل: ۰۹۱۲۹۲۳۶۰۶۹" />
      <p className="mt-[16px] text-[#979797] font-iranSansBold font-normal text-[12px]">
        ثبت نام شما به منزله موافقت با
        <Link href={"/class-reservation/register"} className="text-[#0CAC67]">
          قوانین
        </Link>{" "}
        است.
      </p>
    </div>
  );
};

export default Register;
