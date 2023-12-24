"use client";
import React from "react";
import { ColorList } from "./ColorList";

interface Props {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  color:
    | "secondary"
    | "textp"
    | "primary"
    | "outlinep"
    | "default"
    | "outline"
    | "text"
    | "primary2"
    | "default2"
    | "error"
    | "disabled";
}

const Button = ({ children, size, color }: Props) => {
  const renderedSize =
    size == "lg" ? "h-[52px]" : size == "md" ? "h-[40px]" : "h-[32px]";
  const renderedColor = ColorList.get(color);
  return (
    <button
      disabled={color === "disabled"}
      className={`w-full ${renderedSize} ${renderedColor?.className} rounded-[8px] gap-[8px] flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
