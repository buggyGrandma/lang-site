import ReservationStep from "./ReservationStep";

const ReservationNav = () => {
  return (
    <div className="h-[130px] flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <ReservationStep step="completeInfo" stepState="done" />
      <div className="w-[170px] h-[2px] border-b-2 border-[#DCDCDC] border-dashed" />
      <ReservationStep step="register" stepState="done" />
      <div className="w-[170px] h-[2px] border-b-2 border-[#DCDCDC] border-dashed" />
      <ReservationStep step="check" stepState="active" />
    </div>
  );
};

export default ReservationNav;
