import React from 'react'
import './HomeProductCard.css'

function HomeProductCard() {
  return (
    <>

    
<section className="Services">
        <div className="container">
            <div className="ServContainer">
            <div className="row">
                <div className="col-md-8 upperServ">
                    <div className="PrntrServ">
                        <div data-aos="zoom-in" data-aos-duration="1000"><img src="/assets/Home/PrinterImg.png" alt=""/></div>
                        <div className="ServTxt" >
                            <h2 data-aos="fade-in" data-aos-duration="1000">Printing Made Simple - <span>We Handle the Stress, You Focus on Success! </span></h2>

                            <div className="BoxTxt" data-aos="fade-in" data-aos-duration="1000">
                                <h3 className="seamless">your partner in seamless</h3>
                                <h3>printer rental solutions! </h3>
                            </div>
                            <p>We are one of the leading companies in UAE providing Managed print service / pay
                                per print agreement. We will take care of all your office document printing
                                headaches such as printer breakdown, low toner, device repair, device
                                replacement and device upgradation etc. </p>
                            
                            {/* <div className="ViewMoreBtn" ><a href="/aboutus">Explore</a></div> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 productCard">
                    <h4  className='productCardHead'>Complete Printing Solutions - No Ownership Hassles</h4>
                                     <p className='productCardDesc'>Hassle-free printer rental solutions with maintenance, repairs, and toner management included - ensuring seamless printing for your business.</p>
                                     <div className="primaryBtn"><a href="/products">Explore</a></div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default HomeProductCard