import React from 'react'
import chartIcon from '@/public/images/courseLevel/Chart.svg';
import calendarIcon from '@/public/images/courseLevel/Calendar.svg';
import dollarIcon from '@/public/images/courseLevel/Dollar.svg';
import Image from 'next/image';
interface CourseLevelProps {
  level: string;
  textLevelEn: string;
  textLevelFa: string;
  description: string;
  
}
const courseLevel: React.FC<CourseLevelProps> = ({ level, textLevelEn, textLevelFa, description }) => {
  return (
    <div className='bg-white z-30 rounded w-[85%] relative mx-[6.5rem] lg-max:mx-4  py-4 px-6 flex justify-start items-center gap-x-6 '>
      <div className="bg-gradient-to-r from-yellow-300 to-[#FFD98F] flex justify-center items-center p-4 rounded-2xl shadow-yellow w-20 h-20">
        <p className="text-lg text-white text- text-center">{level}</p>
      </div>
      <div className='flex lg-max:flex-col lg-max:gap-y-1'>
        <div className='flex flex-col gap-y-1 w-[40%] lg-max:w-full'>
          <div className='flex items-center gap-x-4'>
            <h2 className='font-iranSans text-lg font-bold text-[#282828]'>سطح {textLevelEn}</h2>
            <div className='text-[#0B9A5C] font-iranSans text-sm py-1 px-3 leading-4 bg-[#F3FBF7] rounded-[2.5rem] lg-max:hidden'>در حال ثبت نام</div>
          </div>
          <div className='flex gap-x-1 justify-start items-center lg-max:hidden'>
            <Image src={chartIcon} alt='chart icon'></Image>
            <p className='font-iranSans text-[#6B6B6B] text-xs font-medium'>{textLevelFa}</p>
          </div>
          <p className='text-[#979797] text-sm font-medium font-iranSans lg-max:hidden'>
            {description}
          </p>
        </div>
        <div className='flex flex-col gap-y-6'>
          <div className='flex items-center gap-x-2 font-medium lg-max:hidden'>
            <Image src={calendarIcon} alt='calendar icon'></Image>
            <p className='text-[#555] leading-4 font-iranSans text-[13px]'>نزدیک ترین زمان:</p>
            <p className='text-[#343434] text-sm leading-4 font-medium font-iranSans'>شنبه - سه شنبه ساعت: 12:30 تا 14:00</p>
          </div>
          <div className='flex items-center gap-x-2 font-medium lg-max:justify-between lg-max:w-full'>
            <Image src={dollarIcon} alt='dollar icon'></Image>
            <p className='text-[#555] leading-4 font-iranSans text-[13px] lg-max:text-xs'>شروع قیمت از:</p>
            <p className='text-[#282828] text-sm leading-4 font-medium font-iranSans lg-max:font-normal'>
              <span className='text-[#0CAC67] font-iranSans text-lg font-medium leading-4 lg-max:text-base'>540،0000 </span>
              تومان</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default courseLevel