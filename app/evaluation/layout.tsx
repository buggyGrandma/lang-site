import React from "react";
import CloseIcon from "./Close";

const EvaluationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main dir="rtl" className="md:pt-[56px] bg-gray-500 h-[100vh]">
        <div className="border-b h-[64px] md:h-[91px] md:px-[172px] flex items-center gap-[8px] md:gap-[12px] w-full bg-white md:rounded-t-[24px]">
          <div className="p-[8px] rounded-full md:bg-[#F2F2F2]">
            <CloseIcon />
          </div>
          <div>آزمون تعیین سطح</div>
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center bg-[#F8F8FB] h-fit">
          {children}
        </div>
      </main>
    </>
  );
};

export default EvaluationLayout;
