import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo2.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#212121] px-[6.5rem] pt-8 h-[750px]">
      <div className="container mx-auto flex  items-center">
        <div className='w-[241px]'>
        <Link href="/" >
          <Image src={logo} alt='logo' width={241} height={50}  ></Image>
          </Link>
        </div>
        <ul className="flex space-x-12">
          <li>
            <Link href="/home" className="text-[#818181] pl-12 pr-14 font-iranSans">صفحه اصلی
             
            </Link>
          </li>
          <li>
            <Link href="/group-class" className="text-[#818181] font-iranSans">کلاس گروهی
             
            </Link>
          </li>
          <li>
            <Link href="/private-class" className="text-[#818181] font-iranSans">کلاس خصوصی
             
            </Link>
          </li>
         
          <li>
            <Link href="/blog" className="text-[#818181] font-iranSans">وبلاگ
             
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-[#818181] font-iranSans">تماس با ما
             
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
