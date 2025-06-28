import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Why Us?</span>

        <div>
            <span className='stroke-text'>Reasons About </span>
            <span>Us</span>
        </div>

        <div className='details-r'>
        <div>
            <img src={tick} alt=""/>
            <span>over 140+ expert coaches</span>
        </div>
        <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster then before</span>
        </div>
        <div>
            <img src={tick} alt="" />
            <span>upto 2 free programs for new members</span>
        </div>
        <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
        </div>
        </div>

        <span
            style={{
                color: "var(--gray)",
                fontWeight: "bold",
                textTransform: "uppercase", 
                padding: "20px",
                fontSize: "30px"
            }}
        > 
            Our Partners
        </span>

        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
