interface ColorListValue {
  className: string;
}

export const ColorList = new Map<string, ColorListValue>();

ColorList.set("secondary", {
  className: "bg-[#FFCC68] text-black hover:bg-[#FFE0A5] ",
});

ColorList.set("textp", {
  className: "bg-whiter text-[#0B9A5C]",
});

ColorList.set("primary", {
  className: "bg-[#0CAC67] text-white hover:bg-[#087646]",
});

ColorList.set("outlinep", {
  className:
    "bg-white text-[#0B9A5C] border border-[#0B9A5C] hover:text-[#087646] hover:border-[#087646]",
});

ColorList.set("default", {
  className: "bg-[#F1F1F1] text-[#555555] hover:text-[#121212]",
});

ColorList.set("outline", {
  className:
    "bg-white text-[#6B6B6B] border border-[#6B6B6B] hover:text-[#121212] hover:border-[#121212]",
});

ColorList.set("text", {
  className: "bg-white text-[#6B6B6B]  hover:text-[#121212] ",
});

ColorList.set("primary2", {
  className:
    "bg-[#0CAC67] bg-opacity-10 text-black  hover:bg-[#BBE8D4] hover:bg-opacity-100 ",
});
ColorList.set("default2", {
  className: "bg-white text-[#818181]  hover:text-[#121212] ",
});
ColorList.set("error", {
  className:
    "bg-[#FB6060] bg-opacity-10 text-[#FB6060]  hover:text-[#C34A4A] hover:bg-opacity-100 hover:bg-[#FEE2E2] ",
});
ColorList.set("disabled", {
  className: "text-[#979797] bg-[#F1F1F1]",
});
