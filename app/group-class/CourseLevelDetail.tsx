'use client'
import React, { useState } from 'react';
import arrowDown from '@/public/images/courseLevel/arrow-down.svg'
import arrowUp from '@/public/images/faq/arrow-up.svg'
import Image from 'next/image';
import Link from 'next/link';
import CourseLevel from './CourseLevel';
import Button from '../components/Button';
const CourseLevelDetail: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const levelData = [
    
    {
        level: (<CourseLevel level="A1" textLevelEn="Basic" textLevelFa="پایه" description={"در طول این سطح، زبان‌آموزها می‌توانند عبارت‌های اساسی مربوط به اطلاعات شخصی، کارهای روزمره و.. را درک کرده و از آنها استفاده کنند. در این دوره کتاب American English File Starter تدریس می‌شود."}></CourseLevel>
      ),
      levelDetail: (
        <table className='w-full text-black'>
          <thead className='w-full bg-[#EDEDED]  text-center'>
            <tr className=''>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>عنوان کلاس</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>کد کلاس</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>تعداد جلسات</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>زمان</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>نوع کلاس</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>شروع</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>هزینه</td>
              <td className='py-4 text-[#808080] text-[13px] font-iranSans font-medium'>وضعیت</td>
            </tr>
          </thead>
          <tbody className='text-center w-full bg-[#F8F8F8]'>
            <tr>
              <td className='text-[#282828] font-iranSans text-sm py-4'>کلاس گروهی Basic 1</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۹۹۹۹۲</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۱۳ جلسه</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>یکشنبه - سه شنبه ساعت ۲۰:۰۰ - ۲۱:۳۰</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>عادی(۶ هفته)</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۰۱ بهمن</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۶۸۰,۰۰۰ تومان</td>
              <td className='text-[#282828] font-iranSans text-sm py-4 flex justify-center items-center'>
                <div className='w-[112px] h-8'>
                  <Button color='secondary'>ثبت نام</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-[#282828] font-iranSans text-sm py-4'>کلاس گروهی Basic 1</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۹۹۹۹۲</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۱۳ جلسه</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>یکشنبه - سه شنبه ساعت ۲۰:۰۰ - ۲۱:۳۰</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>عادی(۶ هفته)</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۰۱ بهمن</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۶۸۰,۰۰۰ تومان</td>
              <td className='text-[#282828] font-iranSans text-sm py-4 flex justify-center items-center'>
                <div className='w-[112px] h-8'>
                  <Button color='secondary'>ثبت نام</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td className='text-[#282828] font-iranSans text-sm py-4'>کلاس گروهی Basic 1</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۹۹۹۹۲</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۱۳ جلسه</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>یکشنبه - سه شنبه ساعت ۲۰:۰۰ - ۲۱:۳۰</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>عادی(۶ هفته)</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۰۱ بهمن</td>
              <td className='text-[#282828] font-iranSans text-sm py-4'>۶۸۰,۰۰۰ تومان</td>
              <td className='text-[#282828] font-iranSans text-sm py-4 flex justify-center items-center'>
                <div className='w-[112px] h-8'>
                  <Button color='secondary'>ثبت نام</Button>
                </div>
              </td>
            </tr>         
          </tbody>
        </table>
      ),
    },

    {
        level: (
        
            <CourseLevel level="A2" textLevelEn="Elementary" textLevelFa="مبتدی" description={"در طول این سطح، زبان‌آموزها می‌توانند گفتگوهایی ساده‌ در مورد موضوع‌های آشنا انجام دهند و مکالمات مربوط به خرید و جغرافیای محلی را درک کنند. در این دوره کتاب American English File 1 تدریس می‌شود."}></CourseLevel>
            
      ),
      levelDetail: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و از یادگیری زبان انگلیسی لذت ببرید.
          {' '}<br></br>
          <Link href="https://zoom.us/download" className='text-[#0d6efd]'>دانلود zoom</Link>
        </p>
      ),
    },

    {
        level: ( <CourseLevel level="B1" textLevelEn="Pre-Intermediate" textLevelFa="نسبتا متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند در گفتگوها و بحث‌های پیچیده‌تری شرکت کنند و نکته‌های اصلی و اساسی مکالمه را به راحتی متوجه شوند. در این دوره کتاب American English File 2 تدریس می‌شود."}></CourseLevel>
     
      ),
      levelDetail: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و از یادگیری زبان انگلیسی لذت ببرید.
          {' '}<br></br>
          <Link href="https://zoom.us/download" className='text-[#0d6efd]'>دانلود zoom</Link>
        </p>
      ),
    },
    {
        level: (
            <CourseLevel level="B2" textLevelEn="Intermediate" textLevelFa="متوسط" description={"در طول این سطح، زبان‌آموزها می‌توانند درمکالمه‌ها در مورد طیف گسترده‌ای از مطالب شرکت کنند ومتن‌های پیچیده را درک کنند و به‌ شکل موثر با افراد بومی ارتباط برقرار کنند. در این دوره کتاب American English File 3 تدریس می‌شود."}></CourseLevel>

      ),
      levelDetail: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و از یادگیری زبان انگلیسی لذت ببرید.
          {' '}<br></br>
          <Link href="https://zoom.us/download" className='text-[#0d6efd]'>دانلود zoom</Link>
        </p>
      ),
    },
    {
        level: (
            <CourseLevel level="C1" textLevelEn="Upper-Intermediate" textLevelFa="نسبتا پیشرفته" description={"در طول این سطح، زبان‌آموزها می‌توانند به طور موثر برای اهداف آکادمیک و حرفه‌ای از دانش زبانی خود استفاده کنند و با دقت بالا در تمامی بحث ها شرکت کنند. در این دوره کتاب American English File 4 تدریس می‌شود."}></CourseLevel>

      ),
      levelDetail: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و از یادگیری زبان انگلیسی لذت ببرید.
          {' '}<br></br>
          <Link href="https://zoom.us/download" className='text-[#0d6efd]'>دانلود zoom</Link>
        </p>
      ),
    },
    {
        level: (
            <CourseLevel level="C2" textLevelEn="Advanced" textLevelFa="پیشرفته" description={"این بالاترین سطح مهارت آموزش زبان است. زبان آموزها می‌توانند هر چیزی را که می‌خوانند یا می‌شنوند، حتی در زمینه‌های پیچیده، آکادمیک و انتزاعی درک کنند.در این دوره کتاب American English File 5 تدریس می‌شود."}></CourseLevel>

      ),
      levelDetail: (
        <p>
          تمام کلاس‌های گروهی همیارزبان به صورت آنلاین و در پلتفرم زوم برگزار می‌شوند. برای بهتر برگزار شدن کلاس‌ها، پیشنهاد می‌شود نرم افزار زوم را بر روی سیستم‌های شخصی یا گوشی موبایل‌تان نصب داشته باشید. فقط کافی است راس ساعت تعیین شده برای هر جلسه از طریق پروفایل‌تان وارد کلاس شوید و از یادگیری زبان انگلیسی لذت ببرید.
          {' '}<br></br>
          <Link href="https://zoom.us/download" className='text-[#0d6efd]'>دانلود zoom</Link>
        </p>
      ),
    },


          
   
  ];

  return (
    <div className="w-[86%] lg-max:w-[91%] lg-max:mx-4 flex flex-col gap-y-4 mx-auto">
      {levelData.map((detail, index) => (
        <div key={index} className=" rounded-xl bg-white">
          <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full  pl-6 lg-max:px-4 rounded-md lg-max:flex-wrap">
            <div className=' w-full'>{detail.level}</div>
            <div className='w-44 h-11 lg-max:w-full lg-max:mb-4'>
              <Button color='primary2'>
                  {activeIndex === index ? <Image width={20} height={20} src={arrowUp} alt="Close" /> : <Image width={20} height={20} src={arrowDown} alt="Open" />} 
                  <p className='text-black text-sm font-medium'>مشاهده کلاس‌ها </p>
                </Button>
            </div>


          </button>
          {activeIndex === index && <div className='mb-6 mx-6 rounded-lg py-4 '>
           {detail.levelDetail}</div>}
        </div>
      ))}
    </div>
  );
};

export default CourseLevelDetail;
