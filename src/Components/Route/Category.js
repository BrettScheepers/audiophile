import React from 'react'
import { useHistory } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import ImageNav from '../Builder/ImageNav'
import Brag from '../Builder/Brag'

const Category = ({ match }) => {
    const history = useHistory()
    const { data } = useGlobalContext()
    const categoryData = data.filter(item => item.category === match.params.category.toLowerCase())

    return (
        <>
            <section className="category-title">
                <h2>{match.params.category}</h2>
            </section>
            {
                categoryData.map((el, index) => {
                    const { name, description, image: { mobile, desktop }, slug } = el
                    
                    return (
                        <section key={index}>
                            <div className={`container category-item ${index%2 !== 0 ? `category-item-even` : ``}`}>
                                <div className="category-item-image">
                                    <picture>
                                        {/* <source media="(min-width:1100px)" srcSet={desktop.substring(1)} /> */}
                                        <source media="(min-width:550px)" srcSet={desktop.substring(1)} />
                                        <img src={mobile.substring(1)} alt={name}/>
                                    </picture>
                                </div>
                                <div className="category-item-info my">
                                    { el.new ? <p className="overline">new product</p> : <></>}
                                    <h1>{name}</h1>
                                    <p className="category-item-info-description">{description}</p>
                                    <button onClick={() => history.push(`/Product/${slug}`)}
                                        className="btn btn-orange">see product</button>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
            <ImageNav />
            <Brag />
        </>
    )
}

export default Category
