'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/navbar/logo2.png'
import callIcon from '@/public/images/navbar/call.svg'
import userIcon from '@/public/images/navbar/user.svg'
import hamburgerIcon from '@/public/images/navbar/hamburger.svg'
import Button from './Button';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#212121] px-[6.5rem] lg-max:px-8 h-[110px] flex items-center justify-between w-full lg-max:hidden">
      <div className="container mx-auto flex  items-center">
        <div className='w-[241px] pl-14'>
        <Link href="/" >
          <Image src={logo} alt='logo' width={241} height={50}  ></Image>
          </Link>
        </div>
        <ul className="flex gap-x-12">
          <li>
            <Link href="/home" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">صفحه اصلی
            </Link>
          </li>
          <li>
            <Link href="/group-class" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">کلاس گروهی
            </Link>
          </li>
          <li>
            <Link href="/private-class" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">کلاس خصوصی
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSans font-mediumBfont-iranSansBold text-sm">وبلاگ
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">تماس با ما
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex gap-x-4'>
        <div className='w-[217px] py-2  gap-x-4 rounded bg-[#2E2E2E] flex justify-center items-center'>
          <div className='flex items-center gap-x-2  w-[76px]'>
            <Image src={callIcon} alt='call icon' width={18} height={18}  ></Image>
            <p className='text-sm font-iranSans font-medium text-[#979797]'>پشتیبانی</p>
          </div>
          <div className='bg-[#343434] w-[1px] h-full '>
          </div>
          <div className='w-[40%]'>
            <p className='text-[#C3C3C3] text-sm '>02165641236</p>
          </div> 
        </div>
        <div className='flex w-[143px] h-[40px] justify-center items-center'>
          <Button 
            color='primary'
          >
            <p className='text-[#fff]  text-sm font-iranSans font-bold'>ورود / ثبت نام</p>
            <Image src={userIcon} alt='user icon' width={24} height={24}></Image>
          </Button>
        </div>
      </div>
      {/* <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-red focus:outline-none"
        >
          <Image src={hamburgerIcon} alt='menu icon'></Image>
        </button>
      </div> */}
      {/* Responsive Menu */}
      {/* <div
        className={`lg:flex lg:items-center ${isMenuOpen ? 'fixed inset-0 bg-[#212121] z-50' : 'hidden'}`}
      >
        <div className="flex flex-col items-start p-8 gap-y-4">
          
        </div>
      </div> */}
     </nav>
  );
};

export default Navbar;
// 'use client'
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '@/public/images/navbar/logo2.png'
// import callIcon from '@/public/images/navbar/call.svg'
// import userIcon from '@/public/images/navbar/user.svg'
// import hamburgerIcon from '@/public/images/navbar/hamburger.svg'
// import Button from './Button';
// import { useState } from 'react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <nav className="bg-[#212121] px-[6.5rem] lg-max:px-8 h-[110px] flex items-center justify-between w-full ">
//       <div className="container mx-auto flex  items-center lg-max:hidden">
//         <div className='w-[241px] pl-14'>
//           <Link href="/" >
//             <Image src={logo} alt='logo' width={241} height={50}  ></Image>
//           </Link>
//         </div>
//         {isMenuOpen ? (
//           <ul className="flex flex-col gap-y-6 absolute top-[110px] left-0 w-full  bg-[#212121] z-10">
//             <li>
//               <Link href="/home" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">صفحه اصلی
//               </Link>
//             </li>
//             <li>
//               <Link href="/group-class" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">کلاس گروهی
//               </Link>
//             </li>
//             <li>
//               <Link href="/private-class" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">کلاس خصوصی
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSans font-mediumBfont-iranSansBold text-sm">وبلاگ
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact-us" className="text-[#818181] hover:text-[#0CAC67] hover:underline hover:underline-offset-[1rem] decoration-[#0CAC67] decoration-[1.5px] font-iranSansBold font-medium text-sm">تماس با ما
//               </Link>
//             </li>
//           </ul>
//         ) : null}
//         <div className='lg-max:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <Image src={hamburgerIcon} alt='menu' width={24} height={24}></Image>
//         </div>
//       </div>
//       <div className='flex gap-x-4'>
//         <div className='w-[217px] py-2  gap-x-4 rounded bg-[#2E2E2E] flex justify-center items-center'>
//           <div className='flex items-center gap-x-2  w-[76px]'>
//             <Image src={callIcon} alt='call icon' width={18} height={18}  ></Image>
//             <p className='text-sm font-iranSans font-medium text-[#979797]'>پشتیبانی</p>
//           </div>
//           <div className='bg-[#343434] w-[1px] h-full '></div>
//           <div className='w-[40%]'>
//             <p className='text-[#C3C3C3] text-sm '>02165641236</p>
//           </div> 
//         </div>
//         <div className='flex w-[143px] h-[40px] justify-center items-center'>
//           <Button 
//             color='primary'
//           >
//             <p className='text-[#fff]  text-sm font-iranSans font-bold'>ورود / ثبت نام</p>
//             <Image src={userIcon} alt='user icon' width={24} height={24}></Image>
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;