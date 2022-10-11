import React from 'react'
import './style/navbar.css'
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo">
            <h1>Dphi</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <button className='challanges'>Challenges</button>
    </div>
  )
}
