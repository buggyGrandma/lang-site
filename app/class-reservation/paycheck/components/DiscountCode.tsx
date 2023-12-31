"use client";
import Button from "@/app/components/Button";
import TextInput from "@/app/components/TextInput";
import { useState } from "react";

const DiscountCode = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleSubmit = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-full  flex justify-between items-center">
        {show ? (
          <div className="w-full flex flex-col gap-[16px]">
            <TextInput label="کد تخفیف" />
            <div className="w-[103px] h-[35px] md:w-[124px] md:h-[52px]">
              <Button color="primary" onClick={handleSubmit}>
                <p className="text-[12px] md:text-[14px]">اعمال کد تخفیف</p>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[#5A5A5A] text-[14px] font-normal">
              آیا کد تخفیف دارید؟
            </p>
            <div className="w-[98px] md:w-[118px] h-[35px] md:h-[52px]">
              <Button color="primary" onClick={handleSubmit}>
                <p className="text-[12px] md:text-[14px]">ثبت کد تخفیف</p>
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiscountCode;
