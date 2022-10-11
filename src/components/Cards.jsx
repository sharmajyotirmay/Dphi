import React from 'react'
import { useState } from 'react'
import { Link , NavLink} from 'react-router-dom'
import "./style/card.css"
export default function Cards({hackathons, filter}) {
    // const [hackathons, setHackathons] = useState({})
    // const [time, setTime] = useState("00:00:00");
    
  return (
    <div className='cards_container'>
        {filter === "All" && (hackathons.map(hackathon => (
            <Link>
            <div className="hackathon_preview" key = {hackathon.id}>
                    <img src={hackathon.image} alt="" />
                    <div className="card_text">
                     <p className='status'>{hackathon.status}</p>
                     <h2>{hackathon.name}</h2>
                     <p>{hackathon.startdate}</p>
                    </div>
                    <NavLink
                exact
                to= {`/Hackathons/${hackathon.id}`}
                activeClassName="active"
                className="nav-links-home"
                style={{
                  color: "white"
                }}
                // onClick = {() => giveoverview(hackathon)}
                >
                Participate
              </NavLink>
            </div>
            </Link>
        )))}
        {
          filter !== "All" && (hackathons.filter(hackathon => (hackathon.status === filter)).map(
            hackathon => (
              <Link>
            <div className="hackathon_preview" key = {hackathon.id}>
                    <img src={hackathon.image} alt="" />
                    <div className="card_text">
                     <p>{hackathon.status}</p>
                     <h2>{hackathon.name}</h2>
                     <p>{hackathon.startdate}</p>
                    </div>
                    <NavLink
                exact
                to= {`/Hackathons/${hackathon.id}`}
                activeClassName="active"
                className="nav-links-home"
                style={{
                  color: "black"
                }}
                // onClick = {() => giveoverview(hackathon)}
                >
                Participate
              </NavLink>
            </div>
            </Link>
            )
          ))
        }
    </div>
  )
}
