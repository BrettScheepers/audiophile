/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const Checkout = () => {
    const history = useHistory()
    const { cart, newName, cartItemsCost, setOpenCheckoutModal } = useGlobalContext()

    useEffect(() => {
        if (cart.length === 0) history.goBack()
    }, [])

    const [paymentOption, setPaymentOption] = useState(null);
    const shippingFee = 200
    const vatValue = Math.floor(cartItemsCost/100*14)
    const grandTotal = cartItemsCost + shippingFee

    const continueToFinalCheckout = (e) => {
        e.preventDefault()

        // setOpenCheckoutModal(true)
    }

    return (
        <section className="checkout">
            <div className="back-btn-div">
                <div className="container">
                    <button onClick={() => history.goBack()}
                        className="btn btn-back">Go Back</button>
                </div>
            </div>
            <div className="container checkout-container">
                <div className="checkout-form-div">
                    <h2>Checkout</h2>
                    <form id="form">
                        <fieldset>
                            <legend className="subtitle">billing details</legend>
                            <div className="fieldset-div">
                                <div className="form-name">
                                    <label htmlFor="name">name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Brett Scheepers"
                                        required />
                                </div>
                                <div className="form-email">
                                    <label htmlFor="email">email address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="brettscheepers@gmail.com"
                                        required />
                                </div>
                                <div className="form-phone-num">
                                    <label htmlFor="phoneNumber">phone number</label>
                                    <input 
                                        name="phoneNumber"
                                        type="tel" 
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                        placeholder="0727777777"
                                        required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="subtitle">shipping info</legend>
                            <div className="fieldset-div">
                                <div className="form-address" style={{column: "2"}}>
                                    <label htmlFor="address">address</label>
                                    <input 
                                        type="text"
                                        name="address" 
                                        placeholder="101 Christmas Land"
                                        required />
                                </div>
                                <div className="form-zip">
                                    <label htmlFor="zipCode">ZIP code</label>
                                    <input 
                                        name="zip-code"
                                        type="number"
                                        length="4"
                                        inputMode="numeric"
                                        placeholder="7405"
                                        required />
                                </div>
                                <div className="form-city">
                                    <label htmlFor="city">city</label>
                                    <input 
                                        name="city"
                                        type="text"
                                        placeholder="Cape Town"
                                        required />
                                </div>
                                <div className="form-country">
                                    <label htmlFor="country">country</label>
                                    <input 
                                        name="country"
                                        type="text"
                                        placeholder="South Africa"
                                        required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="subtitle">payment details</legend>
                            <div className="fieldset-div fieldset-payment">
                                <div className="label-div">
                                    <label>payment method</label>
                                </div>
                                <div className="form-payment-method">
                                    <div className={`input-container ${paymentOption === "e-money" && `input-container-selected`}`}>
                                        <input 
                                            type="radio"
                                            id="e-money"
                                            name="paymentMethod"
                                            value="e-money"
                                            required
                                            onClick={(e) => setPaymentOption(e.currentTarget.value)} />
                                        <label htmlFor="e-money" className="radio-label" >e-money</label>
                                    </div>
                                    <div className={`input-container ${paymentOption === "cash-on-delivery" && `input-container-selected`}`}>
                                        <input 
                                            type="radio"
                                            id="cash-on-delivery"
                                            name="paymentMethod"
                                            value="cash-on-delivery" 
                                            required
                                            onClick={(e) => setPaymentOption(e.currentTarget.value)} />
                                        <label htmlFor="cash-on-delivery" className="radio-label" >cash on delivery</label>
                                    </div>
                                </div>
                                {
                                    paymentOption === "e-money" ? (
                                        <>
                                            <div className="form-e-money-number">
                                                <label htmlFor="e-moneyNumber">e-money number</label>
                                                <input 
                                                    type="number" 
                                                    name="e-moneyNumber"
                                                    length="7"
                                                    placeholder="1234567"
                                                    required />
                                            </div>
                                            <div className="form-e-money-pin">
                                                <label htmlFor="e-moneyPin">e-money PIN</label>
                                                <input 
                                                    type="number" 
                                                    name="e-moneyPin"
                                                    length="4"
                                                    placeholder="1234"
                                                    required />
                                            </div>
                                        </>
                                    ) : paymentOption === "cash-on-delivery" ? (
                                        <>
                                            <div className="cash-on-delivery-div">
                                                <p style={{color: "var(--white-accent-text)"}} >
                                                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                                </p>
                                            </div>
                                        </>
                                    ) : null
                                }
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="checkout-summary-div">
                    <h4>Summary</h4>
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
                                        <div className="checkout-counter-div">
                                            <p style={{color: "var(--white-accent-text)", fontWeight: "bold", fontSize: "16px"}}>{quantity}x</p>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                    <div className="checkout-items-total-div checkout-totals">
                        <p style={{color: "var(--white-accent-text)"}}>TOTAL</p>
                        <h6>R {cartItemsCost}</h6>
                    </div>
                    <div className="shipping-total-div checkout-totals">
                        <p style={{color: "var(--white-accent-text)"}}>SHIPPING</p>
                        <h6>R {shippingFee}</h6>
                    </div>
                    <div className="vat-total-div checkout-totals">
                        <p style={{color: "var(--white-accent-text)"}}>VAT (INCLUDED)</p>
                        <h6>R {vatValue}</h6>
                    </div>
                    <div className="grand-total-div checkout-totals">
                        <p style={{color: "var(--white-accent-text)"}}>GRAND TOTAL</p>
                        <h6 style={{color: "var(--orange)"}}>R {grandTotal}</h6>
                    </div>
                    <button 
                        type="submit" 
                        form="form"
                        onClick={(e) => continueToFinalCheckout(e)}
                        className="btn btn-orange" style={{width: "100%"}}>continue</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout
