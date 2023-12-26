import Button from "../components/Button";
import Note from "./Note";
import PictuerMD from "./PictuerMD";
import PictureSM from "./PictureSM";

const Evaluation = () => {
  return (
    <>
      <PictuerMD />
      <PictureSM />
      <div className="flex">
        <p className="text-green-600">سطح زبانتو </p>
        <p>مشخص کن!</p>
      </div>
      <Note />
      <Note />
      <Note />
      <Note />
      <div className="w-[325px] h-[64px]">
        <Button color="secondary">شروع آزمون</Button>
      </div>
    </>
  );
};

export default Evaluation;
