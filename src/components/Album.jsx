import React,  { useState } from 'react'
import { GoTriangleUp } from "react-icons/go";
import { motion, AnimatePresence } from 'framer-motion';
import './Album.css'


const Album = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAlbum = () => {
      setIsOpen(!isOpen);
    };

    const containerVariants = {
      hidden: { opacity: 0, transition: {duration: 1} },
      visible: { opacity: 1, transition: {duration: 1} }
    }

  return (
    <div className='album-announcement'>
      <AnimatePresence>
        {isOpen && 
        <motion.div 
        className="album-container"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        >
            <a href="https://linktr.ee/ivorytusk" target="_blank">stream</a>
            <img className="album-cover" src="/thespacebetween.png" alt="The Space Between Album Cover" />
        </motion.div>
        }
        </AnimatePresence>
        <div className="marquee-container" onClick={toggleAlbum}>
          <div className="marquee-content scroll">
            <h6>new album / out now <GoTriangleUp/></h6>
            <h6>new album / out now <GoTriangleUp/></h6>
            <h6>new album / out now <GoTriangleUp/></h6>
            <h6>new album / out now <GoTriangleUp/></h6>
          </div>
        </div>
    </div>
  )
}

export default Album
