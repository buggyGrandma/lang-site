import CheckButton from "./CheckButton";

const Book = ({ selected }: { selected: boolean }) => {
  const backGround = selected ? "bg-[#F3FBF7]" : "bg-[#F6F6F6] ";
  return (
    <div
      className={`${backGround} flex items-start gap-[12px] md:w-[480px] md:h-[77px] h-[97px] p-2 w-full rounded-[10px]`}
    >
      <CheckButton selected={selected} />
      <div className="flex flex-col gap-[9px]">
        <div className="text-[#212121] font-normal flex ">
          <p>کتاب</p>
          <p className="font-bold"> &nbsp;American English File1 &nbsp;</p>
          <p>(کتاب اصلی دوره)</p>
        </div>
        <div className="flex gap-x-[16px] ">
          <p>۱۵۰،۰۰۰ تومان</p>
          <div className="px-[12px] rounded-[4px] flex items-center font-medium text-[14px] text-[#0CAC67] bg-[#D7F1E680]">
            + ارسال رایگان
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
