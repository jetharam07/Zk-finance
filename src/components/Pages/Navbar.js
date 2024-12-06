import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Separate CSS file
import zk from "../../Assets/logo_menu.png"
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 850);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobileView && (
        <div className="desktop-navbar">
          <div className="desktop-left-section">
            <img src={zk} className="desktop-logo" alt="Logo" />
            <button className="desktop-nav-button">Community</button>
            <button className="desktop-nav-button">About Us</button>
            <button className="desktop-nav-button">Contact</button>
          </div>
          <div className="desktop-right-section">
            <button className="desktop-connect-button"><ConnectButton/></button>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobileView && (
        <div className="mobile-navbar">
          <div className="mobile-header">
            <div className="mobile-left-section">
              <img src={zk} className="mobile-logo" alt="Logo" />
              <button className="mobile-connect-button"><ConnectButton/></button>
            </div>
            <button className="mobile-drawer-button" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
            <button className="mobile-nav-button">Community</button>
            <button className="mobile-nav-button">About Us</button>
            <button className="mobile-nav-button">Contact</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
