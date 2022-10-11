import React from 'react'
import "./style/overview.css"
import { useNavigate, useParams , Redirect, NavLink} from "react-router-dom";
import useFetch from "../useFetch";
export default function Overview() {
    const { id } = useParams();
    const { data: hackathons, error, isPending } = useFetch('http://localhost:8000/Hackathons/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/Hackathons/' + hackathons.id, {
      method: 'DELETE'
    }).then(() => {
      navigate("/");
    }) 
    }
  return (
    <div className='overview_container'>
        { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
        {hackathons && (<div className="hackathon_detail">
            <div className="top_overview_part">
            <p>{`Starts on ${hackathons.startdate} 9:00 PM (Indian Standard Time)`}</p>
            <h2>{hackathons.name}</h2>
            <h5>{hackathons.level}</h5>
        </div>
        <div className="bottom_overview_part">
            <div className="overview_btn">
                <h3>
                    Overview
                </h3>
                <div className="delete_btn">
                <NavLink
                exact
                to= {`/create`}
                activeClassName="active"
                className="Edit"
                style={{
                  color: "white",
                  width: "5em",
                  height: "2em",
                  fontSize: ".9rem",
                  background: "rgba(68, 146, 76, 1)"
                }}
                // onClick = {() => giveoverview(hackathon)}
                >
                Edit
      </NavLink>
                <button onClick={handleDelete} className='Delete'>Delete</button>
                </div>
            </div>
            <div className="hackathon_info">
                <p>
                Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
                <br/>
                <br/>

An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
<br/>
<br/>

Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
                </p>
            </div>
        </div>
            </div>)
        }
    </div>
  )
}
