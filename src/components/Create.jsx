import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style/create.css"
export default function Create() {

const [deadline, setDedline] = useState()



  const [state, setState] = useState({
    file: null,
    base64URL: ""
  })

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = e => {
    console.log(e.target.files[0]);
    let { file } = state;

    file = e.target.files[0];

    getBase64(file)
      .then(result => {
        file["base64"] = result;
        console.log("File Is", file);
        setState({
          base64URL: result,
          file
        });
      })
      .catch(err => {
        console.log(err);
      });

    setState({
      file: e.target.files[0]
    });
  };

    const dateChange = (e) => {
      setEnddate(e);
      const curDate = new Date();
      const end = new Date(enddate)
      const start = new Date(startdate)
      console.log(curDate.getDate() > end.getDate())
      if(curDate.getDate() > end.getDate()){
        if(curDate.getMonth() < end.getMonth()){
          setStatus("Upcoming")
        }else {
          setStatus("Past")
        }
      }else {
        if(curDate.getDate() < start.getDate()){
          setStatus("Upcoming")
        }else{
          setStatus("Active")
        }
      }
      if(status === "Active"){
        setDedline(Date.parse(end))
      }
      else if(status === "Upcoming"){
        setDedline(Date.parse(start))
      }
      else {
        setDedline(Date.now())
      }

    }

    const [name, setName] = useState('')
    const [startdate, setStartdate] = useState()
    const [enddate, setEnddate] = useState()
    const [discription, setDiscription] = useState('')
    const [image, setImage] = useState()
    const [status, setStatus] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      const hackathon = { name, startdate, enddate, discription, image : state.base64URL, status };
        
      fetch('http://localhost:8000/Hackathons/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hackathon)
      }).then(() => {
        
        navigate('/');
      })
    }

  return (
    <div className='create_container'>
        <div className="create_top">
            <h2>Challenge Details</h2>
        </div>

        <div className="create_form">
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="Name">Challenge name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} className='form_input name' type="text" />
                <label htmlFor="Start">Start Date</label>
                <input onChange={(e) => setStartdate(e.target.value)} value={startdate} className='form_input start_date' type="date" />
                <label htmlFor="End">End Date</label>
                <input onChange={(e) => dateChange(e.target.value)} value={enddate} className='form_input end_date' type="date" />
                <label htmlFor="description">Description</label>
                <input onChange={(e) => setDiscription(e.target.value)} value={discription} className='form_input detail' type="text" />
                <label htmlFor="Image">Image</label>
                <input
                
                onChange={(e) => handleFileInputChange(e)} 
                value={image} className='form_input image' type="file" accept='image/png, image/jpeg'/>
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
