import { useContext } from "react";
import Button from "../Button";
import ResNavContext from "./contexts/resNavContext";

const ReservationFooter = () => {
  const { step, dispatch } = useContext(ResNavContext);
  const handleNext = () => {
    switch (step) {
      case "completeInfo":
        return dispatch("register");
      case "register":
        return dispatch("check");
      default:
        break;
    }
  };
  const handlePrev = () => {
    switch (step) {
      case "check":
        return dispatch("register");
      case "register":
        return dispatch("completeInfo");
      default:
        break;
    }
  };
  return (
    <div className="p-4  w-full bg-white border-t py-[24px] flex justify-center">
      <div className="w-full max-w-[984px] flex items-center justify-between">
        <div className="flex flex-col">
          <div className="mb-[19px] text-[#5A5A5A] text-[12px] font-normal">
            مبلغ قابل پرداخت:
          </div>
          <div className="text[#A0A0A0] text-[20px] font-medium">
            ۶۵۰‍‍‍‍،۰۰۰تومان
          </div>
        </div>
        <div className="w-full gap-x-2 md:max-w-[275px] h-[52px] flex">
          {step !== "completeInfo" && (
            <Button
              onClick={() => handlePrev()}
              arrow={true}
              arrowposition="right"
              direction="right"
              color="outline"
            >
              <p className=" text-[12px] font-normal">مرحله قبل</p>
            </Button>
          )}
          <Button
            color="secondary"
            arrow={true}
            direction="left"
            onClick={() => handleNext()}
          >
            <p className=" text-[12px] font-normal">
              {step === "completeInfo"
                ? "ثبت و رفتن به مرحله بعد"
                : step === "register"
                ? "تایید"
                : "پرداخت"}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationFooter;
