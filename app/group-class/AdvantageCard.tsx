import Image from 'next/image';
import React from 'react'

interface AdvantageCardProps {
    title: string;
    text: string;
    imageUrl: string;
  }
  
  const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, text, imageUrl }) => {
    return (
      <div className="flex flex-col gap-y-4 w-[24rem] items-start justify-center py-8 px-6 bg-white rounded">
        <div className='flex items-center justify-center'>
          <Image src={imageUrl} alt={title} width={83} height={65}  />
          <h3 className='text-[#282828] font-iranSans text-xl font-bold'>{title}</h3>
        </div>
        <p className="mr-2 text-[#979797] font-iranSans font-medium text-xs ">{text}</p>
      </div>
    );
  };

export default AdvantageCard