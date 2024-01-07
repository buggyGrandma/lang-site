type Step = "register" | "completeInfo" | "check";
type Actiontype = "register" | "completeInfo" | "check";
const reservationReducer = (step: Step, action: Actiontype): Step => {
  if (action === "completeInfo") return "completeInfo";
  if (action === "register") return "register";
  if (action === "check") return "check";
  return step;
};
export default reservationReducer;
