"use client";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Note from "./Note";
import PictuerMD from "./assets/PictuerMD";
import PictureSM from "./assets/PictureSM";

const Evaluation = () => {
  const router = useRouter();
  return (
    <>
      <PictuerMD />
      <PictureSM />
      <div className="flex text-[20px] font-bold">
        <p className="text-[#08C784]">سطح زبانتو </p> <p>مشخص کن! </p>
      </div>
      <Note />
      <Note />
      <Note />
      <Note />
      <div className="w-full max-w-[648px] flex justify-center md:justify-start">
        <div className="w-full md:w-[325px] h-[64px]">
          <Button
            color="secondary"
            onClick={() => router.push("/evaluation/evaluation-exam")}
          >
            شروع آزمون
          </Button>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
