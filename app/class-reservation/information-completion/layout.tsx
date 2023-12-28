import CloseButton from "./CloseButton";
import MobileCloseButton from "./MobileCloseButton";
import ReservationNav from "../ReservationNav";

const classReservasionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main>
      <div dir="rtl" className="md:pt-[56px] bg-gray-500 h-[100vh]">
        <div className="relative border-b h-[64px] md:h-[130px] md:px-[60px] flex items-center w-full bg-white md:rounded-t-[24px] ">
          <div className="hidden md:flex items-center">
            <CloseButton />
            <div className="text-[14px] text-[#757575] font-normal">
              برای رزرو کلاس ترمیک اطلاعات زیر را تکمیل کنید.
            </div>
            <ReservationNav step="completeInfo" />
          </div>
          <div className="flex gap-[8px] px-[8px] items-center md:hidden">
            <MobileCloseButton />
            <div className="text-[#212121] text-[18px]  font-iranSansBold">
              رزرو کلاس ترمیک
            </div>
          </div>
        </div>
        <div className="md:hidden h-[105px] py-[12px] px-10 border-b bg-white">
          <ReservationNav step="completeInfo" />
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center bg-[#F8F8FB] h-fit">
          {children}
        </div>
      </div>
    </main>
  );
};

export default classReservasionLayout;
