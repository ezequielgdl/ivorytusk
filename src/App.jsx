import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Concerts from './pages/Concerts';
import Videos from './pages/Videos';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="concerts" element={<Concerts/>}></Route>
        <Route path="videos" element={<Videos/>}></Route>
      </Routes>
    </>
  )
}

export default App
