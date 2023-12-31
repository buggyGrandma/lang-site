interface IExpences {
  title: string;
  price: string;
}
const Expenses = ({ input, total }: { input: IExpences[]; total: string }) => {
  return (
    <div className="w-full rounded-[12px] bg-[#F9F9F9] flex flex-col">
      <div className="w-full p-[16px] flex flex-col gap-[16px]">
        {input.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between text-[14px] font-normal"
          >
            <p className="text-[#757575]">{item.title}</p>
            <p className="text-[#212121]">{item.price}</p>
          </div>
        ))}
      </div>
      <div className="border w-full" />
      <div className="flex items-center justify-between text-[14px] font-normal p-[16px]">
        <p className="text-[#757575]">مبلغ قابل پرداخت:</p>
        <p className="text-[#212121]">{total}</p>
      </div>
    </div>
  );
};

export default Expenses;
