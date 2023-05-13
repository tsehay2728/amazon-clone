import React, { createContext, useContext, useReducer } from "react";
// ከላይብረሪ  እናመጣለን ወደ ዳታ እንዲስቀምጥና ከዳታ ማውጣት እድንችል የሚያደርግ ሂድት ነው
//prepares the datalayer

export const StateContext = createContext();
//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStatevalue = () => useContext(StateContext);
// push and pull information from the data layer
//  ወደ ዳታ ማስገባትና ማስውጣት እንችላለን in the baskat  0
//  እየቆጠረ ያስቀምጣል፡፡
