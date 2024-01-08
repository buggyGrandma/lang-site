"use client";
import CloseIcon from "./assets/Close";
import EvaluationContent from "./EvaluationContent";
import { useContext, useRef, useState } from "react";
import EvaluationExam from "./EvaluationExam";
import ModalsContext from "@/app/group-class/contexts/modalsContext";

const EvaluationContainer = () => {
  const { modals, modalsDispatch } = useContext(ModalsContext);
  const [page, setPage] = useState<"start" | "exam">("start");
  const ref = useRef<HTMLDivElement>(null);
  ref.current && ref.current.focus();
  const onClose = () => {
    modalsDispatch({ ...modals, evaluation: false });
  };
  return (
    <div
      ref={ref}
      className={`${
        !modals.evaluation && "hidden"
      } fixed  left-[50%] translate-x-[-50%] top-0 overflow-y-scroll h-full w-full z-20`}
    >
      <div dir="rtl" className="md:pt-[56px] bg-black bg-opacity-10 h-fit">
        <div className="border-b h-[64px] md:h-[91px] md:px-[172px] flex items-center gap-[8px] md:gap-[12px] w-full bg-white md:rounded-t-[24px]">
          <button
            onClick={onClose}
            className="p-[8px] rounded-full md:bg-[#F2F2F2]"
          >
            <CloseIcon />
          </button>
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
