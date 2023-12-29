import React from 'react'
import NavBar from '../components/NavBar'
import VideoLink from '../components/VideoLink'
import './Pages.css'

const Videos = () => {
  const videoData = [
    {image: "/video-1.png", link:"https://www.youtube.com/embed/dPS2G_nKdTc", text: "Sleepless Nights & The World (smallsongs session)" },
    {image: "/video-2.png", link:"https://www.youtube.com/embed/f9qh756ZXko", text: "Where Are You Running Now? (open folk bcn session)" },
    {image: "/video-3.png", link:"https://www.youtube.com/embed/Tl9BcDPJc44", text: "Where Are You Running Now? (sofar lund)" }
  ]


  return (
    <div className="videos-container">
      <NavBar/>
        <div className="video-grid">
          {videoData.map((video, index) => (
            <VideoLink image={video.image} link={video.link} text={video.text} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Videos