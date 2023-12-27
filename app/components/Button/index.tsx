"use client";
import React, { useState } from "react";
import { ColorList } from "./ColorList";
import ArrowPrimary from "./ArrowPrimary";
import ArrowSecondary from "./ArrowSecondary";

interface Props {
  children: React.ReactNode;
  arrowposition?: "left" | "right";
  arrow?: boolean;
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
  direction?: "left" | "right" | "up" | "down";
  onClick?: () => void;
}

const Button = ({
  children,
  color,
  direction = "down",
  arrowposition = "left",
  arrow = false,
  onClick,
}: Props) => {
  const renderedColor = ColorList.get(color);
  const [arrowColor, setArrowcolor] = useState(renderedColor?.arrowColor);
  return (
    <button
      onClick={onClick && onClick}
      onMouseEnter={() => setArrowcolor(renderedColor?.onHoverArrowColor)}
      onMouseLeave={() => setArrowcolor(renderedColor?.arrowColor)}
      disabled={color === "disabled"}
      className={`w-full h-full ${
        renderedColor?.className
      } rounded-[8px] gap-[8px] flex ${
        arrowposition === "left" && "flex-row-reverse"
      } justify-center items-center`}
    >
      {arrow ? (
        color === "primary2" ? (
          <ArrowSecondary />
        ) : (
          <ArrowPrimary
            direction={direction}
            gradient={renderedColor?.gradient}
            color={arrowColor!}
          />
        )
      ) : null}
      {children}
    </button>
  );
};

export default Button;
