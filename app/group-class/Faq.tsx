"use client";
import React, { useState } from "react";
import arrowDown from "@/public/images/faq/arrow-down.svg";
import arrowUp from "@/public/images/faq/arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "کلاس های من چطوری برگزار می شوند؟",
      answer: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار
          می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را
          بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است
          راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و
          از یادگیری زبان انگلیسی لذت ببرید. <br></br>
          <Link href="https://zoom.us/download" className="text-[#0d6efd]">
            دانلود zoom
          </Link>
        </p>
      ),
    },
    {
      question: "استاد من کیه؟! و چه کتابی به من تدریس می کنه؟",
      answer:
        "استاد هر ترم از میان مجرب ترین اساتید همیارزبان که سابقه‌ی تدریس دارند، انتخاب می‌شود؛ روش‌های تدریس اساتید با توجه به سطح کلاس شما تغییر می‌کند. کتاب‌های American English file در کلاس زبان انگلیسی عمومی تدریس می‌شود. این کتاب با روش‌های به روز چهار مهارت اصلی را به شما آموزش می‌دهد. به شما پیشنهاد می‌شود از کتاب‌های کمک آموزشی معرفی شده توسط اساتید همیارزبان جهت یادگیری بیشتر نهایت استفاده را ببرید.",
    },
    {
      question: "چطوری بفهمم کدوم سطح رو ثبت نام کنم؟",
      answer:
        "شما قبل از ثبت نام هر کلاس، یکبار تعیین سطح آنلاین انجام می‌دهید، تعیین سطح آنلاین همیارزبان کاملا هوشمند است و سطح گرامر شما را با توجه به سطح بندی CEFR از کتاب‌های American English file مورد سنجش قرار می دهد. پس از تعیین سطح، لیست کلاس‌هایی که با سطح شما هم‌خوانی دارد به شما پیشنهاد می‌شود. در ادامه با ثبت نام در کلاس پیشنهادی، مهارت‌های شنیداری، مکالمه و لغات شما در تعیین سطحی تلفنی توسط استاد زبان مورد سنجش قرار می‌گیرد تا سطحی که در آن ثبت‌نام می‌کنید کاملا با دانش شما متناسب باشد.",
    },
    {
      question: "چند هم کلاسی دارم؟",
      answer:
        "برای بهبود روند یادگیری زبان انگلیسی، در کلاس‌های گروهی همیارزبان شما حداکثر 10 هم‌کلاسی خواهید داشت.",
    },
    {
      question: "در طول کلاس آزمون هم وجود داره؟",
      answer:
        "بله، در طول کلاس، یادگیری شما با آزمون‌های مختلف، از جمله کویــیزهای کلاسی، میان‌ترم و آزمون‌های شفاهی، سنجیده می‌شود، در انتهای کلاس، یک آزمون پایانی متناسب با کلاس شما برگزار می‌شود که تمامی مطالبی که یاد گرفته‌اید را به صورت شفاهی و کتبی مورد سنجش قرار می‌دهد.",
    },
  ];

  return (
    <div className="w-[50%] lg-max:w-[91%] lg-max:mx-4 justify-center flex flex-col items-center mx-auto z-20 relative gap-y-6">
      {faqData.map((faq, index) => (
        <div key={index} className=" w-full rounded-xl bg-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 px-6 rounded-md"
          >
            <p className="text-[#282828] font-medium text-base lg-max:text-sm lg-max:text-start">
              {faq.question}
            </p>
            {activeIndex === index ? (
              <Image src={arrowUp} alt="Close" />
            ) : (
              <Image src={arrowDown} alt="Open" />
            )}
          </button>
          {activeIndex === index && (
            <div className="mb-6 mx-6 rounded-lg p-4 bg-[#F8F8F8]">
              <p className="text-[#555] text-base font-normal">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
