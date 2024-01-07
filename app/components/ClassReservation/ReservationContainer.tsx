import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";
import ResNavContext from "@/app/components/ClassReservation/contexts/resNavContext";
import reservationReducer from "@/app/components/ClassReservation/reducers/reservationReducer";
import { useReducer } from "react";
import Register from "./Register/Register";
import CompleteInfo from "./CompleteInfo/CompleteInfo";
import PayCheck from "./PayCheck/PayCheck";

interface Props {
  show: boolean;
  checkPoint: "register" | "completeInfo" | "check";
}
const ReservationContainer = ({ show, checkPoint }: Props) => {
  const [step, dispatch] = useReducer(reservationReducer, "completeInfo");

  return (
    <div
      className={`${
        !show && "hidden"
      } absolute  left-[50%] translate-x-[-50%] top-10 h-fit w-full z-20`}
    >
      <ResNavContext.Provider value={{ step, dispatch }}>
        <div dir="rtl" className="md:pt-[56px] bg-black bg-opacity-0 h-fit">
          <ReservationHeader />
          <div className="p-4 gap-4 flex flex-col justify-center items-center bg-white h-fit">
            {checkPoint === "completeInfo" ? (
              <CompleteInfo />
            ) : checkPoint === "register" ? (
              <Register />
            ) : (
              <PayCheck />
            )}
          </div>
          <ReservationFooter />
        </div>
      </ResNavContext.Provider>
    </div>
  );
};

export default ReservationContainer;
