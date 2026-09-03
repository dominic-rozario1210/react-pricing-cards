import "./App.css"
import React from 'react'
import PricingCard from "./components/PricingCard"
import pricingPlans from "./data/pricingData"

const App = () => {
  return (
    <div className="container">
      {
        pricingPlans.map( (plan) => (
          <PricingCard key={plan.id} plan={plan}/>
        ))
      }

    </div>
  )
}

export default App
