import React from 'react'
import chartIcon from '@/public/images/courseLevel/Chart.svg';
import calendarIcon from '@/public/images/courseLevel/Calendar.svg';
import dollarIcon from '@/public/images/courseLevel/Dollar.svg';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



interface CourseLevelProps {
  // courses: any;
  
  // textLevelEn: string;
  // textLevelFa: string;
  // description: string;
  id:string,
  title: string,
  level: string,
  status: string,
  introduction: string,
  nearestTime:string,
  imgSrc:string,
  lowestPrice:string,
  leftCapacity:string
}
const courseLevel: React.FC<CourseLevelProps> = ({id,title,introduction,imgSrc,nearestTime,level,lowestPrice,status,leftCapacity}) => {
 
  return (
    // <div>
    //    {courses.levelList((course:any) => 

    //  )}
    // </div>
  //   <div>
  //   {courses?.levelLists.map((course:any) => (
  //   <div key={course.id}>
  //     <div className='bg-white z-30 rounded w-full relative py-4 px-6 lg-max:px-0 flex justify-start items-center gap-x-6 '>
  //       <div className="yellow-gradient-box flex justify-center items-center w-36 h-24 lg-max:w-[45px] lg-max:h-[45px] rounded-2xl lg-max:rounded">
  //         {/* <p className="text-3xl font-roboto font-black text-white text- text-center lg-max:text-[26px] lg-max:font-extrabold">{level}</p> */}
  //         <Image src={course.imgSrc} alt='level' width={85} height={85}></Image>
  //       </div>
  //       <div className='flex lg-max:flex-col lg-max:gap-y-1'>
  //         <div className='flex flex-col gap-y-1 w-[50%] lg-max:w-full'>
  //           <div className='flex items-center gap-x-4'>
  //             <h2 className='font-iranSans text-lg font-bold text-[#282828]'> {course.title}</h2>
  //             <div className='text-[#0B9A5C] font-iranSans text-sm py-1 px-3 leading-4 bg-[#F3FBF7] rounded-[2.5rem] lg-max:hidden'>{course.status}</div>
  //           </div>
  //           <div className='flex gap-x-1 justify-start items-center lg-max:hidden'>
  //             <Image src={chartIcon} alt='chart icon'></Image>
  //             <p className='font-iranSans text-[#6B6B6B] text-xs font-medium'>{course.level}</p>
  //           </div>
  //           <p className='text-[#979797] text-sm font-medium font-iranSans lg-max:hidden text-start'>
  //             {course.introduction}
  //           </p>
  //         </div>
  //         <div className='flex flex-col gap-y-6'>
  //           <div className='flex items-center gap-x-2 font-medium lg-max:hidden'>
  //             <Image src={calendarIcon} alt='calendar icon'></Image>
  //             <p className='text-[#555] leading-4 font-iranSans text-[13px]'>نزدیک ترین زمان:</p>
  //             <p className='text-[#343434] text-sm leading-4 font-medium font-iranSans'>{course.nearestTime}</p>
  //           </div>
  //           <div className='flex items-center gap-x-2 font-medium lg-max:justify-between lg-max:w-full'>
  //             <Image src={dollarIcon} alt='dollar icon'></Image>
  //             <p className='text-[#555] leading-4 font-iranSans text-[13px] lg-max:text-xs'>شروع قیمت از:</p>
  //             <p className='text-[#282828] text-sm leading-4 font-medium font-iranSans lg-max:font-normal text-center'>
  //               <span className='text-[#0CAC67] font-iranSans text-lg font-medium leading-4 lg-max:text-base'>{course.lowestPrice} </span>
  //               تومان</p>
  //           </div>
  //         </div>
  //       </div>

  //       </div>
  //     </div>
  //   ))}
    
  // </div>
  <div id={id} className='bg-white z-30 rounded w-full relative   py-4 px-6 lg-max:px-0 flex justify-start items-center gap-x-6 '>
  <div className="yellow-gradient-box flex justify-center items-center w-36 h-24 lg-max:w-[45px] lg-max:h-[45px] rounded-2xl lg-max:rounded">
  <Image src={imgSrc} alt='level' width={85} height={85}></Image>
    {/* <p className="text-3xl font-roboto font-black text-white text- text-center lg-max:text-[26px] lg-max:font-extrabold">{level}</p> */}
  </div>
  <div className='flex lg-max:flex-col lg-max:gap-y-1 gap-x-8'>
    <div className='flex flex-col gap-y-1 w-[50%] lg-max:w-full'>
      <div className='flex items-center gap-x-4'>
        <h2 className='font-iranSans text-lg font-bold text-[#282828]'>{title}</h2>
        <div className='text-[#0B9A5C] font-iranSans text-sm py-1 px-3 leading-4 bg-[#F3FBF7] rounded-[2.5rem] lg-max:hidden'>{status}</div>
      </div>
      <div className='flex gap-x-1 justify-start items-center lg-max:hidden'>
        <Image src={chartIcon} alt='chart icon'></Image>
        <p className='font-iranSans text-[#6B6B6B] text-xs font-medium'>{level}</p>
      </div>
      <p className='text-[#979797] text-sm font-medium font-iranSans lg-max:hidden text-start'>
        {introduction}
      </p>
    </div>
    <div className='flex flex-col gap-y-6'>
      <div className='flex items-center gap-x-2 font-medium lg-max:hidden'>
        <Image src={calendarIcon} alt='calendar icon'></Image>
        <p className='text-[#555] leading-4 font-iranSans text-[13px]'>نزدیک ترین زمان:</p>
        <p className='text-[#343434] text-sm leading-4 font-medium font-iranSans'>{nearestTime}</p>
      </div>
      <div className='flex items-center gap-x-2 font-medium lg-max:justify-between lg-max:w-full'>
        <Image src={dollarIcon} alt='dollar icon'></Image>
        <p className='text-[#555] leading-4 font-iranSans text-[13px] lg-max:text-xs'>شروع قیمت از:</p>
        <p className='text-[#282828] text-sm leading-4 font-medium font-iranSans lg-max:font-normal'>
          <span className='text-[#0CAC67] font-iranSans text-lg font-medium leading-4 lg-max:text-base'>{lowestPrice} </span>
          تومان</p>
      </div>
      <div className='flex items-center gap-x-2 font-medium lg-max:justify-between lg-max:w-full'>
      <svg width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.5625C6.6225 9.5625 4.6875 7.6275 4.6875 5.25C4.6875 2.8725 6.6225 0.9375 9 0.9375C11.3775 0.9375 13.3125 2.8725 13.3125 5.25C13.3125 7.6275 11.3775 9.5625 9 9.5625ZM9 2.0625C7.245 2.0625 5.8125 3.495 5.8125 5.25C5.8125 7.005 7.245 8.4375 9 8.4375C10.755 8.4375 12.1875 7.005 12.1875 5.25C12.1875 3.495 10.755 2.0625 9 2.0625Z" fill="#808080"></path><path d="M15.4436 17.0625C15.1361 17.0625 14.8811 16.8075 14.8811 16.5C14.8811 13.9125 12.2411 11.8125 9.00109 11.8125C5.76109 11.8125 3.12109 13.9125 3.12109 16.5C3.12109 16.8075 2.86609 17.0625 2.55859 17.0625C2.25109 17.0625 1.99609 16.8075 1.99609 16.5C1.99609 13.2975 5.13859 10.6875 9.00109 10.6875C12.8636 10.6875 16.0061 13.2975 16.0061 16.5C16.0061 16.8075 15.7511 17.0625 15.4436 17.0625Z" fill="#808080"></path></svg>
        <p className='text-[#555] leading-4 font-iranSans text-[13px] lg-max:text-xs'>ظرفیت:</p>
        <p className='text-[#282828] text-sm leading-4 font-medium font-iranSans lg-max:font-normal'>
         {leftCapacity} نفر </p>
      </div>
    </div>
  </div>

</div>
  )
}

export default courseLevel