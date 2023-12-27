interface ColorListValue {
  className: string;
  arrowColor: string;
  onHoverArrowColor: string;
  gradient: boolean;
}

export const ColorList = new Map<string, ColorListValue>();

ColorList.set("secondary", {
  className: "bg-[#FFCC68] text-black hover:bg-[#FFE0A5] ",
  arrowColor: "#2E2E2E",
  onHoverArrowColor: "#2E2E2E",
  gradient: true,
});

ColorList.set("textp", {
  className: "bg-whiter text-[#0B9A5C]",
  arrowColor: "#0CAC67",
  onHoverArrowColor: "#0CAC67",
  gradient: true,
});

ColorList.set("primary", {
  className: "bg-[#0CAC67] text-white hover:bg-[#087646]",
  arrowColor: "#FFFFFF",
  onHoverArrowColor: "#FFFFFF",
  gradient: false,
});

ColorList.set("outlinep", {
  className:
    "bg-white text-[#0B9A5C] border border-[#0B9A5C] hover:text-[#087646] hover:border-[#087646]",
  arrowColor: "#0B9A5C",
  onHoverArrowColor: "#0B9A5C",
  gradient: false,
});

ColorList.set("default", {
  className: "bg-[#F1F1F1] text-[#555555] hover:text-[#121212]",
  arrowColor: "#555555",
  onHoverArrowColor: "#555555",
  gradient: false,
});

ColorList.set("outline", {
  className:
    "bg-white text-[#6B6B6B] border border-[#6B6B6B] hover:text-[#121212] hover:border-[#121212]",
  arrowColor: "#6B6B6B",
  onHoverArrowColor: "#6B6B6B",
  gradient: false,
});

ColorList.set("text", {
  className: "bg-white text-[#6B6B6B]  hover:text-[#121212] ",
  arrowColor: "#2E2E2E",
  onHoverArrowColor: "#2E2E2E",
  gradient: false,
});

ColorList.set("primary2", {
  className:
    "bg-[#0CAC67] bg-opacity-10 text-black  hover:bg-[#BBE8D4] hover:bg-opacity-100 ",
  arrowColor: "",
  onHoverArrowColor: "#2E2E2E",
  gradient: false,
});
ColorList.set("default2", {
  className: "bg-white text-[#818181]  hover:text-[#121212] ",
  arrowColor: "#2E2E2E",
  onHoverArrowColor: "#2E2E2E",
  gradient: false,
});
ColorList.set("error", {
  className:
    "bg-[#FB6060] bg-opacity-10 text-[#FB6060]  hover:text-[#C34A4A] hover:bg-opacity-100 hover:bg-[#FEE2E2] ",
  arrowColor: "#FB6060",
  onHoverArrowColor: "#C34A4A",
  gradient: false,
});
ColorList.set("disabled", {
  className: "text-[#979797] bg-[#F1F1F1]",
  arrowColor: "#979797",
  onHoverArrowColor: "#979797",
  gradient: false,
});
