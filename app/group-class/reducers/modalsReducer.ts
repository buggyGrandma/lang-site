export interface ModalsShow {
  classReservation: boolean;
  evaluation: boolean;
}
const modalsReducer = (modals: ModalsShow, action: ModalsShow): ModalsShow => {
  return action;
};
export default modalsReducer;
