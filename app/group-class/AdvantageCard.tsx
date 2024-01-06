import Image from "next/image";

interface AdvantageCardProps {
  title: string;
  text: string;
  children: React.ReactNode;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className="flex flex-col gap-y-4 w-[24rem] lg-max:w-[70%] lg-max:mx-4 items-start justify-center py-8 px-6 lg-max:px-4 lg-max:py-4 bg-white rounded">
      <div className="flex items-center justify-center">
        {children}
        <h3 className="text-[#282828] text-xl font-bold lg-max:text-sm lg-max:font-medium">
          {title}
        </h3>
      </div>
      <p className="mr-2 text-[#979797] font-medium text-xs ">{text}</p>
    </div>
  );
};

export default AdvantageCard;
