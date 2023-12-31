import Course from "./Course";

const PayCheck = () => {
  return (
    <div className="w-full max-w-[984px]">
      <div className="w-full">
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
    </div>
  );
};

export default PayCheck;
