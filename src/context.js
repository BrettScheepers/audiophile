import React, { useState, useContext, useEffect, useRef } from 'react'
import Data from "./data.json"

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const data = Data;
    console.log(Data)
    
    return (
        <AppContext.Provider value={{
            data
        }}>
            {children}
        </AppContext.Provider>
    )
}

//custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext }