import React, { useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const CartModal = () => {
    const { cart, setCart, closeAllModals, cartItemsCost, setCartItemsCost, handleBackgroundClick } = useGlobalContext()
    const history = useHistory()

    const newName = (nameStr) => {
        let nameArr = nameStr.toLowerCase().split(" ").slice(0, -1)

        for (let i = 0; i < nameArr.length; i++) {
            if (nameArr[i] === "mark") nameArr[i] = "mk"
        }

        return nameArr.join(" ").toUpperCase()
    }

    const changeCartItemQuantity = (e) => {
        // console.log(e.currentTarget.parentElement.parentElement.key)
        let cartItem = e.currentTarget.parentElement.parentElement.id
        let changeQuantityId = e.currentTarget.id

        if (changeQuantityId === "cart-plus") {
            let newCart = cart.map((el, index) => {
                if (index.toString() === cartItem) {
                    el.quantity++
                    return el
                } else return el
            })
            setCart([...newCart])
        }
        if (changeQuantityId === "cart-minus") {
            if (cart[cartItem].quantity === 1) {
                let newCart = cart.filter((el, index) => index.toString() !== cartItem)
                setCart([...newCart])
            }
            else {
                let newCart = cart.map((el, index) => {
                    if (index.toString() === cartItem) {
                        el.quantity--
                        return el
                    } else return el
                })
                setCart([...newCart])
            }
        }
    }

    return (
        <div className="modal-background cart-modal-background" onClick={(e) => handleBackgroundClick(e)}>
            <div className="container"  onClick={(e) => handleBackgroundClick(e)}>
                <div className="cart-modal-container">
                    <div className="cart-modal-header-div">
                    <h4>Cart (3)</h4>
                    <button onClick={() => setCart([])}
                        className="btn btn-basic">Remove All</button>
                    </div>
                    <div className="cart-modal-items-list">
                        {
                            cart.length === 0 ? <p>Empty</p> : 
                            cart.map((el, index) => {
                                const { item, id, quantity } = el

                                return (
                                    <div className="cart-modal-item" key={id} id={index} >
                                        <img src={`/assets/cart/image-${item.slug}.jpg`} alt="" style={{width: "64px", borderRadius: "var(--border-radius)"}} />
                                        <div className="cart-modal-items-list-info">
                                            <h6>{newName(item.name)}</h6>
                                            <p>R {item.price}</p>
                                        </div>
                                        <div className="modal-cart-counter-div cart-counter-div">
                                            <span className="cart-counter-span" id="cart-minus"
                                                onClick={(e) => changeCartItemQuantity(e)}>-</span>
                                            <span className="cart-counter">{quantity}</span>
                                            <span className="cart-counter-span" id="cart-plus"
                                                onClick={(e) => changeCartItemQuantity(e)}>+</span>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                    <div className="cart-modal-total-div">
                    <p style={{color: "var(--white-accent-text)"}}>TOTAL</p>
                    <h6>R {cartItemsCost}</h6>
                    </div>
                    { cart.length > 0 && <button onClick={() => {
                        closeAllModals()
                        history.push("/Checkout")
                    }}
                        className="btn btn-orange" style={{width: "100%"}}>Checkout</button>}
                </div>
            </div>
        </div>
    )
}

export default CartModal
