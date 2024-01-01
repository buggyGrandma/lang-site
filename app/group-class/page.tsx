import React from "react";
import Navbar from "../components/Navbar";
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
import posterVideo from "@/public/images/termi/poster-video.png";
import roadMap from "@/public/images/roadmap/road-map.png";
import roadMapMobile from "@/public/images/roadmap/road-map-mobile.png";
import circleTitleIcon from "@/public/images/titleIcons/circle.svg"
import greenCircleLeft from "@/public/images/titleIcons/green-circle-left.svg"
import greenCircleRight from "@/public/images/titleIcons/green-circle-right.svg"
import yellowCircle from "@/public/images/titleIcons/yellow-circle.svg"
import heartCommentIcon from "@/public/images/titleIcons/heart.svg"
import smsCommentIcon from "@/public/images/titleIcons/sms.svg"
import DescriptionText from "./DescriptionText";
import Footer from "../components/Footer";
import Button from "../components/Button";
import UserCommentSlider from "./UserCommentSlider";
import Link from "next/link";
import Faq from "./Faq";
import CourseLevelDetail from "./CourseLevelDetail";
import HamburgerMenu from "../components/HamburgerMenu";

const groupClass = () => {
  return (
    <main className="bg-[#F8F8FB] w-full overflow-x-hidden">
      <Navbar></Navbar>
      <HamburgerMenu></HamburgerMenu>
      <section className="w-full  bg-[#212121] relative pb-4">
        <div className="absolute left-0 top-[-9.5rem]">
          <Image src={circles} alt="left circles" width={625} height={534}></Image>
        </div>

        <div className="relative w-[50%] lg-max:w-full mx-auto  pt-28">
          <div className="absolute left-0 top-1/3 w-[75px] h-[75px] lg-max:w-[49px] lg-max:h-[49px]">
            <Image src={educationIcon} alt="education icon" width={75} height={75}></Image>
          </div>
          <div className="absolute right-0 bottom-0 w-[75px] h-[75px] lg-max:w-[41px] lg-max:h-[41px]">
            <Image src={termiUserIcon} alt="termi user icon" ></Image>
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
        <div className="relative">
          
          <div className="bg-[#f8f8fb] w-[86%] lg-max:w-[91%] h-[115%] lg-max:h-[140%] absolute bottom-[-10.5rem]   left-[50%] translate-x-[-50%]  z-0  rounded-lg"></div>
          <video className="mx-auto mt-8 lg-max:mt-10 lg-max:px-8 z-0 relative rounded-3xl"poster="./images/termi/poster-video.png" preload="none" width={580} height={384}  controls>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="absolute lg-max:w-[50px] lg-max:h-[50px] z-40 top-[6rem] lg-max:top-[4.5rem] left-[46%] lg-max:left-[43%]">
            <Image src={playVideoIcon}  alt="play video icon"></Image>
          </div> */}
        </div>

          
      </section>
      <div className=" w-full relative z-10 mt-16 lg-max:mt-6">
        <section id="courses" className=" relative z-20">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            courses
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-12">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
              معرفی ک<span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">لاس ها</span>ی <span className="text-[#0CAC67]">گروهی</span> 
            </h2>
            <div className="absolute right-[40%] lg-max:right-[27%] top-[-10%] lg-max:w-[32px] lg-max:h-[31px]">
              <Image src={circleTitleIcon} alt="circle icon"></Image>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <CourseLevelDetail></CourseLevelDetail>
            {/* <CourseLevel level="A1" textLevelEn="Basic" textLevelFa="پایه" description={"در طول این سطح، زبان‌آموزها می‌توانند عبارت‌های اساسی مربوط به اطلاعات شخصی، کارهای روزمره و.. را درک کرده و از آنها استفاده کنند. در این دوره کتاب American English File Starter تدریس می‌شود."}></CourseLevel>
            
            <CourseLevel level="A2" textLevelEn="Elementary" textLevelFa="مبتدی" description={"در طول این سطح، زبان‌آموزها می‌توانند گفتگوهایی ساده‌ در مورد موضوع‌های آشنا انجام دهند و مکالمات مربوط به خرید و جغرافیای محلی را درک کنند. در این دوره کتاب American English File 1 تدریس می‌شود."}></CourseLevel>

            <CourseLevel level="B1" textLevelEn="Pre-Intermediate" textLevelFa="نسبتا متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند در گفتگوها و بحث‌های پیچیده‌تری شرکت کنند و نکته‌های اصلی و اساسی مکالمه را به راحتی متوجه شوند. در این دوره کتاب American English File 2 تدریس می‌شود."}></CourseLevel>
            
            <CourseLevel level="B2" textLevelEn="Intermediate" textLevelFa="متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند درمکالمه‌ها در مورد طیف گسترده‌ای از مطالب شرکت کنند ومتن‌های پیچیده را درک کنند و به‌ شکل موثر با افراد بومی ارتباط برقرار کنند. در این دوره کتاب American English File 3 تدریس می‌شود."}></CourseLevel>

            <CourseLevel level="C1" textLevelEn="Upper-Intermediate" textLevelFa="نسبتا پیشرفته" description={"در طول این سطح، زبان‌آموزها می‌توانند به طور موثر برای اهداف آکادمیک و حرفه‌ای از دانش زبانی خود استفاده کنند و با دقت بالا در تمامی بحث ها شرکت کنند. در این دوره کتاب American English File 4 تدریس می‌شود."}></CourseLevel>

            <CourseLevel level="C2" textLevelEn="Advanced" textLevelFa="پیشرفته" description={"این بالاترین سطح مهارت آموزش زبان است. زبان آموزها می‌توانند هر چیزی را که می‌خوانند یا می‌شنوند، حتی در زمینه‌های پیچیده، آکادمیک و انتزاعی درک کنند.در این دوره کتاب American English File 5 تدریس می‌شود."}></CourseLevel> */}

          </div>
        </section>

        <section id="road-map" className="mt-8">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            road map
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-12">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
                <span className="text-[#0CAC67]">نقشه راه </span>یاد<span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">گیری ز</span>بان انگلیسی
            </h2>
          </div>
          <div className="w-[85%] mx-[7rem] lg-max:mx-4 flex justify-center items-center mt-24 lg-max:mt-[11rem] gap-x-4 pb-24 flex-wrap gap-y-[13.5rem] lg-max:gap-y-5 relative lg-max:flex-col" >
            <div className="absolute bottom-[-4rem] w-full right-[-3rem] z-20 lg-max:hidden">
              <Image src={roadMap} alt="road map" width={1100} ></Image>
            </div>
            <div className="absolute md:hidden">
              <Image src={roadMapMobile} alt="road map" width={85} height={85} ></Image>
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
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            ADVANTAGE
            </h2>
          </div>
          <div className="w-full relative z-10 mb-16">
            <div className="relative w-fit mx-auto">
              <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
                  <span className="text-[#0CAC67]">مزایای </span >شرکت د<span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">ر کلاس</span> های همیارزبان
              </h2>
              <div className="absolute right-0 top-[-5%] lg-max:right-[15%] lg-max:w-[32px] lg-max:h-[31px]">
                <Image src={circleTitleIcon} alt="circle icon"></Image>
              </div>
            </div>

            <div className="absolute left-1/3 top-[-3rem] lg-max:hidden">
              <Image src={greenCircleLeft} alt="circle icon"></Image>
            </div>
            <div className="absolute right-[33%] top-[-2rem] lg-max:top-[-3rem] lg-max:right-1/4">
              <Image src={greenCircleRight} alt="circle icon"></Image>
            </div>
            <div className="absolute left-[30%] top-[1rem] lg-max:left-1/4 lg-max:top-[-2rem]">
              <Image src={yellowCircle} alt="circle icon"></Image>
            </div>
          </div>
          <div className="flex flex-col px-[10rem] lg-max:px-4 gap-y-5 bg-[#0CAC67] h-[31.25rem] lg-max:h-[40rem] w-full">
            <div className="flex justify-start gap-x-8 relative z-10 lg-max:flex-wrap lg-max:flex-col lg-max:gap-y-4 ">
              <AdvantageCard
                imageUrl={teachers}
                title="یادگیری با اساتید مجرب"
                text="اساتید همیارزبان از میان بهترین‌ها از سراسر ایران انتخاب می‌شوند."
              ></AdvantageCard>
              <div className="lg-max:flex lg-max:justify-end">
                <AdvantageCard
                    imageUrl={level}
                    title="تعیین سطح رایگان"
                    text="بصورت کاملا آنلاین در هر کجا که هستید تعیین سطح بدید."
                  ></AdvantageCard>
              </div>

            </div>
            <div className="flex justify-end gap-x-8 relative z-10 lg-max:flex-wrap lg-max:flex-col lg-max:gap-y-4  ">
              <AdvantageCard
                imageUrl={onlineClass}
                title="شرکت در کلاس‌های آنلاین"
                text="کافیه به اینترنت وصل بشید و در کلاس شرکت کنید."
              ></AdvantageCard>
              <div className="lg-max:flex lg-max:justify-end">
                <AdvantageCard
                  imageUrl={dgree}
                  title="ارزیابی با آزمون پایانی"
                  text="میزان یادگیری شما با آزمون پایانی سنجیده می‌شود."
                ></AdvantageCard>
              </div>

            </div>
            <div className="bg-[#f8f8fb]  mt-[-10rem] lg-max:mt-[-1rem] absolute w-[85%] lg-max:w-[91%] lg-max:right-4 right-[7rem] z-0 h-[33.75rem] lg-max:[38rem] rounded-lg"></div>
            <Link href={'#courses'} className="w-[175px] h-[52px] mx-auto mt-10">
              <Button color="outlinep" arrow direction="up">مشاهده کلاس ها</Button>
            </Link>

          </div>
        </section>

        <section id="comments" className="mt-24">
       
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
          user comments
          </h2>
          <div className="w-full relative z-10 mb-16  ">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
               نظر <span className="text-[#0CAC67] ">زبان <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">آموزهای</span></span> همیارزبان
            </h2>
            <div className="absolute right-[40%] top-[-10%] lg-max:hidden">
              <Image src={circleTitleIcon} alt="circle icon"></Image>
            </div>
            <div className="absolute right-[36%] top-[-5%] lg-max:top-8 lg-max:right-[15%]">
              <Image src={heartCommentIcon} alt="heart icon"></Image>
            </div>
            <div className="absolute left-[10%] top-0 md:hidden">
              <Image src={smsCommentIcon} alt="sms icon" width={32} height={32}></Image>
            </div>
          </div>
          <UserCommentSlider></UserCommentSlider>
        </section>
        
        <section id="faq" className="mb-[6.25rem] lg-max:mb-20 w-full mt-24">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            faq
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-9">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
                <span className="text-[#0CAC67]"> سوالاتی</span>   که شاید  <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">در ذه</span>ن شما هم باشد
            </h2>
            <div className="absolute right-[37%] lg-max:right-[15%] top-[-5%] lg-max:w-[32px] lg-max:h-[31px]">
              <Image src={circleTitleIcon} alt="circle icon"></Image>
            </div>
            <div className="absolute left-1/3 top-[-3rem] lg-max:hidden">
              <Image src={greenCircleLeft} alt="circle icon"></Image>
            </div>
            <div className="absolute right-[33%] top-[-2rem] lg-max:top-[-3rem] lg-max:right-1/4">
              <Image src={greenCircleRight} alt="circle icon"></Image>
            </div>
            <div className="absolute left-[30%] top-[1rem] lg-max:left-1/4 lg-max:top-[-2rem]">
              <Image src={yellowCircle} alt="circle icon"></Image>
            </div>
          </div>
          <Faq></Faq>
        </section>
        <section className="pb-[3.25rem] px-[6.5rem] lg-max:px-8">
          <DescriptionText></DescriptionText>
        </section>
        <Footer></Footer>
        <section className="flex justify-between py-4 fixed bottom-0 bg-white w-full px-[6.5rem] z-50 lg-max:hidden">
          <div className="flex gap-x-10 items-center lg-max:hidden">
            <Link href={"#courses"} className="text-[#818181] hover:text-[#2E2E2E]" >کلاس های گروهی انگلیسی</Link>
            <Link href={"#road-map"} className="text-[#818181] hover:text-[#2E2E2E]" >نقشه راه</Link>
            <Link href={"#advantage"} className="text-[#818181] hover:text-[#2E2E2E]" >مزایای کلاس ها</Link>
            <Link href={"#comments"} className="text-[#818181] hover:text-[#2E2E2E]" >نظرات</Link>
            <Link href={"#faq"} className="text-[#818181] hover:text-[#2E2E2E]" >سوالات</Link>
          </div>
          <div className="flex gap-x-6 lg-max:hidden">
            <div className="w-[175px] h-[52px]">
              <Button color={"primary"}>تعیین سطح</Button>
            </div>
            <div className="w-[175px] h-[52px]">
              <Button color={"outlinep"}>نیاز به مشاوره</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default groupClass;
