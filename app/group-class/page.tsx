//next
import Link from "next/link";
import Image from "next/image";
//components
import Introduction from "./Introduction";
import CourseLevelDetail from "./courses/CourseLevelDetail";
import RoadmapCard from "./RoadmapCard";
import AdvantageCard from "./AdvantageCard";
import UserCommentSlider from "./UserCommentSlider";
import Faq from "./Faq";
import DescriptionText from "./DescriptionText";
import Button from "../components/Button";
import QuickAccess from "./QuickAccess";
//images and icons
import roadMap from "@/public/images/roadmap/road-map.png";
import roadMapMobile from "@/public/images/roadmap/road-map-mobile.png";
import CircleIcon from "@/public/images/titleIcons/CircleIcon";
import GreenCircleLeft from "@/public/images/titleIcons/GreenCircleLeft";
import GreenCircleRight from "@/public/images/titleIcons/GreenCircleRight";
import YellowCircle from "@/public/images/titleIcons/YellowCircle";
import SmsCommentIcon from "@/public/images/titleIcons/SmsCommentIcon";
import HeartCommentIcon from "@/public/images/titleIcons/HeartCommentIcon";
import TeachersIcon from "@/public/images/advantageCards/TeachersIcon";
import LevelIcon from "@/public/images/advantageCards/LevelIcon";
import OnlineClassIcon from "@/public/images/advantageCards/OnlineClassIcon";
import DgreeIcon from "@/public/images/advantageCards/DgreeIcon";

const groupClass = () => {
  return (
    <>
      <Introduction></Introduction>
      <div className=" w-full relative z-10 mt-16 lg-max:mt-6">
        <section id="courses" className=" relative z-20">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            courses
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-12">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
              معرفی ک
              <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">
                لاس ها
              </span>
              ی <span className="text-[#0CAC67]">گروهی</span>
            </h2>
            <div className="absolute right-[40%] lg-max:right-[27%] top-[-10%] lg-max:w-[32px] lg-max:h-[31px]">
              <CircleIcon />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <CourseLevelDetail></CourseLevelDetail>
          </div>
        </section>

        <section id="road-map" className="mt-8">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            road map
          </h2>
          <div className="w-full relative z-10 mb-16 lg-max:mb-12">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
              <span className="text-[#0CAC67]">نقشه راه </span>یاد
              <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">
                گیری ز
              </span>
              بان انگلیسی
            </h2>
          </div>
          <div className="w-[85%] mx-[7rem] lg-max:mx-4 flex justify-center items-center mt-24 lg-max:mt-[11rem] gap-x-4 pb-24 flex-wrap gap-y-[13.5rem] lg-max:gap-y-5 relative lg-max:flex-col">
            <div className="absolute bottom-[-4rem] w-full right-[-3rem] z-20 lg-max:hidden">
              <Image src={roadMap} alt="road map" width={1100}></Image>
            </div>
            <div className="absolute md:hidden">
              <Image
                src={roadMapMobile}
                alt="road map"
                width={85}
                height={85}
              ></Image>
            </div>
            <RoadmapCard
              title={"نسبتا متوسط"}
              level={"Basic"}
              term={""}
              bgColor={""}
              textColor="text-[#509CF9]"
              borderColor={"border-[#509CF9]"}
            ></RoadmapCard>
            <RoadmapCard
              title={"مبتدی"}
              level={"Elementary"}
              term={""}
              bgColor={""}
              textColor={"text-[#ff6060]"}
              borderColor={"border-[#ff6060]"}
            ></RoadmapCard>
            <RoadmapCard
              title={"مبتدی"}
              level={"Elementary"}
              term={""}
              bgColor={""}
              textColor={"[#ff6060]"}
              borderColor={"border-[#ff6060]"}
            ></RoadmapCard>
            <RoadmapCard
              title={"مبتدی"}
              level={"Elementary"}
              term={""}
              bgColor={""}
              textColor={"[#ff6060]"}
              borderColor={""}
            ></RoadmapCard>
            <RoadmapCard
              title={"مبتدی"}
              level={"Elementary"}
              term={""}
              bgColor={""}
              textColor={"[#ff6060]"}
              borderColor={""}
            ></RoadmapCard>
            <RoadmapCard
              title={"مبتدی"}
              level={"Elementary"}
              term={""}
              bgColor={""}
              textColor={"[#ff6060]"}
              borderColor={""}
            ></RoadmapCard>
            {/* <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard>
            <RoadmapCard></RoadmapCard> */}
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
                <span className="text-[#0CAC67]">مزایای </span>شرکت د
                <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">
                  ر کلاس
                </span>{" "}
                های همیارزبان
              </h2>
              <div className="absolute right-0 top-[-5%] lg-max:right-[15%] lg-max:w-[32px] lg-max:h-[31px]">
                <CircleIcon />
              </div>
            </div>

            <div className="absolute left-1/3 top-[-3rem] lg-max:hidden">
              <GreenCircleLeft />
            </div>
            <div className="absolute right-[33%] top-[-2rem] lg-max:top-[-3rem] lg-max:right-1/4">
              <GreenCircleRight />
            </div>
            <div className="absolute left-[30%] top-[1rem] lg-max:left-1/4 lg-max:top-[-2rem]">
              <YellowCircle />
            </div>
          </div>
          <div className="flex flex-col px-[10rem] lg-max:px-4 gap-y-5 bg-[#0CAC67] h-[31.25rem] lg-max:h-[40rem] w-full">
            <div className="flex justify-start gap-x-8 relative z-10 lg-max:flex-wrap lg-max:flex-col lg-max:gap-y-4 ">
              <AdvantageCard
                title="یادگیری با اساتید مجرب"
                text="اساتید همیارزبان از میان بهترین‌ها از سراسر ایران انتخاب می‌شوند."
              >
                <TeachersIcon />
              </AdvantageCard>
              <div className="lg-max:flex lg-max:justify-end">
                <AdvantageCard
                  title="تعیین سطح رایگان"
                  text="بصورت کاملا آنلاین در هر کجا که هستید تعیین سطح بدید."
                >
                  <LevelIcon />
                </AdvantageCard>
              </div>
            </div>
            <div className="flex justify-end gap-x-8 relative z-10 lg-max:flex-wrap lg-max:flex-col lg-max:gap-y-4  ">
              <AdvantageCard
                title="شرکت در کلاس‌های آنلاین"
                text="کافیه به اینترنت وصل بشید و در کلاس شرکت کنید."
              >
                <OnlineClassIcon />
              </AdvantageCard>
              <div className="lg-max:flex lg-max:justify-end">
                <AdvantageCard
                  title="ارزیابی با آزمون پایانی"
                  text="میزان یادگیری شما با آزمون پایانی سنجیده می‌شود."
                >
                  <DgreeIcon />
                </AdvantageCard>
              </div>
            </div>
            <div className="bg-[#f8f8fb]  mt-[-10rem] lg-max:mt-[-1rem] absolute  left-[50%] translate-x-[-50%] w-[85%] lg-max:w-[91%]  z-0 h-[33.75rem] lg-max:[38rem] rounded-lg"></div>
            <Link
              href={"#courses"}
              className="w-[175px] h-[52px] mx-auto mt-10"
            >
              <Button color="outlinep" arrow direction="up">
                مشاهده کلاس ها
              </Button>
            </Link>
          </div>
        </section>

        <section id="comments" className="mt-24">
          <h2 className="text-center text-fill-title font-roboto uppercase tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-40 text-white lg-max:text-xl lg-max:tracking-[1.7px]">
            user comments
          </h2>
          <div className="w-full relative z-10 mb-16  ">
            <h2 className="text-[#343434] text-center font-iranSansBold font-bold text-2xl lg-max:text-base">
              نظر{" "}
              <span className="text-[#0CAC67] ">
                زبان{" "}
                <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">
                  آموزهای
                </span>
              </span>{" "}
              همیارزبان
            </h2>
            <div className="absolute right-[40%] top-[-10%] lg-max:hidden">
              <CircleIcon />
            </div>
            <div className="absolute right-[36%] top-[-5%] lg-max:top-8 lg-max:right-[15%]">
              <HeartCommentIcon />
            </div>
            <div className="absolute left-[10%] top-0 md:hidden">
              <SmsCommentIcon />
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
              <span className="text-[#0CAC67]"> سوالاتی</span> که شاید{" "}
              <span className="underline underline-offset-[1.5rem] lg-max:underline-offset-[1rem] decoration-[#0CAC67] decoration-4 lg-max:decoration-2">
                در ذه
              </span>
              ن شما هم باشد
            </h2>
            <div className="absolute right-[37%] lg-max:right-[15%] top-[-5%] lg-max:w-[32px] lg-max:h-[31px]">
              <CircleIcon />
            </div>
            <div className="absolute left-1/3 top-[-3rem] lg-max:hidden">
              <GreenCircleLeft />
            </div>
            <div className="absolute right-[33%] top-[-2rem] lg-max:top-[-3rem] lg-max:right-1/4">
              <GreenCircleRight />
            </div>
            <div className="absolute left-[30%] top-[1rem] lg-max:left-1/4 lg-max:top-[-2rem]">
              <YellowCircle />
            </div>
          </div>
          <Faq></Faq>
        </section>
        <section className="pb-[3.25rem] px-[6.5rem] lg-max:px-8">
          <DescriptionText></DescriptionText>
        </section>
        <QuickAccess></QuickAccess>
      </div>
    </>
  );
};

export default groupClass;
