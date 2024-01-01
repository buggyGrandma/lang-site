import Book from "./Book";
import Course from "./components/Course";
import DiscountCode from "./components/DiscountCode";
import Expenses from "./components/Expenses";
import Wallet from "./components/Wallet";

const PayCheck = () => {
  return (
    <div className="w-full max-w-[984px]">
      <div className="w-full flex flex-col md:flex-row gap-[24px]">
        <div className="w-full max-w-[670px] flex flex-col gap-[20px]">
          <div className="flex flex-col w-full">
            <p className="mb-[12px] text-[#5A5A5A] text-[14px] font-medium">
              اطلاعات صورت حساب
            </p>
            <Course
              input={[
                {
                  title: "زمان‌بندی دوره:",
                  description: "شنبه و سه‌شنبه از ساعت ۱۲:۳۰ تا ۱۴",
                },
                { title: "تاریخ شروع:", description: " ۲۴ اسفند ۱۴۰۱" },
                { title: "مدت دروه :", description: "۶ ترم (هر ترم ۱۲ جلسه)" },
              ]}
            />
          </div>
          <Book />
          <Wallet />
        </div>
        <div className="w-full md:max-w-[290px] flex flex-col gap-[24px]">
          <div className="flex flex-col w-full">
            <p className="mb-[12px] text-[#5A5A5A] text-[14px] font-medium">
              هزینه ها
            </p>
            <Expenses
              input={[
                { title: "دوره:", price: "۴۸۰,۰۰۰ تومان" },
                { title: "کتاب‌ها + ارسال:", price: "۰" },
                { title: "مقدار تخفیف:", price: "۰" },
              ]}
              total="۶۵۰,۰۰۰ تومان"
            />
          </div>
          <DiscountCode />
        </div>
      </div>
    </div>
  );
};

export default PayCheck;
