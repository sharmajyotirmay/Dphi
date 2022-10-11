import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Overview from './components/Overview'

function App() {
  // const [hackathon, setHackathon] = useState({});
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element = {<Home />}/>
      <Route path='/create' element = {<Create/>}/>
      <Route path='/Hackathons/:id' element = {<Overview/>}/>
      {/* <Route path='/card' element = {<Card/>}/> */}
      {/* <Route path='/overview' element = {<Overview/>}/> */}
    </Routes>
    </>
  );
}

export default App;
