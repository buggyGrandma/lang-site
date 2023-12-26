import React from 'react'

function RoadmapCard() {
  return (
    <div className='flex flex-col w-[31%] bg-white/60 rounded-[20px] backdrop-blur-[49.5px] border border-[#0051b5]/[0.13] pb-7'>
        <div className='flex justify-center items-center mx-auto bg-[#E9F0F8] py-2 px-8 w-[6.5rem] rounded-b-[10px] '>
            <p className='font-iranSans text-sm text-[#509CF9] font-medium text-center'>مبتدی</p>
        </div>
        <h3 className='text-[#282828] font-iranSans font-extrabold text-lg text-center'>
          basic
        </h3>
        <div className='flex justify-end w-full gap-x-3'>
          <div className='flex flex-col items-end gap-y-4 '>
          <div className='border-[#509cf9]/[0.19] py-2 px-4 w-[4rem] h-[2rem] border rounded-[39px] '>
            <p className='text-[#509CF9] font-iranSans text-xs font-medium'>
          4 ترم
            </p>
          </div>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 1 (lessons 1-3)</p>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 2 (lessons 4-6)</p>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 3 (lessons 7-9)</p>
            <p className='text-[#555] text-[13px] font-bold leading-10'>Pre-intermediate 4 (lessons 10-12)</p>
          </div>

          <div className='w-[4rem] h-[4rem] rounded-[20px] bg-[#0052B5]/[0.10] flex justify-center items-center'>
            <p className='text-[#509CF9] font-extrabold text-[1.75rem]'>A1</p>
          </div>

        </div>

    </div>
    
  )
}

export default RoadmapCard