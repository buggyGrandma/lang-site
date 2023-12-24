
import React from 'react'
import Navbar from '../components/Navbar'
// import introVideo from 'public/videos/intro.mp4';
import vTemp from '@/public/videos/v-temp.png'
import Image from 'next/image'
import CourseLevel from './CourseLevel'

const groupClass = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className='w-full h-[40rem] bg-[#212121]'>
        <h1 className='font-iranSans font-bold text-[2rem] text-[#1FD998] text-center leading-relaxed mb-4 pt-24'> ثبت نام کلاس های گروهی زبان <span className='bg-[#2E2E2E] text-white p-1'>آنلاین </span></h1>
        <h2 className='font-iranSans text-[#B7B7B7] text-xl text-center font-medium'>یک بار برای همیشه به انگلیسی مسلط شوید</h2>
        {/* <video controls width="640" height="360">
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <button className='w-[175px] h-[52px] bg-red-600 flex justify-center items-center mx-auto mt-8 '>replace me!</button>
      <Image src={vTemp} alt='video should be here ' width={580} height={384} className='mx-auto mt-8 z-50 relative'></Image>
      </section>
      <div className='bg-[#f8f8fb] w-full relative z-10 h-[700px]'> 
     
        <div className='bg-[#f8f8fb]  mt-[-10rem] absolute w-[85%] mx-[6.5rem] z-0 h-[700px] rounded-lg'>
        
        </div>
        <CourseLevel></CourseLevel>
      </div>
      
    </main>
  )
}

export default groupClass