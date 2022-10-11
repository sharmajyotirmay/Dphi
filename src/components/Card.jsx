import React from 'react'
import './style/card.css'
export default function Card() {
  return (
    <div className='card_container'>
        <div className="card_info">
            <img src="./1.png" alt="" />
            <div className="status"></div>
            <div className="card_title"></div>
            <p className='card_duration'>Ends in</p>
            <div className="card_time"></div>
            <button className='card_btn'>Participate Now</button>
        </div>
    </div>
  )
}
