import ResNavContext from "@/app/class-reservation/contexts/resNavContext";
import DateSelect from "@/app/class-reservation/information-completion/components/DataSelect";
import Book from "@/app/class-reservation/information-completion/components/Book";
import React, { useContext, useState } from "react";
import RadioIcon from "../../RadioIcon";
import TextInput from "../../TextInput";

const CompleteInfo = () => {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [book1, setBook1] = useState<boolean>(false);
  const [book2, setBook2] = useState<boolean>(false);
  const [fullName, setFullName] = useState("");
  const { dispatch } = useContext(ResNavContext);
  dispatch("completeInfo");
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
            <DateSelect
              inputs={[
                "چهارشنبه ۲۳  / ساعت ۱۲ تا ۱۳:۳۰",
                "چهارشنبه ۳  / ساعت ۱۲ تا ۱۳:۳۰",
                "چهارشنبه ۲  / ساعت ۱۲ تا ۱۳:۳۰",
              ]}
            />
          </div>
        </div>
        <div className="border-b py-[24px] gap-x-[24px] gap-y-[16px] flex flex-col md:flex-row ">
          <div className="w-full md:max-w-[312px]">
            <TextInput
              onChange={() => setFullName}
              label="نام و نام‌خانوادگی*"
              placeholder="مثل: بردیا ادیبی"
            />
          </div>

          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
              سن*
            </div>
            <DateSelect
              inputs={[
                "۱۳ تا ۱۸ سال",
                "۱۸ تا ۲۵ سال",
                "۲۵ تا ۳۵ سال",
                "۳۵ سال به بالا",
              ]}
            />
          </div>
          <div>
            <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
              جنسیت*
            </div>
            <div className="text-[#212121] text-[14px] font-normal flex gap-[40px] items-center">
              <input
                onChange={() => setSex("female")}
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
                <RadioIcon selected={sex === "female"} />
                <p>زن</p>
              </label>
              <input
                onChange={() => setSex("male")}
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
                <RadioIcon selected={sex === "male"} />
                <p>مرد</p>
              </label>
            </div>
          </div>
        </div>
        <div className="py-[24px] flex flex-col md:flex-row ">
          <div>
            <div className="mb-[19px] flex items-center text-[#5A5A5A] text-[14px] font-iranSansBold font-medium">
              دریافت کتاب
              <p className="text-[12px] font-normal font-iranSans">(اختیاری)</p>
            </div>
            <div className="flex flex-col md:flex-row gap-x-[24px] gap-y-[12px]">
              <input
                onChange={() => setBook1(!book1)}
                className="hidden"
                type="checkbox"
                name="book"
                value="book1"
                id="book1"
              />
              <label htmlFor="book1">
                <Book selected={book1} />
              </label>
              <input
                onChange={(e) => setBook2(!book2)}
                className="hidden"
                type="checkbox"
                name="book"
                value="book2"
                id="book2"
              />
              <label htmlFor="book2">
                <Book selected={book2} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteInfo;
