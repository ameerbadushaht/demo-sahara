import React from 'react'

function ClientBanner() {
  return (
    <>
      {/* <div className="Contact">
            <div className="Cntct-Icons">
                <div data-aos="fade-in" data-aos-duration="1000"><a href=""><img src="/assets/Home/phone.png" alt=""/></a></div>
                <div data-aos="fade-in" data-aos-duration="1000"><a href=""><img src="/assets/Home/email.png" alt=""/></a></div>
                <div data-aos="fade-in" data-aos-duration="1000"><a href=""><img src="/assets/Home/chat.png" alt=""/></a></div>
            </div>
        </div> */}
  <div className="Contact">
            <div className="crtQuote">
                <div className="calc" data-aos="fade-in" data-aos-duration="1000">
                    <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
                    <p>create <br/> your<br/> own <br/>quote</p></a>
                </div>
            </div>
</div>


        <section className="MainContainer">
            <div className="container">
                <div className="ABHero clntHero">
                    <div className="AbHro-txt"  data-aos="fade-up" data-aos-duration="1000">
                        <h1>Customers </h1>
                    </div>
                    <div className="AbHroImg clientBnr">
                        <img style={{width:'413px'}} src="/assets/Client/client-Bnr.png" alt=""/>
                    </div>
                </div>
            </div>   
        </section>
        <section className="customers">
            <div className="container">
                <div className="OurClnts">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ClntSec">
                                <div className="cmpny ClntDiv" data-aos="fade-in" data-aos-duration="1000">
                                    clients
                                </div>
                                <h2 data-aos="fade-in" data-aos-duration="1000">Trusted Businesses, Exceptional Services</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ClntSec" data-aos="fade-in" data-aos-duration="1000">
                                <h3>Our Valued Customers</h3>
                                <p className='clntPDesc'>We take pride in showcasing our esteemed clients who bring quality, innovation, and reliability to the industry. Whether you're looking for top-tier services or trusted business collaborations, our network of partners is here to meet your needs. Explore our listings and connect with the best in the market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ClientBanner