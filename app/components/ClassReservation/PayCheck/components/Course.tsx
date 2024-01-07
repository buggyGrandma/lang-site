interface ICourse {
  title: string;
  description: string;
}

const Course = ({ input }: { input: ICourse[] }) => {
  return (
    <div className="w-full max-w-[670px] p-[12px] rounded-[12px] bg-[#F9F9F9]">
      <div className="flex flex-col items-start bg-white px-[24px] py-[16px] rounded-[8px]">
        <p className="mb-[16px] text-[#212121] text-[16px] font-iranSansBold font-bold">
          دوره ترمیک A1
        </p>
        <div className="w-full flex flex-col gap-[12px]">
          {input.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between text-[14px] font-normal"
            >
              <p className="text-[#757575]">{item.title}</p>
              <p className="text-[#212121]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
