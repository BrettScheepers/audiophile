import React from 'react'
import { useHistory } from 'react-router-dom'

const ImageNav = () => {
    const history = useHistory()

    return (
        <nav className="image-nav">
            <div className="container image-nav-container">
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-headphones.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>headphones</h6>
                    <button onClick={() => history.push(`/Category/Headphones`)}
                        className="btn-basic">Shop <span className="span-orange image-nav-span-icon">{`>`}</span></button>
                </div>
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-speakers.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>speakers</h6>
                    <button onClick={() => history.push(`/Category/Speakers`)}
                        className="btn-basic">Shop <span className="span-orange image-nav-span-icon">{`>`}</span></button>
                </div>
                <div className="image-nav-item">
                    <img src="\assets\shared\desktop\image-earphones.png" alt="headphones" className="image-nav-img" style={{width: "150px"}} />
                    <h6>earphones</h6>
                    <button onClick={() => history.push(`/Category/Earphones`)}
                        className="btn-basic">Shop <span className="span-orange image-nav-span-icon">{`>`}</span></button>
                </div>
            </div>
        </nav>
    )
}

export default ImageNav
