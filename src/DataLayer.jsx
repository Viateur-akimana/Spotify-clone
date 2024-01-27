import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();


const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
};


export default DataLayer;

export const DataLayerValues =()=>{
  useContext(stateContext);
} 


