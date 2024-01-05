import React from 'react'
import Button from '../components/Button'

interface CourseLevelTableProps {

}

const CourseLevelTable = ( {children,
}: {
  children: React.ReactNode;
}) => {
  return (
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
          {children}
        </table>
  )
}

export default CourseLevelTable