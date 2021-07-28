/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const CheckoutModal = () => {
    const history =  useHistory()
    const { cart, newName, grandTotal, setCart, setGrandTotal, setOpenCheckoutModal } = useGlobalContext()

    return (
        <div className="modal-background checkout-modal-background">
            <div className="checkout-modal-container">
                <div className="checkmark-div">
                    <span className="checkmark" >&#10003;</span>
                </div>
                <h3>Thank you <br /> for your order</h3>
                <p>You will recieve an e-mail confirmation shortly.</p>
                <div className="checkout-modal-content">
                    <div className="checkout-modal-items">
                        {
                            cart.map((el, index) => {
                                const { item, id, quantity } = el

                                return (
                                    <div className="cart-modal-item" key={id} id={index} >
                                        <img src={`/assets/cart/image-${item.slug}.jpg`} alt="" style={{width: "44px", borderRadius: "var(--border-radius)"}} />
                                        <div className="cart-modal-items-list-info">
                                            <h6>{newName(item.name)}</h6>
                                            <p>R {item.price}</p>
                                        </div>
                                        <div className="checkout-counter-div">
                                            <p style={{color: "var(--white-accent-text)", fontWeight: "bold", fontSize: "16px"}}>{quantity}x</p>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                    <div className="checkout-modal-grand-total">
                        <div className="checkout-modal-grand-total-container">
                            <p style={{color: "var(--white-accent-text)"}}>GRAND TOTAL</p>
                            <h6 style={{color: "var(--white)"}}>R {grandTotal}</h6>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => {
                        history.push('/')
                        setCart([])
                        setOpenCheckoutModal(false)
                    }}
                    style={{width: "100%"}}
                    className="btn btn-orange">back to home</button>
            </div>
        </div>
    )
}

export default CheckoutModal
