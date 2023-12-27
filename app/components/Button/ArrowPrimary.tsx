import React from "react";

interface Props {
  direction: "left" | "right" | "up" | "down";
  gradient?: boolean;
  color: string;
}
const ArrowPrimary = ({ direction, gradient = false, color }: Props) => {
  const rotate =
    direction === "left"
      ? "90"
      : direction === "right"
      ? "-90"
      : direction === "up"
      ? "180"
      : "0";
  return (
    <svg
      transform={`rotate(${rotate})`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/outline/arrow-down">
        <g id="arrow-down">
          <path
            id="Vector"
            d="M12 21.2501C11.81 21.2501 11.62 21.1801 11.47 21.0301L5.4 14.9601C5.11 14.6701 5.11 14.1901 5.4 13.9001C5.69 13.6101 6.17 13.6101 6.46 13.9001L12 19.4401L17.54 13.9001C17.83 13.6101 18.31 13.6101 18.6 13.9001C18.89 14.1901 18.89 14.6701 18.6 14.9601L12.53 21.0301C12.38 21.1801 12.19 21.2501 12 21.2501Z"
            fill={color}
          />
          <path
            id="Vector_2"
            d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
            fill={gradient ? "url(#paint0_linear_3140_1863)" : color}
          />
        </g>
      </g>
      <defs>
        {gradient && (
          <linearGradient
            id="paint0_linear_3140_1863"
            x1="12"
            y1="2.75"
            x2="12"
            y2="21.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color={color} stop-opacity="0" />
            <stop offset="0.727083" stop-color={color} />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
};

export default ArrowPrimary;
