import React from 'react'
import './SocialMediaBar.css'
import { FaApple, FaBandcamp, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const SocialMediaBar = () => {
  return (
    <div>
        <IconContext.Provider value={{ size: "1.5em", color: "var(--main-color)", className: "global-class-name" }}>
            <div className="sm-icons">
              <a className="sm-links" href="https://instagram.com/ivory.tusk" target="_blank"><FaInstagram /></a>
              <a className="sm-links" href="https://open.spotify.com/artist/7oLGUlHpPQcAiWZvKtbHrl?si=Dcil52SISEO8WyJbWYpFxQ" target="_blank"><FaSpotify/></a>
              <a className="sm-links" href="https://www.youtube.com/@ivorytusk1130" target="_blank"><FaYoutube/></a>
              <a className="sm-links" href="https://ivorytusk.bandcamp.com" target="_blank"><FaBandcamp/></a>
              <a className="sm-links" href="https://music.apple.com/us/artist/ivory-tusk/1110339216" target="_blank"><FaApple/></a>
            </div>
          </IconContext.Provider>
    </div>
  )
}

export default SocialMediaBar;