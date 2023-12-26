import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import callIcon from '@/public/images/footer/call.svg'
import smsIcon from '@/public/images/footer/sms.svg'
import circle from '@/public/images/footer/circle.svg'
import logo from '@/public/images/footer/footer-logo.png'
import eNamad from '@/public/images/footer/eNamad.svg'
import eDidital from '@/public/images/footer/eDigital.svg'
import twitter from '@/public/images/footer/Twitter.svg'
import instagram from '@/public/images/footer/Instagram.svg'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='flex px-[6.5rem] py-16 bg-white w-full justify-start gap-x-8'>
            <div className='w-[45%] '>
                <h2 className='text-[#444] font-iranSans font-medium text-base leading-8 mb-5'>همه روزه ( بجز روزهای تعطیل ) از 8 صبح تا ساعت 12 شب پاسخگو هستیم.</h2>
                <div className='bg-[#F6F6F6] w-full py-[2.25rem] px-[2.75rem] flex justify-between rounded-[20px]'>
                    <div className=' flex justify-center items-center gap-x-4'>
                        <p className='text-[#484848] font-medium font-iranSans text-lg'>۰۲۱۴۴۰۴۴۸۸۱</p>
                        <Image src={callIcon} alt='call icon' width={32} height={32}></Image>
                    
                    </div>
                    <div className=' flex justify-center items-center gap-x-4'>
                        <p className='text-[#383838] font-medium font-iranSans text-lg'>hamyarzaban@gmail.com</p>
                        <Image src={smsIcon} alt='sms icon' width={32} height={32}></Image>
                    </div>
                </div>
            </div>
            <div className='bg-[#EEE] w-[1px]'>

            </div>
            <div className='w-[45%] flex justify-start gap-x-16'>
                <div className='flex flex-col items-start '>
                    <div className='flex gap-x-2 justify-center items-center mb-[0.875rem]'>
                        <Image src={circle} alt='circle' width={8} height={8}></Image>
                        <h3 className='text-[#444] font-iranSans font-medium text-base leading-8'>دسترسی سریع</h3>
                    </div>
                    <div className='flex flex-col '>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>انتخاب استاد</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>تماس با ما</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>ثبت‌نام استاد</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>قوانین و مقررات</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>درباره ما</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>وبلاگ</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>سوالات متداول</Link>
                        <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>اپلیکیشن همیارزبان</Link>
                    </div>

                </div>
                <div className='flex flex-col items-start '>
                    <div className='flex gap-x-2 justify-center items-center mb-[0.875rem]'>
                        <Image src={circle} alt='circle' width={8} height={8}></Image>
                        <h3 className='text-[#444] font-iranSans font-medium text-base leading-8'>آموزش زبان</h3>
                    </div>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس انگلیسی</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس آیلتس</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس تافل</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس آلمانی</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس فرانسوی</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>رزرو کلاس ترکی استانبولی</Link>
                </div>
                <div className='flex flex-col items-start '>
                    <div className='flex gap-x-2 justify-center items-center mb-[0.875rem]'>
                        <Image src={circle} alt='circle' width={8} height={8}></Image>
                        <h3 className='text-[#444] font-iranSans font-medium text-base leading-8'>مقالات</h3>
                    </div>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>بهترین آموزشگاه زبان انگلیسی</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>بهترین موسسه آیلتس</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>اپلیکیشن زبان انگلیسی</Link>
                    <Link href={'/'} className='text-[#6A6A6A] font-iranSans text-sm leading-7 font-normal'>آموزش زبان انگلیسی</Link>
                </div>
            </div>
        </div>
        <div className='w-full bg-[#464646] px-[6.5rem] pt-10 pb-8'>
            <Link href={'/'} >
                <Image src={logo} alt='logo' width={200} height={50}></Image>
            </Link>
            <div className='flex justify-between w-full mt-6 pb-5 border-b-2 border-b-[#818181]'>
                <div className='w-[62%]'>
                    <p className='text-[#DADADA] font-iranSans text-sm leading-7 font-normal text-justify'>
                    وب‌سایت همیارزبان برای دسترسی به کلاس زبان به صورت آنلاین راه اندازی شده است. در همیارزبان می‌توانید از بین زبان‌های خارجه ارائه شده، زبان مورد علاقه‌تان را برای یادگیری پیدا کنید و با انتخاب ساعت‌ها و روزهایی که برای یادگیری زبان در نظر دارید در کلاس‌های آنلاین زبان شرکت کنید، همچنین با کمک سایت آموزشی همیارزبان می‌توانید به عنوان استاد برای تدریس زبان فعالیت داشته باشید و کسب درآمد کنید.
                    </p>
                </div>
                <div className='flex gap-x-4'>
                    <Image src={eNamad} alt='e namad' width={120} height={120}></Image>
                    <Image src={eDidital} alt='e digital' width={120} height={120}></Image>
                </div>
            </div>   
            <div className='flex justify-between items-center pt-6'>
                <p className='text-[#DADADA] font-iranSans text-sm leading-7 font-normal text-justify'>
                تمامی حقوق مادی و معنوی سایت و اپلیکیشن همیارزبان متعلق به شرکت دانش بنیان آرمان مبتکر ایده رایکا است.
                </p>
                <div className='flex justify-center items-center gap-x-6'>
                    <Link href='https://twitter.com/hamyarzaban'>
                        <Image src={twitter} alt='logo' width={24} height={24}></Image>
                    </Link>
                    <Link href='https://instagram.com/hamyarzaban/' >
                        <Image src={instagram} alt='logo' width={24} height={24}></Image>
                    </Link>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer