import React from "react";

const HeartCommentIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_3055_22722)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 14C30 19.5228 25.5228 24 20 24C18.4003 24 16.8884 23.6244 15.5475 22.9565C15.1912 22.7791 14.7839 22.72 14.3994 22.8229L12.1733 23.4185C11.207 23.677 10.323 22.793 10.5815 21.8267L11.1771 19.6006C11.28 19.2161 11.2209 18.8088 11.0435 18.4525C10.3756 17.1116 10 15.5997 10 14C10 8.47715 14.4772 4 20 4C25.5228 4 30 8.47715 30 14ZM15.5 13.1084C15.5 14.4768 16.8188 15.9126 18.0286 16.9417C18.8524 17.6426 19.2644 17.9931 20 17.9931C20.7356 17.9931 21.1476 17.6426 21.9714 16.9417C23.1812 15.9126 24.5 14.4768 24.5 13.1084C24.5 10.4312 22.0249 9.43172 20 11.4998C17.9751 9.43172 15.5 10.4312 15.5 13.1084Z"
          fill="#FFCC68"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3055_22722"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.799306 0 0 0 0 0.409723 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3055_22722"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3055_22722"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HeartCommentIcon;
