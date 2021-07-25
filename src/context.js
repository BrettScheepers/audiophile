import React, { useState, useContext, useEffect, useRef } from 'react'
import Data from "./data.json"

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const data = Data;
    const [openImageNavModal, setOpenImageNavModal] = useState(false)
    const [openCartModal, setOpenCartModal] = useState(false)
    const [cart, setCart] = useState([])
    const [cartItemsCost, setCartItemsCost] = useState(0)
    
    const closeAllModals = () => {
        setOpenCartModal(false)
        setOpenImageNavModal(false)
    }

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closeAllModals()
    } 

    useEffect(() => {
        setCartItemsCost(cart.reduce((acc, cur) => { return acc + cur.item.price*cur.quantity }, 0) || 0)
    }, [cart])

    return (
        <AppContext.Provider value={{
            data, cart, setCart, openCartModal, openImageNavModal, setOpenCartModal, setOpenImageNavModal, closeAllModals, cartItemsCost, setCartItemsCost, handleBackgroundClick
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