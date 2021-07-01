import React from 'react'
import ImageNav from '../Builder/ImageNav'
import Brag from '../Builder/Brag'

const Home = () => {
    return (
        <>
            <section className="title">
                <div className="container home-title-container">
                    <div className="home-title-content my">
                        <p className="overline" style={{color: "var(--white-accent-text)"}}>new product</p>
                        <h1 style={{color: "var(--white)"}}>
                            XX99 Mark II <br /> Headphones
                        </h1>
                        <p>
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </p>
                        <button className="btn btn-orange">See Product</button>
                    </div>
                    <picture>
                        {/* <source media="(min-width:1100px)" srcSet="\assets\shared\desktop\image-best-gear.jpg" />
                        <source media="(min-width:550px)" srcSet="\assets\shared\tablet\image-best-gear.jpg" /> */}
                        <img src="assets/home/image-header-tablet-bg-remove.png" alt="Hero" className="home-title-img" />
                    </picture>
                </div>
            </section>
            <ImageNav />
            <section>
                <div className="container home-content-container">
                    
                </div>
            </section>
            <Brag />
        </>
    )
}

export default Home
