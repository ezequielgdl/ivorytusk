import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar" style={{ position: 'relative' }}>
      <div className="homelink"><Link to="/">IVORY TUSK</Link></div>
      <div className="menu-toggle" onClick={toggleNavbar} style={{ position: 'absolute', right: -10, top: 0, zIndex: 2, backgroundColor: "var(--main-color)", color: "var(--secondary-color)", padding: "12px"}}>
        Menu
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="navbar-links"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'row',
                zIndex: 2
              }}
            >
              <Link to="/concerts/">
              <motion.div className="navlinks" style={{ opacity: 0, backgroundColor: "var(--third-color", color: "var(--secondary-color)" }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }}>
                Concerts
              </motion.div>
              </Link>
              <Link to="/videos/">
              <motion.div className="navlinks" style={{ opacity: 0, backgroundColor: "var(--third-color)", color: "var(--secondary-color)" }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }}>
                Videos
              </motion.div>
              </Link>
              <Link to="/about/">
              <motion.div className="navlinks" style={{ opacity: 0, backgroundColor: "var(--third-color)", color: "var(--secondary-color)" }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
                About
              </motion.div>
              </Link>
              <motion.div className="navlinks" style={{ opacity: 0, backgroundColor: "var(--third-color)", color: "var(--secondary-color)" }} animate={{ opacity: 1}}>
                Menu
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
