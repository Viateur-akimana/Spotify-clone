import React, { createContext, useReducer } from 'react'


export const StateContext = createContext()

export const StateProviders = ({children,initialState,reducer}) => {

  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
}

