import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData';
import whteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header"
             style={{
                textTransform: "uppercase",
                fontSize: "50px",
            }}
                
        >
            <span className='stroke-text'>Ready to start </span>
            <span>your journey </span>
            <span className='stroke-text'>with us</span>
        </div>

        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, index) => (
                            <div className="feature" key={index}>
                                <img src={whteTick} alt="" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>see more benefits -> </span>
                    </div>
                    
                    <button className="btn">Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans