import EvaluationQuestion from "@/app/evaluation/evaluation-exam/EvaluationQuestion";

const EvaluationExam = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="text-[#757575] text-[14px] font-normal mb-[16px]">
        با توجه به سوال گزینه صحیح را انتخاب کنید.
      </div>
      <EvaluationQuestion />
    </div>
  );
};

export default EvaluationExam;
