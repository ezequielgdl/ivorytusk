import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Concerts from './pages/Concerts';
import Videos from './pages/Videos';

function App() {

  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default App
