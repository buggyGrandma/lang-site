import Link from "next/link";
import Button from "../components/Button";

const QuickAccess = () => {
  return (
    <section className="flex justify-between py-4 fixed bottom-0 bg-white w-full px-[6.5rem] z-50 lg-max:hidden">
      <div className="flex gap-x-10 items-center lg-max:hidden">
        <Link href={"#courses"} className="text-[#818181] hover:text-[#2E2E2E]">
          کلاس های گروهی انگلیسی
        </Link>
        <Link
          href={"#road-map"}
          className="text-[#818181] hover:text-[#2E2E2E]"
        >
          نقشه راه
        </Link>
        <Link
          href={"#advantage"}
          className="text-[#818181] hover:text-[#2E2E2E]"
        >
          مزایای کلاس ها
        </Link>
        <Link
          href={"#comments"}
          className="text-[#818181] hover:text-[#2E2E2E]"
        >
          نظرات
        </Link>
        <Link href={"#faq"} className="text-[#818181] hover:text-[#2E2E2E]">
          سوالات
        </Link>
      </div>
      <div className="flex gap-x-6 lg-max:hidden">
        <div className="w-[175px] h-[52px]">
          <Button color={"primary"}>تعیین سطح</Button>
        </div>
        <div className="w-[175px] h-[52px]">
          <Button color={"outlinep"}>نیاز به مشاوره</Button>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
