import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/navbar.css'
export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo">
        <NavLink
                exact
                to= {`/`}
                activeClassName="active"
                className="Edit"
                style={{
                  color: "black",
                  width: "5em",
                  height: "2em",
                  fontSize: "1.3rem",
                  background: "none",
                  fontWeight: "bold"
                }}
                // onClick = {() => giveoverview(hackathon)}
                >
                Dphi
      </NavLink>
            {/* <img src="" alt="" /> */}
        </div>
        <button className='challanges'>Challenges</button>
    </div>
  )
}
