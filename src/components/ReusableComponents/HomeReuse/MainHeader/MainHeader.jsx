import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function MainHeader() {
    useEffect(() => {
        // Toggle menu functionality
        const toggleButton = document.querySelector('.toggle');
        const mainMenu = document.querySelector('.mainMenu');
        
        const handleToggleClick = () => {
          toggleButton.classList.toggle('open');
          mainMenu.classList.toggle('show');
        };
        
        toggleButton.addEventListener('click', handleToggleClick);
        
        // Scroll effect for header
        const handleScroll = () => {
          const header = document.querySelector(".hdrContain");
          header.classList.toggle("scrolled", window.scrollY > 50);
        };
        
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup
        return () => {
          toggleButton.removeEventListener('click', handleToggleClick);
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
   <>
    <header className="hdrContain">
        <span></span>
        <div className="container">
            <div className="row ">
                <div className="col-md-3">
                    <div className="logo">
                        <Link to={"/"}><img src="/assets/Home/logo.png" alt=""/></Link>
                    </div>
                </div>
                <div className="col-md-9 subpageMenu ">
                    <div className="mainMenu">
                        <ul>
                            <li><Link to={"/"}>home</Link></li>
                            <li><Link to={"/aboutus"}>about</Link></li>
                            <li class="drpDwn1">
                                <Link to={"/products"}>products
                                    <span class="dropdown-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                </Link>
                                    <ul class="subMenu1">
                                        <li><a href="">Printer Rantal</a></li>
                                        <li><a href=""> Printer Lease</a></li>
                                        <li><a href="">Maintenance Contract</a></li>
                                        <li><a href="">Multifunction Devices</a></li>
                                        <li><a href="">Copier Printer Consumables</a></li>
                                    </ul>
                            </li>
                            <li class="drpDwn">
                                <Link to={"/service"}>services
                                    <span class="dropdown-arrow"><i class="fa-solid fa-angle-down"></i></span>
                                </Link>
                                <ul class="subMenu">
                                    <li><a href="/servicemaintance">Printer Rantal</a></li>
                                    <li><a href="/lease">Printer Lease</a></li>
                                    <li><a href="/servicemaintance">Maintenance Contract</a></li>
                                    <li><a href="/servicemaintance">Multifunction Devices</a></li>
                                    <li><a href="/servicemaintance">Copier Printer Consumables</a></li>
                                </ul>
                            </li>
                            <li><Link to={"/client"}>clients</Link></li>
                            <li><Link to={"/contactus"}>contact</Link></li>
                            
                        </ul>
                    </div>
                    
                </div>
                <div className="toggleBtn">
                    <div className="toggle">
                         <span></span>
                         <span></span>
                         <span></span>
                    </div>
                </div>
              
            </div>
        </div>
    </header>
   </>
  )
}

export default MainHeader