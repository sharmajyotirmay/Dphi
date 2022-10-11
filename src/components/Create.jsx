import React from 'react'
import "./style/create.css"
export default function Create() {
  return (
    <div className='create_container'>
        <div className="create_top">
            <h2>Challenge Details</h2>
        </div>

        <div className="create_form">
            <form action="submit">
                <label htmlFor="Name">Challenge name</label>
                <input className='form_input name' type="text" />
                <label htmlFor="Start">Start Date</label>
                <input className='form_input start_date' type="date" />
                <label htmlFor="End">End Date</label>
                <input className='form_input end_date' type="date" />
                <label htmlFor="description">Description</label>
                <input className='form_input detail' type="text" />
                <label htmlFor="Image">Image</label>
                <input className='form_input image' type="file" accept='image/png, image/jpeg'/>
                <label htmlFor="Level">Level Type</label>
                <select className='select_level' name="level" id="level">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
                <button>Create Challenge</button>
            </form>
        </div>
    </div>
  )
}
