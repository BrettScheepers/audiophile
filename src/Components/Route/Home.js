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
                    <img src="assets/home/image-header-tablet-bg-remove.png" alt="Hero" className="home-title-img" />
                </div>
            </section>
            <ImageNav />
            <section>
                <div className="container home-content-container">
                    <div className="home-main-speaker">
                        <div className="home-main-speaker-img">
                            <picture>
                                <source media="(min-width:1100px)" srcSet="\assets\home\desktop\image-speaker-zx9.png" />
                                <source media="(min-width:550px)" srcSet="\assets\home\tablet\image-speaker-zx9.png" />
                                <img src="\assets\home\mobile\image-speaker-zx9.png" alt="zx9 Speaker"/>
                            </picture>
                        </div>
                        <div className="home-main-speaker-text my">
                            <h2>ZX9 <br /> speaker</h2>
                            <p style={{color: "var(--white-accent-2)", width: "clamp(10ch, 100%, 40ch)"}}>
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                            </p>
                            <button className="btn btn-black">see product</button>
                        </div>
                    </div>
                    <div className="home-secondary-speaker">
                        <picture>
                                <source media="(min-width:1100px)" srcSet="\assets\home\desktop\image-speaker-zx7.jpg" />
                                <source media="(min-width:550px)" srcSet="\assets\home\tablet\image-speaker-zx7.jpg" />
                                <img src="\assets\home\mobile\image-speaker-zx7.jpg" alt="zx7 Speaker"/>
                        </picture>
                        <div className="home-secondary-speaker-text my">
                            <h3>ZX7 speaker</h3>
                            <button className="btn btn-black">see product</button>
                        </div>
                    </div>
                    <div className="home-earphones">
                        <picture>
                                <source media="(min-width:1100px)" srcSet="\assets\home\desktop\image-earphones-yx1.jpg" />
                                <source media="(min-width:550px)" srcSet="\assets\home\tablet\image-earphones-yx1.jpg" />
                                <img src="\assets\home\mobile\image-earphones-yx1.jpg" alt="yx1 Earphones"/>
                        </picture>
                    </div>
                    <div className="home-earphones-text">
                        <div className="home-earphones-text-wrapper my">
                            <h3>YX1 earphones</h3>
                            <button className="btn btn-black">see product</button>
                        </div>
                    </div>
                </div>
            </section>
            <Brag />
        </>
    )
}

export default Home
