import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import './Pages.css'
import SeatedWidget from '../components/SeatedWidget'

const Concerts = () => {

      return (
      <div className="concerts-container">
        <NavBar></NavBar>
        <div className="tour-dates">TOUR DATES</div>
        <SeatedWidget></SeatedWidget>
      </div>
      );
}

export default Concerts;