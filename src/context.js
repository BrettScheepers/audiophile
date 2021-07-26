import React, { useState, useContext, useEffect } from 'react'
import Data from "./data.json"

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const data = Data;
    const [openImageNavModal, setOpenImageNavModal] = useState(false)
    const [openCartModal, setOpenCartModal] = useState(false)
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false)
    const [cart, setCart] = useState([])
    const [cartItemsCost, setCartItemsCost] = useState(0)
    
    const closeAllModals = () => {
        setOpenCartModal(false)
        setOpenImageNavModal(false)
    }

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) closeAllModals()
    } 
    
    const newName = (nameStr) => {
        let nameArr = nameStr.toLowerCase().split(" ").slice(0, -1)

        for (let i = 0; i < nameArr.length; i++) {
            if (nameArr[i] === "mark") nameArr[i] = "mk"
        }

        return nameArr.join(" ").toUpperCase()
    }

    useEffect(() => {
        setCartItemsCost(cart.reduce((acc, cur) => { return acc + cur.item.price*cur.quantity }, 0) || 0)
    }, [cart])

    return (
        <AppContext.Provider value={{
            data, cart, setCart, openCartModal, openImageNavModal, setOpenCartModal, setOpenImageNavModal, closeAllModals, cartItemsCost, setCartItemsCost, handleBackgroundClick, newName, openCheckoutModal, setOpenCheckoutModal
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