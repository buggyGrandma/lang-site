import React from "react";
import Navbar from "../components/Navbar";
import vTemp from "@/public/videos/v-temp.png";
import Image from "next/image";
import CourseLevel from "./CourseLevel";
import RoadmapCard from "./RoadmapCard";
import AdvantageCard from "./AdvantageCard";
import teachers from "@/public/images/advantageCards/teachers.svg";
import level from "@/public/images/advantageCards/level.svg";
import onlineClass from "@/public/images/advantageCards/online-class.svg";
import dgree from "@/public/images/advantageCards/dgree.svg";
import circles from "@/public/images/termi/circles.png";
import educationIcon from "@/public/images/termi/education-icon.svg";
import termiUserIcon from "@/public/images/termi/termi-user-icon.svg";
import roadMap from "@/public/images/roadmap/road-map.png";

import Accordion from "./Accordion";
import DescriptionText from "./DescriptionText";
import Footer from "../components/Footer";
import Button from "../components/Button";
import UserCommentSlider from "./UserCommentSlider";
import Link from "next/link";

const groupClass = () => {
  return (
    <main className="bg-[#F8F8FB] overflow-x-hidden">
      <Navbar></Navbar>
      <section className="w-full h-[40rem] bg-[#212121] relative">
        <div className="absolute left-0 top-[-9.5rem]">
          <Image src={circles} alt="left circles" width={625} height={534}></Image>
        </div>

        <div className="relative w-[50%] lg-max:w-full mx-auto  pt-28">
          <div className="absolute left-0 top-1/3">
            <Image src={educationIcon} alt="education icon" width={75} height={75}></Image>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image src={termiUserIcon} alt="termi user icon" width={75} height={75}></Image>
          </div>
          <h1 className="font-iranSansBold font-bold text-[2rem] lg-max:text-xl text-[#1FD998] text-center leading-[3.5rem] mb-4 lg-max:mb-6">
            {" "}
            ثبت نام کلاس های گروهی زبان{" "}
            <span className="bg-[#2E2E2E] text-white p-1">آنلاین </span>
          </h1>
          <h2 className="font-iranSans text-[#B7B7B7] lg-max:text-base text-xl text-center font-medium">
            یک بار برای همیشه به انگلیسی مسلط شوید
          </h2>
        </div>
        <div className="w-[175px] h-[52px] mt-3 lg-max:mt-4 text-sm mx-auto">
          <Button
            color="secondary"
            arrow
            direction="down"
            arrowposition="left"
          >
              مشاهده کلاس ها
          </Button>
        </div>
        {/* <Image
          src={vTemp}
          alt="video should be here "
          width={580}
          height={384}
          className="mx-auto mt-8 z-50 relative"
        ></Image> */}
          <video className="mx-auto mt-8 lg-max:mt-10 lg-max:px-8 z-50 relative rounded-3xl" width={580} height={384}  controls>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </section>
      <div className=" w-full relative z-10 mt-16 ">
        <div className="bg-[#f8f8fb]  mt-[-10rem] absolute w-[85%] lg-max:w-full mx-[6.5rem] lg-max:mx-4 z-0 h-[700px] rounded-lg"></div>
        <section id="courses" className=" relative z-20">
          <h2 className="text-center font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50 stroke-[1.5px] stroke-[#8a8a8a] text-white">
            courses
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-8">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl">
              معرفی کلاس‌های <span className="text-[#0CAC67]">گروهی</span> 
            </h2>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <CourseLevel level="A1" textLevelEn="Basic" textLevelFa="پایه" description={"در طول این سطح، زبان‌آموزها می‌توانند عبارت‌های اساسی مربوط به اطلاعات شخصی، کارهای روزمره و.. را درک کرده و از آنها استفاده کنند. در این دوره کتاب American English File Starter تدریس می‌شود."}></CourseLevel>
            <CourseLevel level="A2" textLevelEn="Elementary" textLevelFa="مبتدی" description={"در طول این سطح، زبان‌آموزها می‌توانند گفتگوهایی ساده‌ در مورد موضوع‌های آشنا انجام دهند و مکالمات مربوط به خرید و جغرافیای محلی را درک کنند. در این دوره کتاب American English File 1 تدریس می‌شود."}></CourseLevel>
            <CourseLevel level="B1" textLevelEn="Pre-Intermediate" textLevelFa="نسبتا متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند در گفتگوها و بحث‌های پیچیده‌تری شرکت کنند و نکته‌های اصلی و اساسی مکالمه را به راحتی متوجه شوند. در این دوره کتاب American English File 2 تدریس می‌شود."}></CourseLevel>
            <CourseLevel level="B2" textLevelEn="Intermediate" textLevelFa="متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند درمکالمه‌ها در مورد طیف گسترده‌ای از مطالب شرکت کنند ومتن‌های پیچیده را درک کنند و به‌ شکل موثر با افراد بومی ارتباط برقرار کنند. در این دوره کتاب American English File 3 تدریس می‌شود."}></CourseLevel>
            <CourseLevel level="C1" textLevelEn="Upper-Intermediate" textLevelFa="نسبتا پیشرفته" description={"در طول این سطح، زبان‌آموزها می‌توانند به طور موثر برای اهداف آکادمیک و حرفه‌ای از دانش زبانی خود استفاده کنند و با دقت بالا در تمامی بحث ها شرکت کنند. در این دوره کتاب American English File 4 تدریس می‌شود."}></CourseLevel>
            <CourseLevel level="C2" textLevelEn="Advanced" textLevelFa="پیشرفته" description={"این بالاترین سطح مهارت آموزش زبان است. زبان آموزها می‌توانند هر چیزی را که می‌خوانند یا می‌شنوند، حتی در زمینه‌های پیچیده، آکادمیک و انتزاعی درک کنند.در این دوره کتاب American English File 5 تدریس می‌شود."}></CourseLevel>
          </div>
        </section>

        <section id="road-map" className="mt-8">
          <h2 className="text-center font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50 stroke-[1.5px] stroke-[#8a8a8a] text-white">
          ROAD MAP
          </h2>
          <div className="w-full relative z-10 mb-16">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl">
                <span className="text-[#0CAC67]">نقشه راه</span> یادگیری زبان انگلیسی
            </h2>
          </div>
          <div className="w-[85%] mx-[7rem] lg-max:mx-4 flex justify-center items-center mt-24 gap-x-4 pb-24 flex-wrap gap-y-[13.5rem] relative lg-max:flex-col" >
            <div className="absolute bottom-[-4rem] w-full right-[-3rem] z-20">
              <Image src={roadMap} alt="road map" width={1100} ></Image>
            </div>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
          </div>
        </section>

        <section id="advantage" className="mt-24">
          <div className="w-full z-20 relative">
            <h2 className="text-center font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50 stroke-[1.5px] stroke-[#8a8a8a] text-white">
            ADVANTAGE
            </h2>
          </div>
          <div className="w-full relative z-10 mb-16">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl">
                <span className="text-[#0CAC67]">مزایای </span >شرکت در کلاس‌های همیارزبان
            </h2>
          </div>
          <div className="flex flex-col px-[10rem] lg-max:px-4 gap-y-5 bg-[#0CAC67] h-[31.25rem]  w-full">
            <div className="flex justify-start gap-x-8 relative z-10">
              <AdvantageCard
                imageUrl={teachers}
                title="یادگیری با اساتید مجرب"
                text="اساتید همیارزبان از میان بهترین‌ها از سراسر ایران انتخاب می‌شوند."
              ></AdvantageCard>
              <AdvantageCard
                imageUrl={level}
                title="تعیین سطح رایگان"
                text="بصورت کاملا آنلاین در هر کجا که هستید تعیین سطح بدید."
              ></AdvantageCard>
            </div>
            <div className="flex justify-end gap-x-8 relative z-10">
              <AdvantageCard
                imageUrl={onlineClass}
                title="شرکت در کلاس‌های آنلاین"
                text="کافیه به اینترنت وصل بشید و در کلاس شرکت کنید."
              ></AdvantageCard>
              <AdvantageCard
                imageUrl={dgree}
                title="ارزیابی با آزمون پایانی"
                text="میزان یادگیری شما با آزمون پایانی سنجیده می‌شود."
              ></AdvantageCard>
            </div>
            <div className="bg-[#f8f8fb]  mt-[-10rem] absolute w-[85%] right-[7rem] z-0 h-[33.75rem] rounded-lg"></div>
            <Link href={'#courses'} className="w-[175px] h-[52px] mx-auto mt-10">
              <Button color="outlinep" arrow direction="up">مشاهده کلاس ها</Button>
            </Link>

          </div>
        </section>

        <section id="comments" className="mt-24">
         <h2  className="text-center font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50 stroke-[1.5px] stroke-[#8a8a8a] text-white">
           USER COMMENTS
          </h2>
          <div className="w-full relative z-10 mb-16">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl">
               نظر <span className="text-[#0CAC67]"> زبان‌آموزهای</span> همیارزبان
            </h2>
          </div>
          <UserCommentSlider></UserCommentSlider>
        </section>
        
        <section id="faq" className="mb-[6.25rem] w-full mt-24">
          <h2 className="text-center font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50 stroke-[1.5px] stroke-[#8a8a8a] text-white">
            FAQ
          </h2>
          <div className="w-full relative z-10 mb-16">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl">
                <span className="text-[#0CAC67]"> سوالاتی</span>   که شاید در ذهن شما هم باشد
            </h2>
          </div>
          <Accordion></Accordion>
        </section>
        <section className="pb-[3.25rem] px-[6.5rem] lg-max:px-8">
          <DescriptionText></DescriptionText>
            {/* <Link href={"#courses"} className="text-black" >کلاس های گروهی انگلیسی</Link>
            <Link href={"#road-map"} className="text-black" >نقشه راه</Link>
            <Link href={"#advantage"} className="text-black" >مزایای کلاس ها</Link>
            <Link href={"#comments"} className="text-black" >نظرات</Link>
            <Link href={"#faq"} className="text-black" >سوالات</Link> */}
        
        </section>
      
        <Footer></Footer>
      </div>
    </main>
  );
};

export default groupClass;
