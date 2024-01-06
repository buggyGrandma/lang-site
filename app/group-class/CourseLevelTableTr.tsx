import React from "react";
import Button from "../components/Button";
interface CourseLevelTableTrProps {
  titleName: string;
  termNumber: number;
  sectionCount: number;
  timePeriod: string;
  length: string;
  startDateString: string;
  price: number;
  status: string;
}
const CourseLevelTableTr: React.FC<CourseLevelTableTrProps> = ({
  titleName,
  termNumber,
  sectionCount,
  timePeriod,
  length,
  startDateString,
  price,
  status,
}) => {
  return (
    <tbody className="text-center w-full bg-[#F8F8F8]">
      <tr>
        <td className="text-[#282828] text-sm py-4">{titleName}</td>
        <td className="text-[#282828] text-sm py-4">{termNumber}</td>
        <td className="text-[#282828] text-sm py-4">{sectionCount} جلسه</td>
        <td className="text-[#282828] text-sm py-4">{timePeriod}</td>
        <td className="text-[#282828] text-sm py-4">{length}</td>
        <td className="text-[#282828] text-sm py-4">{startDateString}</td>
        <td className="text-[#282828] text-sm py-4">{price} تومان</td>
        <td className="text-[#282828] text-sm py-4 flex justify-center items-center">
          <div className="w-[112px] h-8">
            <Button color="secondary">{status}</Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CourseLevelTableTr;
