/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const CheckoutModal = () => {
    const history =  useHistory()
    const { cart } = useGlobalContext()

    return (
        <div className="modal-background checkout-modal-background">

        </div>
    )
}

export default CheckoutModal
