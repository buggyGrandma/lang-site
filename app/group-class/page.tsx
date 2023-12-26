
import React from 'react'
import Navbar from '../components/Navbar'
// import introVideo from 'public/videos/intro.mp4';
import vTemp from '@/public/videos/v-temp.png'
import Image from 'next/image'
import CourseLevel from './CourseLevel'
import RoadmapCard from './RoadmapCard'
import AdvantageCard from './AdvantageCard'
import teachers from '@/public/images/advantageCards/teachers.svg'
import level from '@/public/images/advantageCards/level.svg'
import onlineClass from '@/public/images/advantageCards/online-class.svg'
import dgree from '@/public/images/advantageCards/dgree.svg'
import Accordion from './Accordion'
import DescriptionText from './DescriptionText'
import Footer from '../components/Footer'

const groupClass = () => {
  return (
    <main className='bg-[#F8F8FB]'>
      <Navbar></Navbar>
      <section className='w-full h-[40rem] bg-[#212121]'>
        <h1 className='font-iranSansBold font-bold text-[2rem] text-[#1FD998] text-center leading-relaxed mb-4 pt-24'> ثبت نام کلاس های گروهی زبان <span className='bg-[#2E2E2E] text-white p-1'>آنلاین </span></h1>
        <h2 className='font-iranSans text-[#B7B7B7] text-xl text-center font-medium'>یک بار برای همیشه به انگلیسی مسلط شوید</h2>
        {/* <video controls width="640" height="360">
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <button className='w-[175px] h-[52px] bg-red-600 flex justify-center items-center mx-auto mt-8 '>replace me!</button>
        <Image src={vTemp} alt='video should be here ' width={580} height={384} className='mx-auto mt-8 z-50 relative'></Image>
      </section>
      <div className=' w-full relative z-10 '> 
        <div className='bg-[#f8f8fb]  mt-[-10rem] absolute w-[85%] mx-[6.5rem] z-0 h-[700px] rounded-lg'>
        </div>
        <section className='flex flex-col space-y-4 pt-16'>
          <h2 className='text-center font-roboto text-[#8A8A8A45] uppercase fill-white stroke-[#8a8a8a45] tracking-[2.72px] text-[2rem] font-black leading-[3.5rem] z-50'>courses</h2>
          <CourseLevel text='A1'></CourseLevel>
          <CourseLevel text='A2'></CourseLevel>
          <CourseLevel text='B1'></CourseLevel>
          <CourseLevel text='B2'></CourseLevel>
          <CourseLevel text='C1'></CourseLevel>
          <CourseLevel text='C2'></CourseLevel>
        </section>
        <section className='w-[85%] mx-[7rem] flex justify-center items-center mt-24 gap-x-4 pb-24 flex-wrap gap-y-[12.5rem]'>
          <RoadmapCard></RoadmapCard>
          <RoadmapCard></RoadmapCard>
          <RoadmapCard></RoadmapCard>
          <RoadmapCard></RoadmapCard>
          <RoadmapCard></RoadmapCard>
          <RoadmapCard></RoadmapCard>
        </section>
        <section className='flex flex-col px-[10rem] gap-y-5 bg-[#0CAC67] h-[31.25rem] w-full'>
          <div className='flex justify-start gap-x-8 relative z-10'>
            <AdvantageCard imageUrl={teachers} title='یادگیری با اساتید مجرب' text='اساتید همیارزبان از میان بهترین‌ها از سراسر ایران انتخاب می‌شوند.'></AdvantageCard>
            <AdvantageCard imageUrl={level} title='تعیین سطح رایگان' text='بصورت کاملا آنلاین در هر کجا که هستید تعیین سطح بدید.'></AdvantageCard>
          </div>
          <div className='flex justify-end gap-x-8 relative z-10'>
            <AdvantageCard imageUrl={onlineClass} title='شرکت در کلاس‌های آنلاین' text='کافیه به اینترنت وصل بشید و در کلاس شرکت کنید.'></AdvantageCard>
            <AdvantageCard imageUrl={dgree} title='ارزیابی با آزمون پایانی' text='میزان یادگیری شما با آزمون پایانی سنجیده می‌شود.'></AdvantageCard>
          </div>
          <div className='bg-[#f8f8fb]  mt-[-10rem] absolute w-[85%] right-[7rem] z-0 h-[33.75rem] rounded-lg'>
          </div>
        </section>
        
        <section className='mb-[6.25rem] w-full'>
          <Accordion></Accordion>
        </section>
        <section className='pb-[3.25rem] px-[6.5rem]'>
          <DescriptionText></DescriptionText>
        </section>
        <Footer></Footer>
      </div>
      
      
    </main>
  )
}

export default groupClass