"use client";
import ResNavContext from "@/app/components/ClassReservation/contexts/resNavContext";
import { useContext, useRef } from "react";
import CompleteInfo from "./CompleteInfo/CompleteInfo";
import PayCheck from "./PayCheck/PayCheck";
import Register from "./Register/Register";
import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";

interface Props {
  show: boolean;
  // checkPoint: "register" | "completeInfo" | "check";
}
const ReservationContainer = ({ show }: Props) => {
  const { step } = useContext(ResNavContext);
  const ref = useRef<HTMLDivElement>(null);
  ref.current && ref.current.focus();
  return (
    <div
      ref={ref}
      className={`${
        !show && "hidden"
      } absolute  left-[50%] translate-x-[-50%] top-10 h-full overflow-x-scroll w-full z-20`}
    >
      <div dir="rtl" className="md:pt-[56px] bg-black bg-opacity-0 h-fit">
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
