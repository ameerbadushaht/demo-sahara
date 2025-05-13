import React, { useState, useEffect } from 'react';
import './Mobile-Header.css';

function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = (index) => setOpenSubMenu(openSubMenu === index ? null : index);

  return (
    <header className={`MobileHeader-hdr-contain ${isScrolled ? 'MobileHeader-scrolled' : ''}`}>
      <span className="topbar"></span>
        <div className="MobileHeader-container">
          <div className="MobileHeader-hdrrow">
          <div className="col-md-3 beforeLogo">
            <div className="MobileHeader-logo">
              <a href="/">
                <img src="/logo.svg" alt="Company Logo" />
              </a>
            </div>
          </div>

            <div className={`MobileHeader-menuSec ${isMenuOpen ? 'MobileHeader-show' : ''}`}>
              <div className="MobileHeader-mainMenu">
                <ul className="MobileHeader-mainUl">
                  <li><a href="/">Home</a></li>
                  <li><a href="/aboutus">About</a></li>

                  {/* Products Dropdown */}
                  <li className={`MobileHeader-hasSub ${openSubMenu === 0 ? 'MobileHeader-open' : ''}`}>
                    <a onClick={(e) => e.preventDefault()}>
                      Products
                      <span className="MobileHeader-dropdown-arrow" onClick={() => toggleSubMenu(0)}>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="MobileHeader-subMenu" style={{ display: openSubMenu === 0 ? 'block' : 'none' }}>
                      <li><a href="/consumables">Copier Printer Consumables</a></li>
                      <li><a href="/products">Multi Function Devices</a></li>
                    </ul>
                  </li>

                  {/* Services Dropdown */}
                  <li className={`MobileHeader-hasSub ${openSubMenu === 1 ? 'MobileHeader-open' : ''}`}>
                    <a onClick={(e) => e.preventDefault()}>
                      Services
                      <span className="MobileHeader-dropdown-arrow" onClick={() => toggleSubMenu(1)}>
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="MobileHeader-subMenu" style={{ display: openSubMenu === 1 ? 'block' : 'none' }}>
                      <li><a href="/service">Copier Printer Lease</a></li>
                      <li><a href="/servicemaintance">Copier Printer Maintenance</a></li>
                    </ul>
                  </li>

                  <li><a href="/client">Clients</a></li>
                  <li><a href="/contactus">Contact</a></li>
                </ul>
              </div>
            </div>

          

            {/* Mobile Toggle Button */}
            <div className={`MobileHeader-toggle ${isMenuOpen ? 'MobileHeader-open' : ''}`} onClick={toggleMenu}>
              <div className="toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default MobileHeader;