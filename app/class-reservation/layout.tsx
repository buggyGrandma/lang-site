import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";

const classReservasionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main>
      <div dir="rtl" className="md:pt-[56px] bg-gray-500 h-[100vh]">
        <ReservationHeader />
        <div className="p-4 gap-4 flex flex-col justify-center items-center bg-white h-fit">
          {children}
        </div>
        <ReservationFooter />
      </div>
    </main>
  );
};

export default classReservasionLayout;