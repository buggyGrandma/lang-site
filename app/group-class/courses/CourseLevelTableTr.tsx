import Button from "../../components/Button";
interface CourseLevelTableTrProps {
  titleName: string;
  termNumber: number;
  sectionCount: number;
  timePeriod: string;
  length: string;
  startDateString: string;
  price: number;
  status: string;
  buttonAction: number;
  colorVariant: "secondary" | "primary" | "default";
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
  buttonAction,
  colorVariant,
}) => {
  colorVariant = "primary";

  switch (buttonAction) {
    case 0:
      colorVariant = "secondary";
      break;
    case 1:
      colorVariant = "primary";
      break;
    case 2:
      colorVariant = "default";
      break;
    default:
      colorVariant = "primary";
      break;
  }
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
          <div className="w-[140px] h-8">
            <Button color={colorVariant}>
              <p className="text-[0.85rem]">{status}</p>
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default CourseLevelTableTr;
