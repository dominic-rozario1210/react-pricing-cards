import React from 'react'

const PricingCard = ({ plan }) => {
    return (
        <div className='card'>
            <h4>{plan.title}</h4>
            <h2>{plan.price}</h2>
            <ul className='list'>
                {
                    plan.features.map((feature) => (
                        <li className={feature.available ? "tick" : "cross"}>
                            <i className={`fa-solid ${feature.available ? "fa-check" : "fa-xmark"}`}></i>
                            {feature.text}
                        </li>
                    ))
                }
            </ul>
            <button className='btn'>Button</button>
        </div>
    )
}

export default PricingCard
