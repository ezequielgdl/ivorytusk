import React from 'react'
import SocialMediaBar from '../components/SocialMediaBar';
import NavBar from '../components/NavBar';
import Album from '../components/Album';

const Home = () => {
  return (
    <div className='scrolling-bkg-container'>
        <div className="scrolling-bkg">
          <NavBar></NavBar>
          <SocialMediaBar/>
          <Album/>
        </div>
      </div>
  )
}

export default Home