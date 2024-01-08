import React, { Dispatch } from "react";

interface resNavContextType {
  step: "register" | "completeInfo" | "check";
  dispatch: Dispatch<Actiontype>;
}

type Actiontype = "register" | "completeInfo" | "check";

const ResNavContext = React.createContext<resNavContextType>(
  {} as resNavContextType
);
export default ResNavContext;
