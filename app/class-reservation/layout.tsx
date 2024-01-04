"use client";
import { useReducer } from "react";
import ReservationFooter from "./ReservationFooter";
import ReservationHeader from "./ReservationHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import reservationReducer from "./reducers/reservationReducer";
import ResNavContext from "./contexts/resNavContext";

const classReservasionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();
  const [step, dispatch] = useReducer(reservationReducer, "completeInfo");

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ResNavContext.Provider value={{ step, dispatch }}>
          <div dir="rtl" className="md:pt-[56px] bg-gray-500 h-[100vh]">
            <ReservationHeader />
            <div className="p-4 gap-4 flex flex-col justify-center items-center bg-white h-fit">
              {children}
            </div>
            <ReservationFooter />
          </div>
        </ResNavContext.Provider>
      </QueryClientProvider>
    </main>
  );
};

export default classReservasionLayout;
