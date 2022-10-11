import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/home.css"
export default function homeSection() {
  return (
    <div className='section-container'>
      <div className="texts">
        <h1>Accelerate Innovation<br/>with Global AI Challenges</h1>
        <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
      </div>
      <div className="btn">
      <NavLink
                exact
                to= {`/create`}
                activeClassName="active"
                className="nav-links-home"
                style={{
                  color: "white"
                }}
                // onClick = {() => giveoverview(hackathon)}
                >
                Create Challenge
      </NavLink>
      </div>
      <div className="stats">
        <div className="submissions">
          <div className="img_submissions">
            <img src="./1.svg" alt="" />
          </div>
          <div className="info">
            <h3>100K+</h3>
          <p>AI model submissions</p>
          </div>
        </div>
        <div className="scientists">
        <div className="img_scientists">
            <img src="./2.svg" alt="" />
          </div>
          <div className="info">
            <h3>100+</h3>
          <p>Data scientists</p>
          </div>
        </div>
        <div className="hosted">
        <div className="img_hosted">
            <img src="./3.svg" alt="" />
          </div>
          <div className="info">
            <h3>100+</h3>
          <p>AI Chalanges hosted</p>
          </div>
        </div>
      </div>
    </div>
  )
}
