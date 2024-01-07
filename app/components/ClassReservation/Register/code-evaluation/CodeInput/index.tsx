"use client";
import "./styles.css";
import delay from "delay";
import { useEffect, useRef, useState } from "react";

const CodeInput = () => {
  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
  const input3 = useRef<HTMLInputElement>(null);
  const input4 = useRef<HTMLInputElement>(null);
  const BACK = "Backspace";
  const [enabled, setEnabled] = useState<number>();
  const className =
    "text-center w-[68px] md:w-[90px] h-[52px] md:h-[56px] rounded-[10px] border-2 border-black read-only:border-gray-300 read-only:bg-[#2121211F] focus:border-[#0CAC67] focus:bg-[#F3FBF7] focus:outline-none";
  const setInput = async (i: number) => {
    await delay(0);
    i === 1 && input1.current!.focus();
    i === 2 && input2.current!.focus();
    i === 3 && input3.current!.focus();
    i === 4 && input4.current!.focus();
    setEnabled(i);
  };
  useEffect(() => {
    setInput(1);
  }, []);
  return (
    <div className="w-full flex flex-row-reverse items-center justify-evenly">
      <input
        ref={input1}
        type="number"
        maxLength={1}
        minLength={0}
        onKeyDown={(k) => (k.key === BACK ? null : setInput(2))}
        readOnly={!(enabled === 1)}
        className={className}
      ></input>
      <input
        ref={input2}
        type="number"
        onKeyDown={(k) => (k.key === BACK ? setInput(1) : setInput(3))}
        readOnly={!(enabled === 2)}
        className={className}
      ></input>
      <input
        ref={input3}
        type="number"
        onKeyDown={(k) => (k.key === BACK ? setInput(2) : setInput(4))}
        readOnly={!(enabled === 3)}
        className={className}
      ></input>
      <input
        ref={input4}
        type="number"
        onKeyDown={(k) => (k.key === BACK ? setInput(3) : null)}
        readOnly={!(enabled === 4)}
        className={className}
      ></input>
    </div>
  );
};

export default CodeInput;
