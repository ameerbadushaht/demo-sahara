import React from 'react'

import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

<footer className="PrntrFtr">
        <div className="container">
            <div className="FtrContain">
                <div className="row">
                    <div className="col-40">
                        <div className="FtrCol">
                            <div className="FtrLogo" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/Home/logo_white.svg" alt=""/></div>
                            <div data-aos="fade-in" data-aos-duration="1000"><p>Trusted provider of office equipment solutions in the UAE, specializing in printer rentals, managed print services, and document management solutions. With a commitment to quality and customer satisfaction</p></div>
                            <div  className="medias" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="MdIcons"><a href="https://www.facebook.com/saharaedoc"><i className="fa-brands fa-facebook-f"></i></a></div>
                                {/* <div className="MdIcons"><a href=""><i className="fa-brands fa-x-twitter"></i></a></div> */}
                                <div className="MdIcons"><a href="https://www.instagram.com/sahara_office_equipments?igsh=MWw3ZXljbDBwNDlybQ=="><i className="fa-brands fa-instagram"></i></a></div>
                                <div className="MdIcons"><a href="https://www.linkedin.com/company/sahara-office-equipment-trading-llc--sharjah/"><i className="fa-brands fa-linkedin"></i></a></div>
                                {/* <div className="MdIcons"><a href=""><i className="fa-brands fa-youtube"></i></a></div> */}
                                <div className="MdIcons">
                                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-20">
                        <div  className="FtrCol" data-aos="fade-in" data-aos-duration="1000">
                            <h3>Information</h3>
                            <ul>
                                <li><a href='/aboutus'>- About Company</a></li>
                                <li><a href="/contactus">- Contact Info</a></li>
                                <li><a href="/privacy">- Privacy Policy</a></li>
                                <li><a href="/Sustainability">- Sustainability</a></li>
                                <li><a href="/terms">- Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="FtrCol" data-aos="fade-in" data-aos-duration="1000">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/service">- Printer Rental and Lease</a></li>
                                {/* <li><a href="#">- Printer Lease</a></li> */}
                                <li><a href="/servicemaintance">- Maintenance Contract</a></li>
                                <li><a href="/products">- Multifunction Devices</a></li>
                                <li><a href="/consumables">- Printer Consumables</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-20">
                        <div className="FtrCol" data-aos="fade-in" data-aos-duration="1000">
                            <h3>Contact</h3>
                            <ul>
                                <li><a href="tel:+97165426169"><span class="FtrIcons footerCall"><img src="/assets/Contact/call.png" alt=""></img></span> +971 6 5426169</a></li>
                                <li><a href="tel:+97165276444"><span class="FtrIcons footerCall"><img src="/assets/Contact/call.png" alt=""></img></span> +971 6 5276444</a></li>
                                <li><a href="tel:+971503823969"><span class="FtrIcons footerCall"><img src="/assets/Contact/call.png" alt=""></img></span> +971 50 3823969</a></li>
                                <li><a href="mailto:info@saharaedoc.com"><span class="FtrIcons footerEmail"><img src="/assets/Contact/Email-white.png" alt=""></img></span> info@saharaedoc.com</a></li>
                                </ul>

                        </div>
                    </div>

                    

                </div>
            </div>
            <div className="Copy"><p>&copy; 2025 Sahara Office Equip. TR. LLC</p></div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer