import React from 'react'

function ServiceMaintenanceBanner() {
  return (
    <>
     <div className="Contact">
            <div className="crtQuote">
                <div className="calc" data-aos="fade-in" data-aos-duration="1000">
                    <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
                    <p>create <br/> your<br/> own <br/>quote</p></a>
                </div>
            </div>
</div>
    <section class="MainContainer">
            <div class="container">
                <div class="ABHero">
                    <div class="AbHro-txt ServtTxt"  data-aos="fade-up" data-aos-duration="1000">
                        <h1>Copier Printer Maintenance</h1>
                    </div>
                    <div class="AbHroImg ServHroImg ">
                        <img src="/assets/Services/servBnr.png" alt=""/>
                    </div>
                </div>
            </div>   
        </section>


        <section class="customers">
            <div class="container">
                <div class="OurClnts">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="ClntSec servSec">
                                <div class="cmpny ClntDiv">
                                    services
                                </div>
                                <h2>Reliable Maintenance, Uninterrupted Workflow!</h2>
                                <div class="PrntrBrefDesc servMain">
                                    <div class=" ServMan">
                                        <div><img src="/assets/Services/ManPrntr.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="ClntSec PrdctDetal ClntTopMarg">
                                <h3>Decade-Long Expertise in Copier & Printer Maintenance Across the UAE!</h3>
                                <p className='servMainDesc'>Nothing is more frustrating than a copier that isn’t working correctly, we know well how one broken down copier can disrupt an entire office. We are offering copier service level agreement since a decade.</p>
                                <div class="PrList mainteLst">
                                    <li>Experience in the area of Copier AMC (annual maintenance contract), FSMA (Full service maintenance agreement) and other Office equipment for almost a decade now in the UAE. The best companies and Government Institutions in UAE are our clients.</li>
                                    <li>UAE based company with offices in Sharjah – we operate with world class processes, SLA and customer service norms.</li>
                                    <li>Large engineering team and proven technical expertise in servicing and maintaining copiers and printers. We also maintain a large inventory of copier printer spare parts that may not be available in the general market.</li>
                                </div>
                                <div class="enquiry">
                                    <a href="/ProductEnquiry">quick enquiry</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceMaintenanceBanner