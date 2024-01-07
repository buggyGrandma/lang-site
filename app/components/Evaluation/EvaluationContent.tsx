import Note from "@/app/components/Evaluation/Note";
import PictuerMD from "./assets/PictuerMD";
import PictureSM from "./assets/PictureSM";
import Button from "../Button";

const EvaluationContent = ({
  switcher,
}: {
  switcher: (state: "start" | "exam") => void;
}) => {
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
          <Button color="secondary" onClick={() => switcher("exam")}>
            شروع آزمون
          </Button>
        </div>
      </div>
    </>
  );
};

export default EvaluationContent;
