import React from "react";
import CheckIcon from "./assets/CheckIcon";

const Note = () => {
  return (
    <div className="rounded-lg gap-4 max-w-[648px] flex items-center p-[24px] bg-white">
      <div>
        <CheckIcon />
      </div>
      <p className="text-wrap text-[14px] font-normal">
        با توجه به اینکه تعیین سطح هوشمند است،در هر زمان از آزمون که سیستم تشخیص
        دهد سطح شما تعیین می شود
      </p>
    </div>
  );
};

export default Note;
