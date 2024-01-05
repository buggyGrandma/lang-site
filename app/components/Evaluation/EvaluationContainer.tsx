"use client";
import CloseIcon from "@/app/evaluation/assets/Close";
import EvaluationContent from "./EvaluationContent";
import { useState } from "react";
import EvaluationExam from "./EvaluationExam";

// const IRANSans = localFont({
//   src: "../../assets/fonts/FontsFree-Net-ir_sans.ttf ",
// });
interface Props extends React.PropsWithChildren {
  show: boolean;
}
const EvaluationContainer = ({ children, show }: Props) => {
  const [page, setPage] = useState<"start" | "exam">("start");
  return (
    <div
      className={`${
        !show && "hidden"
      } absolute  left-[50%] translate-x-[-50%] top-10 h-fit w-full z-20`}
    >
      <div dir="rtl" className="md:pt-[56px] bg-black bg-opacity-0 h-fit">
        <div className="border-b h-[64px] md:h-[91px] md:px-[172px] flex items-center gap-[8px] md:gap-[12px] w-full bg-white md:rounded-t-[24px]">
          <div className="p-[8px] rounded-full md:bg-[#F2F2F2]">
            <CloseIcon />
          </div>
          <div>آزمون تعیین سطح</div>
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center bg-[#F8F8FB] h-fit">
          {page === "start" ? (
            <EvaluationContent switcher={setPage} />
          ) : (
            <EvaluationExam />
          )}
        </div>
      </div>
    </div>
  );
};

export default EvaluationContainer;
