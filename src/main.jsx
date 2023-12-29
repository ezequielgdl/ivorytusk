import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Concerts from './pages/Concerts.jsx'
import Videos from './pages/Videos.jsx'

const router = createBrowserRouter([
  {
    path: "/ivorytusk/",
    element: <App/>,
    children: [
      {
        path: "/ivorytusk/",
        element: <Home/>
      },
      {
        path: "/ivorytusk/about/",
        element: <About/>
      },
      {
        path: "/ivorytusk/concerts/",
        element: <Concerts/>
      },
      {
        path: "/ivorytusk/videos/",
        element: <Videos/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
