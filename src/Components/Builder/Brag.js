import React from 'react'

const Brag = () => {
    return (
        <section className="brag">
            <div className="container brag-container">
                <picture>
                    <source media="(min-width:1100px)" srcSet="\assets\shared\desktop\image-best-gear.jpg" />
                    <source media="(min-width:550px)" srcSet="\assets\shared\tablet\image-best-gear.jpg" />
                    <img src="\assets\shared\mobile\image-best-gear.jpg" alt="Quality Gear" className="brag-img" />
                </picture>
                <div className="brag-text-container">
                    <h2>Bringing you the <span>best</span> audio gear</h2>
                    <p>
                        Located at the heart of Cape Town, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. Stop by our store 
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                        audio equipment.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Brag
