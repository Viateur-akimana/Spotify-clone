import React, { createContext, useReducer } from "react";

export const stateContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};

export default DataLayer;
