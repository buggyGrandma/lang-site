import React, { Dispatch } from "react";

interface ModalsContextType {
  modals: ModalsShow;
  modalsDispatch: Dispatch<ModalsShow>;
}

interface ModalsShow {
  classReservation: boolean;
  evaluation: boolean;
}

const ModalsContext = React.createContext<ModalsContextType>(
  {} as ModalsContextType
);
export default ModalsContext;
