import React from 'react'

const ImageNav = () => {
    return (
        <nav className="image-nav">
            <div className="container image-nav-container">
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-headphones.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>headphones</h6>
                    <button className="btn-basic">Shop <span>{`>`}</span></button>
                </div>
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-speakers.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>speakers</h6>
                    <button className="btn-basic">Shop <span>{`>`}</span></button>
                </div>
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-earphones.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>earphones</h6>
                    <button className="btn-basic">Shop <span>{`>`}</span></button>
                </div>
            </div>
        </nav>
    )
}

export default ImageNav
