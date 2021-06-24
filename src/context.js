import React, { useState, useContext, useEffect, useRef } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    
    return (
        <AppContext.Provider value={{
            
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