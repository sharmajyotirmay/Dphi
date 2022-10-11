import React from 'react'
import "./style/about.css"
export default function About() {
  return (
    <div className='about_container'>
        <h1>Why participate in <span className='green about_AI'>AI chalanges?</span></h1>
        <div className="cards reason">
            <div className=" card skills">
                <div className="about_img">
                    <img src="./4.svg" alt="" />
                </div>
                <div className="about_info">
                    <h3>Prove your skills</h3>
                    <p>
                    Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
                    </p>
                </div>
            </div>
            <div className="card community">
            <div className="about_img">
                    <img src="./5.svg" alt="" />
                </div>
                <div className="about_info">
                    <h3>Learn from community</h3>
                    <p>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                </div>
            </div>
            <div className="card challenge">
            <div className="about_img">
                    <img src="./6.svg" alt="" />
                </div>
                <div className="about_info">
                    <h3>Challenge yourself</h3>
                    <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                </div>
            </div>
            <div className="card recognition">
            <div className="about_img">
                    <img src="./7.svg" alt="" />
                </div>
                <div className="about_info">
                    <h3>Earn recognition</h3>
                    <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
