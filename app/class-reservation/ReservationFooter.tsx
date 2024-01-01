import Button from "../components/Button";

const ReservationFooter = () => {
  return (
    <div className="p-4 bottom-0 bg-white border-t py-[24px] flex justify-center">
      <div className="w-full max-w-[984px] flex items-center justify-between">
        <div className="flex flex-col">
          <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
            مبلغ قابل پرداخت:
          </div>
          <div className="text[#A0A0A0] text-[20px] font-medium">
            ۶۵۰‍‍‍‍،۰۰۰تومان
          </div>
        </div>
        <div className="w-full max-w-[196px] h-[52px]">
          <Button color="disabled" arrow={true} direction="left">
            <p className="text-[#A0A0A0] text-[12px] font-normal">
              ثبت و رفتن به مرحله ی بعد
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationFooter;
