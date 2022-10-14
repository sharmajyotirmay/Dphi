import React, { useState } from 'react'
import useFetch from '../useFetch'
import Cards from './Cards'
import "./style/hackathons.css"
import { Link } from 'react-router-dom'
import Loading from './Loading'
export default function Hackathons(setHackathon) {
  // const {error, isPending, data: hackathons} = useFetch('')
  const { error, isPending, data: hackathons } = useFetch('http://localhost:8000/Hackathons')
  const [filter, setFilter] = useState("All");


  const handleChange = (e) => {
    setFilter(e.target.value);
  }
  return (
    <div className='hackathon_container'>
      <div className="top_bar">
        <h1>Explore Challenges</h1>
        <div className="input_bar">
          <input type="text" />
          {/* <button type='dropdown'>filter</button> */}
          <div className="select_filters">

            <select name="filters" id="filters"
              onChange={handleChange}
            >
              <optgroup label='Status'>
                <option value="All">
                  All
                </option>
                <option value="Active">
                  Active
                </option>
                <option value="Past">
                  Past
                </option>
                <option value="Upcoming">
                  Upcoming
                </option>
              </optgroup>
              {/* <optgroup label='Level'>
              <option value="Easy">
                Easy
              </option>
              <option value="Medium">
                Medium
              </option>
              <option value="Hard">
                Hard
              </option>
              </optgroup> */}
            </select>
          </div>
        </div>
        {filter !== "All" && <div className="applied_filter">
          <h2>{filter}</h2>
          <button
            onClick={() => setFilter("All")}
            className='filter_delete'>X</button>
        </div>}
      </div>
      {/* <Cards setHackathon = {setHackathon}/> */}
      <div className="hackathon_cards">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {hackathons && <Cards hackathons={hackathons} filter={filter} />}
      </div>
    </div>
  )
}
