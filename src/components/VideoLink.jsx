import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { GrPlayFill } from "react-icons/gr"


const VideoLink = ({ image, link, text }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div>
        <div onClick={toggleFullScreen} className="video-link">
          <img src={image} alt="Ivory Tusk Video" />
          <button className='play-button'>
          <GrPlayFill />
          </button>
          <h6>{text}</h6>
        </div>
        {fullScreen && (
    <div className="full-screen-video">
      <div className="video-overlay" onClick={toggleFullScreen}>
      </div>
      <div className="video-content">
        <iframe
          title="Ivory Tusk Video"
          src={link}
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
        <button className="cancel-button" onClick={toggleFullScreen}>
          <MdOutlineCancel />
        </button>
      </div>
    </div>
  )}
    </div>
  );
};

export default VideoLink;
