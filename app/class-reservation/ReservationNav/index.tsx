import ReservationStep from "./ReservationStep";
interface Props {
  step: "register" | "completeInfo" | "check";
}
const ReservationNav = ({ step }: Props) => {
  const renderedLine1 =
    step === "completeInfo"
      ? "border-[#DCDCDC] border-dashed"
      : "border-[#0CAC67]";
  const renderedLine2 =
    step === "check" ? "border-[#0CAC67]" : "border-[#DCDCDC] border-dashed";
  return (
    <div className="w-full max-w-[930px]  md:h-[130px] flex justify-center items-center  md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] ">
      <ReservationStep
        step="completeInfo"
        stepState={step === "completeInfo" ? "active" : "done"}
      />
      <div
        className={`${renderedLine1} w-full max-w-[170px] h-[2px] border-b-2`}
      />
      <ReservationStep
        step="register"
        stepState={
          step === "register" ? "active" : step === "check" ? "done" : "pending"
        }
      />
      <div
        className={`${renderedLine2} w-full max-w-[170px] h-[2px] border-b-2`}
      />
      <ReservationStep
        step="check"
        stepState={step === "check" ? "active" : "pending"}
      />
    </div>
  );
};

export default ReservationNav;
