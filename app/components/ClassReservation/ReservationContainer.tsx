"use client";
import ResNavContext from "@/app/group-class/contexts/resNavContext";
import { useContext, useRef } from "react";
import CompleteInfo from "./CompleteInfo/CompleteInfo";
import PayCheck from "./PayCheck/PayCheck";
import Register from "./Register/Register";
import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";
import ModalsContext from "@/app/group-class/contexts/modalsContext";

const ReservationContainer = () => {
  const { step } = useContext(ResNavContext);
  const ref = useRef<HTMLDivElement>(null);
  ref.current && ref.current.focus();
  const { modals } = useContext(ModalsContext);

  return (
    <div
      ref={ref}
      className={`${
        !modals.classReservation && "hidden"
      } fixed  left-[50%] translate-x-[-50%] top-0 h-full overflow-y-scroll  w-full z-20`}
    >
      <div dir="rtl" className="md:pt-[56px] h-full bg-black bg-opacity-10 ">
        <ReservationHeader />
        <div className="p-4 gap-4 flex flex-col justify-center items-center bg-white h-fit">
          {step === "completeInfo" ? (
            <CompleteInfo />
          ) : step === "register" ? (
            <Register />
          ) : (
            <PayCheck />
          )}
        </div>
        <ReservationFooter />
      </div>
    </div>
  );
};

export default ReservationContainer;
