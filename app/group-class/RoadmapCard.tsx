import React from 'react'

interface RoadmapCardProps {
  // title: string,
  // level:string,
  // term:string,

}

const RoadmapCard:React.FC<RoadmapCardProps> = () => {
  return (
    <div className='flex flex-col w-[31%] lg-max:w-full bg-white/60 rounded-[20px] backdrop-blur-[49.5px] border border-[#0051b5]/[0.13] pb-7 pl-4'>
        <div className='flex justify-center items-center mx-auto bg-[#E9F0F8] py-2 px-8 w-[6.5rem] rounded-b-[10px] '>
            <p className='font-iranSans text-sm text-[#509CF9] font-medium text-center'>مبتدی</p>
        </div>
        <div className='flex justify-end items-center pl-7 gap-x-3'>
          <div className='flex flex-col '>
            <h3 className='text-[#282828] font-iranSans font-extrabold text-lg text-center lg-max:text-left'>
              basic
            </h3>
            <div className='flex justify-center items-center'>
              <div className='border-[#509cf9]/[0.19] py-2 px-4 w-[4rem] h-[2rem] border rounded-[39px] '>
                <p className='text-[#509CF9] font-iranSans text-xs font-medium'>
              4 ترم
                </p>
              </div>
              <div className='md:hidden'>
                <p className='text-[#818181] font-roboto text-sm font-bold '>parts A B C D</p>
              </div>
              
            </div>
 
          </div>
          <div className='w-[4rem] h-[4rem] rounded-[20px] bg-[#0052B5]/[0.10] ml flex justify-center items-center'>
            <p className='text-[#509CF9] font-extrabold text-[1.75rem] text-center mt-1'>A1</p>
          </div>

        </div>
        <div className='flex flex-col items-end justify-end gap-y-2 ml-10 lg-max:hidden'>
          <div className='flex justify-center items-center gap-x-3'>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 1 (lessons 1-3)</p>
            <div className='w-2 h-2 rounded-full bg-[#E3EBF6]'></div>
          </div>
          <div className='flex justify-center items-center gap-x-3'>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 2 (lessons 4-6)</p>
            <div className='w-2 h-2 rounded-full bg-[#E3EBF6]'></div>
          </div>
          <div className='flex justify-center items-center gap-x-3'>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 3 (lessons 7-9)</p>
            <div className='w-2 h-2 rounded-full bg-[#E3EBF6]'></div>
          </div>
          <div className='flex justify-center items-center gap-x-3'>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 4 (lessons 10-12)</p>
            <div className='w-2 h-2 rounded-full bg-[#E3EBF6]'></div>
          </div>
        </div>

                   {/* 
  
             */}

        {/* <div className='flex justify-end lg-max:justify-center w-full gap-x-3'>




        </div> */}

    </div>
    
  )
}

export default RoadmapCard