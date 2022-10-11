import React from 'react'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import About from './About'
import Hackathons from './Hackathons'
// import Create from './Create'

import "./style/home.css"
import { Router, Routes } from 'react-router-dom'
export default function Home({setHackathon, hackathons}) {
  return (
    <div className='main-container'>
        <h2 style={{color:"black"}}>{hackathons}</h2>
        <div className="home_section_background">
        <HomeSection/>
        </div>
        <About/>
        <Hackathons setHackathon = {setHackathon}/>
        {/* <Create/> */}
    </div>
  )
}
