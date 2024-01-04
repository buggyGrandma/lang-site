"use client";
import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";
import { QueryClient, QueryClientProvider } from "react-query";

const classReservasionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <div dir="rtl" className="md:pt-[56px] bg-gray-500 h-[100vh]">
          <ReservationHeader />
          <div className="p-4 gap-4 flex flex-col justify-center items-center bg-white h-fit">
            {children}
          </div>
          <ReservationFooter />
        </div>
      </QueryClientProvider>
    </main>
  );
};

export default classReservasionLayout;
