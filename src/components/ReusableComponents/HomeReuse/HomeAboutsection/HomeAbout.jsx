import React from 'react'
import './HomeAbout.css'

function HomeAbout() {
  return (
    <>

    
<section className="AB-Prntr">
<div className="container">
  <div className="AbtRow">
    
  <div className="AbDesc">
  <a href="/ProductEnquiry" className="PrntrDescLink">
    <div className="PrntrDesc" data-aos="fade-in" data-aos-duration="1000">
      <div><img src="/assets/Home/arrows.png" alt="Flexible Plans Icon" /></div>
      <div><p>Flexible <br /> Plans</p></div>
    </div>
  </a>
</div>

<div className="AbDesc">
  <a href="/aboutus" className="PrntrDescLink">
    <div className="PrntrDesc" data-aos="fade-in" data-aos-duration="1000">
      <div><img src="/assets/Home/since.png" alt="Since 2012 Icon" /></div>
      <div><p>Since <br /> 2012</p></div>
    </div>
  </a>
</div>

<div className="AbDesc">
  <a href="/client" className="PrntrDescLink">
    <div className="PrntrDesc" data-aos="fade-in" data-aos-duration="1000">
      <div><img src="/assets/Home/client.png" alt="Client Icon" /></div>
      <div><p>1000+ <br /> Clients</p></div>
    </div>
  </a>
</div>


    <div className="AbDesc">
  <a href="/Sustainability" className="PrntrDescLink">
    <div className="PrntrDesc" data-aos="fade-in" data-aos-duration="1000">
      <div>
        <img src="/assets/Home/sustain1.png" alt="Sustainability Icon" />
      </div>
      <div>
        <p>
          Sustainability
        </p>
      </div>
    </div>
  </a>
</div>


  </div>
</div>

    </section>
    
    </>
  )
}

export default HomeAbout