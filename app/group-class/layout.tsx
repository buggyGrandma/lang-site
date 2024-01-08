"use client";
import React, { useReducer } from "react";
import ReservationContainer from "../components/ClassReservation/ReservationContainer";
import ResNavContext from "../components/ClassReservation/contexts/resNavContext";
import reservationReducer from "../components/ClassReservation/reducers/reservationReducer";
import EvaluationContainer from "../components/Evaluation/EvaluationContainer";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Navbar from "../components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [step, dispatch] = useReducer(reservationReducer, "completeInfo");
  return (
    <ResNavContext.Provider value={{ step, dispatch }}>
      <main className="bg-[#F8F8FB] w-full overflow-x-hidden">
        <Navbar></Navbar>
        <HamburgerMenu></HamburgerMenu>
        <EvaluationContainer show={true} />
        <ReservationContainer show={false} />
        {children}
        <Footer></Footer>
      </main>
    </ResNavContext.Provider>
  );
};

export default layout;
