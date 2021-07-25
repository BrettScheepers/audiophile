import React, { useState, useRef } from 'react'
import { useGlobalContext } from '../../context'
import { useHistory } from 'react-router-dom'
import ImageNav from '../Builder/ImageNav'
import Brag from '../Builder/Brag'

const Product = ({ match }) => {
    const history = useHistory()
    const { data, cart, setCart } = useGlobalContext()
    let product = data.find(item => item.slug === match.params.product)
    const { slug, name, description, image: { desktop, tablet, mobile }, features, price, includes, gallery, others } = product
    const galleryArr = Object.values(gallery)

    const [cartCounter, setCartCounter] = useState(1)

    const changeCartCounter = (e) => {
        let id = e.currentTarget.id
        
        if (id === "cart-plus") {
            setCartCounter(count => count + 1)
        }
        if (id === "cart-minus") {
            if (cartCounter > 1) {
                setCartCounter(count => count - 1)
            }
        } 
    }

    const addToCart = () => {
        let found = false
        let cartItem = {}
        cartItem.id = product.id
        cartItem.item = product
        cartItem.quantity = cartCounter

        // for (let i=0; i<cart.length; i++) {
        //     let el = cart[i]

        //     if (el.item.slug === cartItem.item.slug) {
        //         el.quantity = el.quantity + cartItem.quantity
        //         found = true
        //         break
        //     }
        // }

        let newCart = cart.map((el, index) => {
            if (el.item.slug === cartItem.item.slug) {
                found = true
                el.quantity = el.quantity + cartItem.quantity
                return el
            } else return el
        })

        if (found) setCart([...newCart])
        else setCart([...cart, cartItem])

        setCartCounter(1)
        // console.log(cart)
    }

    return (
        <>
            <div className="back-btn-div">
                <div className="container">
                    <button onClick={() => history.goBack()}
                        className="btn btn-back">Go Back</button>
                </div>
            </div>
            <section className="product-top-section">
                <div className="container category-item product-item">
                    <div className="category-item-image">
                        <picture>
                            {/* <source media="(min-width:1100px)" srcSet={desktop.substring(1)} /> */}
                            <source media="(min-width:550px)" srcSet={desktop.substring(1)} />
                            <img src={mobile.substring(1)} alt={name}/>
                        </picture>
                    </div>
                    <div className="category-item-info my">
                        { product.new ? <p className="overline">new product</p> : <></>}
                        <h1>{name}</h1>
                        <p className="category-item-info-description">{description}</p>
                        <h6>R {price}</h6>
                        <div className="product-cart-div">
                            <div className="cart-counter-div">
                                <span className="cart-counter-span" id="cart-minus"
                                    onClick={(e) => changeCartCounter(e)}>-</span>
                                <span className="cart-counter">{cartCounter}</span>
                                <span className="cart-counter-span" id="cart-plus"
                                    onClick={(e) => changeCartCounter(e)}>+</span>
                            </div>
                            <button onClick={() => addToCart()}
                                className="btn btn-orange btn-add-cart">add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container product-features-container">
                    <div className="product-features">
                        <h3>features</h3>
                        {features
                            .split('\n')
                            .map((str, index) => <p key={index} className="product-features-string">{str}</p>)
                        }
                    </div>
                    <div className="product-box-items">
                        <h3>in the box</h3>
                        <ul>
                            {
                                includes.map( (el, index) => {
                                    const { quantity, item} = el

                                    return <li key={index}><span className="span-orange">{quantity}x</span>   {item}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="container product-images-container">
                    {/* <div className="product-image-1"></div>
                    <div className="product-image-2"></div>
                    <div className="product-image-3"></div> */}
                    {
                        galleryArr.map( (el, index) => {
                            return (
                                <div className={`product-image product-image-${index+1}`} key={index+1}>
                                    <picture>
                                        <source media="(min-width:1100px)" srcSet={el.desktop.substring(1)} />
                                        <source media="(min-width:550px)" srcSet={el.tablet.substring(1)} />
                                        <img src={el.mobile.substring(1)} alt=""/>
                                    </picture>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <div className="container product-recommendations-container">
                    <h3>you may also like</h3>
                    <div className="product-recommendations">
                        {
                            others.map( (item, index) => {
                                const { slug, name, image } = item

                                return (
                                    <div className="product-recommendation" key={index}>
                                        <div className="product-recommendation-img">
                                            <picture>
                                                <source media="(min-width:1100px)" srcSet={image.desktop.substring(1)} />
                                                <source media="(min-width:550px)" srcSet={image.tablet.substring(1)} />
                                                <img src={image.mobile.substring(1)} alt={name}/>
                                            </picture>
                                        </div>
                                        <div className="product-recommendation-name-div">
                                            <h4>{name}</h4>
                                        </div>
                                        <button onClick={() => history.push(`/Product/${slug}`)}
                                            className="btn btn-orange">see product</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <ImageNav />
            <Brag />
        </>
    )
}

export default Product
