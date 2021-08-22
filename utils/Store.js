import React, { useReducer } from "react";
const initstate = {
  darkMode: true,
};
export const StoreContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "darkModeOn":
      return { ...state, darkMode: true };
    case "darkModeOff":
      return { ...state, darkMode: false };
    default:
      state;
  }
};
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};
