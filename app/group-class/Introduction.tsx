"use client";
// import Button from "../components/Button";
// import Image from "next/image";
// import circles from "@/public/images/termi/circles.png";
// import educationIcon from "@/public/images/termi/education-icon.svg";
// import termiUserIcon from "@/public/images/termi/termi-user-icon.svg";
// const Introduction = () => {
//   return (
//     <section className="w-full  bg-[#212121] relative pb-4">
//       <div className="absolute left-0 top-[-9.5rem]">
//         <Image
//           src={circles}
//           alt="left circles"
//           width={625}
//           height={534}
//         ></Image>
//       </div>

//       <div className="relative w-[50%] lg-max:w-full mx-auto  pt-28">
//         <div className="absolute left-0 top-1/3 w-[75px] h-[75px] lg-max:w-[49px] lg-max:h-[49px]">
//           <Image
//             src={educationIcon}
//             alt="education icon"
//             width={75}
//             height={75}
//           ></Image>
//         </div>
//         <div className="absolute right-0 bottom-0 w-[75px] h-[75px] lg-max:w-[41px] lg-max:h-[41px] z-0">
//           <Image src={termiUserIcon} alt="termi user icon"></Image>
//         </div>
//         <h1 className="font-iranSansBold font-bold text-[2rem] lg-max:text-xl text-[#1FD998] text-center leading-[3.5rem] mb-4 lg-max:mb-6 z-10 relative">
//           {" "}
//           ثبت نام کلاس های گروهی زبان{" "}
//           <span className="bg-[#2E2E2E] text-white p-1">آنلاین </span>
//         </h1>
//         <h2 className=" text-[#B7B7B7] lg-max:text-base text-xl text-center font-medium">
//           یک بار برای همیشه به انگلیسی مسلط شوید
//         </h2>
//       </div>
//       <div className="w-[175px] h-[52px] mt-3 lg-max:mt-4 text-sm mx-auto">
//         <Button color="secondary" arrow direction="down" arrowposition="left">
//           مشاهده کلاس ها
//         </Button>
//       </div>
//       <div className="relative">
//         <div className="bg-[#f8f8fb] w-[86%] lg-max:w-[91%] h-[115%] lg-max:h-[140%] absolute bottom-[-10.5rem] left-[50%] translate-x-[-50%] z-0 rounded-lg"></div>
//         <video
//           className="mx-auto mt-8 lg-max:mt-10 lg-max:px-8 z-0 relative rounded-3xl"
//           poster="./images/termi/poster-video.png"
//           preload="none"
//           width={580}
//           height={384}
//           controls
//         >
//           <source src="/videos/intro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* <div className="absolute lg-max:w-[50px] lg-max:h-[50px] z-40 top-[6rem] lg-max:top-[4.5rem] left-[46%] lg-max:left-[43%]">
//         <Image src={playVideoIcon}  alt="play video icon"></Image>
//       </div> */}
//       </div>
//     </section>
//   );
// };

// export default Introduction;
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";
import circles from "@/public/images/termi/circles.png";
import educationIcon from "@/public/images/termi/education-icon.svg";
import termiUserIcon from "@/public/images/termi/termi-user-icon.svg";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

const Introduction = () => {
  const customEase = [0.25, 0.1, 0.25, 1.0];
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        window.scrollY >
        0 /* enter the scroll position to trigger the animation */
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        scale: 1,
        transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({ scale: 0 });
    }
  }, [isVisible, controls]);

  return (
    <section className="w-full  bg-[#212121] relative pb-4">
      <div className="absolute left-0 top-[-9.5rem]">
        <Image
          src={circles}
          alt="left circles"
          width={625}
          height={534}
        ></Image>
      </div>

      <div className="relative w-[50%] lg-max:w-full mx-auto  pt-28">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: customEase }}
          className="absolute left-0 top-1/3 w-[75px] h-[75px] lg-max:w-[49px] lg-max:h-[49px]"
        >
          <Image
            src={educationIcon}
            alt="education icon"
            width={75}
            height={75}
          ></Image>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: customEase }}
          className="absolute right-0 bottom-0 w-[75px] h-[75px] lg-max:w-[41px] lg-max:h-[41px] z-0"
        >
          <Image src={termiUserIcon} alt="termi user icon"></Image>
        </motion.div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: customEase }}
          className="font-iranSansBold font-bold text-[2rem] lg-max:text-xl text-[#1FD998] text-center leading-[3.5rem] mb-4 lg-max:mb-6 z-10 relative"
        >
          {" "}
          ثبت نام کلاس های گروهی زبان{" "}
          <span className="bg-[#2E2E2E] text-white p-1">آنلاین </span>
        </motion.h1>
        <h2 className=" text-[#B7B7B7] lg-max:text-base text-xl text-center font-medium">
          یک بار برای همیشه به انگلیسی مسلط شوید
        </h2>
      </div>
      <div className="w-[175px] h-[52px] mt-3 lg-max:mt-4 text-sm mx-auto">
        <Button color="secondary" arrow direction="down" arrowposition="left">
          مشاهده کلاس ها
        </Button>
      </div>
      <div className="relative">
        <div className="bg-[#f8f8fb] w-[86%] lg-max:w-[91%] h-[115%] lg-max:h-[140%] absolute bottom-[-10.5rem] left-[50%] translate-x-[-50%] z-0 rounded-lg"></div>
        <video
          className="mx-auto mt-8 lg-max:mt-10 lg-max:px-8 z-0 relative rounded-3xl"
          poster="./images/termi/poster-video.png"
          preload="none"
          width={580}
          height={384}
          controls
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute lg-max:w-[50px] lg-max:h-[50px] z-40 top-[6rem] lg-max:top-[4.5rem] left-[46%] lg-max:left-[43%]">
        <Image src={playVideoIcon}  alt="play video icon"></Image>
      </div> */}
      </div>
    </section>
  );
};

export default Introduction;
