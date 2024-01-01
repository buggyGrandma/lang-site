'use client'
import React, { useState } from 'react';
import commaIcon from '@/public/images/userCommentSlider/comma.svg'
import Image from 'next/image';
const UserCommentSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const comments = [
    <div key={0} className='w-full p-8 flex flex-col gap-y-4 shadow-whiteCustom'>
        <div className='flex justify-end items-center  gap-x-20'>
            <h3 className='text-black text-base font-medium font-iranSans text-center'>فرزاد باغبان زاده</h3>
            <Image src={commaIcon} alt='comma icon' width={60} ></Image>
        </div>
       <div className='py-4 px-8'>
        <p className='text-[#818181] text-sm leading-6 font-iranSans font-normal text-center '>اساتید به شدت با تجربه و مسلط هستند . با وجود گروهی بودن کلاس ها، به روند پیشرفت هر زبان آموز اهمیت زیادی داده میشود.</p>
       </div> 
    </div>,
    <div key={1} className='w-full p-8 flex flex-col gap-y-4 shadow-whiteCustom'>
        <div className='flex justify-end items-center  gap-x-20'>
            <h3 className='text-black text-base font-medium font-iranSans text-center'>زهرا کیانی</h3>
            <Image src={commaIcon} alt='comma icon' width={60} ></Image>
        </div>
       <div className='py-4 px-8'>
        <p className='text-[#818181] text-sm leading-6 font-iranSans font-normal text-center '>از بچگی تا الان که 25 سالمه خیلی کلاس های مختلف رو امتحان کردم ولی به جرات میگم که تا الان کلاس آنلاینی با این کیفیت ندیدم و خیلی راضی هستم.</p>
       </div> 
    </div>,
    <div key={2} className='w-full p-8 flex flex-col gap-y-4 shadow-whiteCustom'>
        <div className='flex justify-end items-center  gap-x-20'>
            <h3 className='text-black text-base font-medium font-iranSans text-center'>نیروانا زندی</h3>
            <Image src={commaIcon} alt='comma icon' width={60} ></Image>
        </div>
       <div className='py-4 px-8'>
        <p className='text-[#818181] text-sm leading-6 font-iranSans font-normal text-center '>تعامل در کلاس ها باعث میشه مطالب رو بهتر یادبگیریم و کلاس خسته کننده نباشه. ممنونم از تیم همیارزبان و استاد خوبم. </p>
       </div> 
    </div>,
    
    
  ];

  const nextComment = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevComment = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <div className="relative">
      <div className="text-center w-[28rem] lg-max:w-[91%] mx-auto bg-[#FAFAFA] lg-max:bg-white lg-max:rounded-[10px] mt-4 rounded-xl">{comments[activeIndex]}
      </div>
      <div className="flex w-full justify-center items-center gap-x-2 space-x-2">
        <button
          onClick={prevComment}
          className="lg-max:hidden group absolute top-1/3 right-[9.5rem] w-14 h-14 flex justify-center items-center rounded-full bg-white hover:bg-[#0CAC67] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 fill-current group-hover:text-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
              className="text-[#1C274C] group-hover:text-white"
            />
          </svg>
        </button>
        {comments.map((_, index) => (
          <div
            key={index}
            className={`w-10 h-1 mt-10 lg-max:mt-4 mx-auto rounded-[29px] ${
              index === activeIndex ? 'bg-[#0CAC67]' : 'bg-[#E1E1E1]'
            }`}
          />
        ))}
        <button onClick={nextComment} className="lg-max:hidden group absolute top-1/3 left-[9.5rem] w-14 h-14 flex justify-center items-center rounded-full bg-white hover:bg-[#0CAC67] transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 fill-current group-hover:text-[#1C274C] transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
              className="text-[#1C274C] group-hover:text-white"
            />
          </svg>
          
        </button>
      </div>
      
    </div>
  );
};

export default UserCommentSlider
