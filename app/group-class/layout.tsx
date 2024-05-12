"use client";
import React, { useReducer } from "react";
import ReservationContainer from "../components/ClassReservation/ReservationContainer";
import ResNavContext from "./contexts/resNavContext";
import reservationReducer from "./reducers/reservationReducer";
import EvaluationContainer from "../components/Evaluation/EvaluationContainer";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";
import modalsReducer, { ModalsShow } from "./reducers/modalsReducer";
import ModalsContext from "./contexts/modalsContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [step, dispatch] = useReducer(reservationReducer, "completeInfo");
  const [modals, modalsDispatch] = useReducer(modalsReducer, {} as ModalsShow);
  return (
    <ResNavContext.Provider value={{ step, dispatch }}>
      <ModalsContext.Provider value={{ modals, modalsDispatch }}>
        <main className="bg-[#F8F8FB] w-full overflow-x-hidden">
          <Navbar></Navbar>
          {/* <HamburgerMenu></HamburgerMenu> */}
          <EvaluationContainer />
          <ReservationContainer />
          {children}
          <Footer></Footer>
        </main>
      </ModalsContext.Provider>
    </ResNavContext.Provider>
  );
};

export default layout;
