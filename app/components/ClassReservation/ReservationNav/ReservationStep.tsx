import CheckIcon from "./CheckIcon";
import CompletionIcon from "./CompletionIcon";
import DoneIcon from "./DoneIcon";
import RegisterIcon from "./RegisterIcon";
interface Props {
  step: "register" | "completeInfo" | "check";
  stepState: "active" | "done" | "pending";
}
const ReservationStep = ({ step, stepState }: Props) => {
  const description =
    step === "completeInfo"
      ? "تکمیل اطلاعات"
      : step === "register"
      ? "ثبت نام"
      : "صورتحساب";
  const iconClass =
    stepState === "active"
      ? "border-[#0CAC67] shadow-green border"
      : stepState === "done"
      ? "shadow-green bg-[#0CAC67]"
      : stepState === "pending" && "bg-[#F0F0F0]";
  const descriptionClass =
    stepState === "pending" ? "text-[#828282]" : "text-[#0CAC67]";
  return (
    <div className="relative flex flex-col items-center gap-[12px]">
      <div className={`${iconClass} w-fit  p-[11px] rounded-full `}>
        {stepState === "done" ? (
          <DoneIcon />
        ) : step === "completeInfo" ? (
          <CompletionIcon />
        ) : step === "register" ? (
          <RegisterIcon active={stepState === "active"} />
        ) : (
          <CheckIcon active={stepState === "active"} />
        )}
      </div>
      <div
        className={`${descriptionClass} text-nowrap absolute top-[58px] font-bold font-iranSansBold text-[14px]`}
      >
        {description}
      </div>
    </div>
  );
};

export default ReservationStep;
