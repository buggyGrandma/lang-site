"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  warn: boolean;
}
const EvaluationTimer = ({ children, warn }: Props) => {
  const renderedColors = warn
    ? "bg-[#FEE2E2] text-[#C34A4A]"
    : "bg-[#F1F1F1] text-[#555555]";
  return (
    <div
      className={`${renderedColors} absolute top-3 left-3 w-[40px] h-[40px] rounded-[8px] flex items-center justify-center text-[18px] font-medium`}
    >
      {children}
    </div>
  );
};

export default EvaluationTimer;
