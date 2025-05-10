
import React from 'react'
import RequestSection from '../CommonReuseComponents/RequestSection/RequestSection'
import CompanySlider from '../CommonReuseComponents/CompanySlider/CompanySlider'
import Header from '../../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../../ReusableComponents/Home-Header/Mobile-Header';

function AboutBanner() {
  const width = useWindowWidth();

  return (
   <>
     <main className="PrntrMain">
     {width >= 1000 ? <Header /> : <MobileHeader />}

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
                <div className="ABHero">
                    <div className="AbHro-txt" data-aos="fade-up" data-aos-duration="1000">
                        <h1>About <br/><span>Sahara Office Equipments</span></h1>
                    </div>
                    <div className="AbHroImg">
                        <img src="/assets/About/AbPrinter.png" alt=""/>
                    </div>
                </div>
            </div>   
        </section>

        <section className="saharaAbout">
            <div className="container">
                <div className="Ab-contain">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="AbCntnt" data-aos="fade-in" data-aos-duration="1000">
                                <div className="cmpny">
                                    company
                                </div>
                                <div className="Ab-head">
                                    <h2>Hassle-Free Printing, Cost-Effective Solutions.</h2>
                                </div>
                                <div className="AbtImg">
                                    <img src="/assets/About/man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="AbCntnt" data-aos="fade-in" data-aos-duration="1000">
                                <div className="AbTxt">
                                    <p><strong>Sahara Office Equipment TR LLC</strong> has been revolutionizing the <strong>printer rental and managed print services</strong> industry in the UAE since 2012. With over <strong>1000 satisfied clients</strong> and a fleet of <strong>1400+ high-performance printers</strong>, we provide businesses with <strong>cost-effective, hassle-free printing solutions</strong> that enhance productivity and reduce operational expenses.</p>
                                </div>
                                <div className="aboutSahara">
                                    <h2>Unique Value Proposition</h2>
                                    <ul>
                                        <li><strong>Cost Savings</strong>: Bulk purchasing & self-produced spare parts allow us to offer the best market rates.</li>
                                        <li><strong>Hassle-Free Maintenance</strong>: Full-service contracts with all-inclusive consumables & repairs.</li>
                                        <li><strong>Eco-Friendly Solutions</strong>: Refurbished, high-quality printers reduce e-waste & carbon footprint.</li>
                                        <li><strong>Productivity Focus</strong>: No interruptions to your workflow - we handle everything from setup to maintenance.</li>
                                        <li><strong>No Hidden Costs</strong>: Transparent pricing with predictable monthly billing.</li>
                                    </ul>
                                </div>
                                <div className="aboutSahara">
                                    <h2>Our Services</h2>
                                    <ul>
                                        <li><strong>Printer Rental & Leasing</strong>: Flexible rental plans with low upfront costs & full-service support.</li>
                                        <li><strong>Managed Print Services (MPS)</strong>: Smart print management to reduce waste & improve efficiency.</li>
                                        <li><strong>Enterprise Solutions</strong>: Custom solutions for corporates, schools, and SMEs.</li>
                                    </ul>
                                </div>
                                <div className="aboutSahara">
                                    <h2>Sustainability Commitment</h2>
                                    <p>We believe in a <strong>greener future</strong>. By using <strong>refurbished copiers</strong> and reducing <strong>e-waste</strong>, we help businesses lower their <strong>carbon footprint</strong> while ensuring <strong>top-tier printing performance</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="SP-msnVsn">
            <div className="container">
                <div className="mvSection">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="mvRow" data-aos="fade-in" data-aos-duration="1000">
                                <h2>Mission</h2>
                                <p>To provide seamless, cost-effective, and eco-friendly printing solutions that empower businesses to work smarter, not harder.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="mvRow" data-aos="zoom-in" data-aos-duration="1000">
                                <div><img src="/assets/About/MV-sahara.png" alt=""/></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="mvRow" data-aos="fade-in" data-aos-duration="1000">
                                <h2>Vision</h2>
                                <p>To be the leading provider of sustainable printer rental solutions across the UAE, ensuring businesses experience zero downtime and maximum efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="Sp-support">
             <div className="container">
                 <div className="spprtList">
                     <div className="row">
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img1.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Customer-Centric Approach</h3>
                                     <p>We prioritize our customers’ needs, ensuring prompt service and reliable solutions.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img2.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Integrity & Trust</h3>
                                     <p>We build lasting relationships based on transparency, honesty, and commitment to our promises.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img3.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Reliability & Excellence</h3>
                                     <p>We uphold the highest standards of service, ensuring on-time support, repairs, and upgrades.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img4.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Innovation & Technology</h3>
                                     <p>We bring the latest advancements in printing technology to businesses, enabling them to stay ahead.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img5.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Cost Efficiency</h3>
                                     <p>We help businesses optimize their printing expenses, ensuring maximum value at minimal costs.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className="listdetails">
                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img6.png" alt=""/></div>
                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
                                     <h3>Sustainability & Responsibility</h3>
                                     <p>We promote responsible printing practices, reducing waste and contributing to a greener future.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>

        <RequestSection/>
        <CompanySlider/>
    </main>
   </>
  )
}

export default AboutBanner












// import React from 'react'
// // import MainHeader from '../HomeReuse/MainHeader/MainHeader'
// // import Sidebar from '../Sidebar'
// import RequestSection from '../CommonReuseComponents/RequestSection/RequestSection'
// import CompanySlider from '../CommonReuseComponents/CompanySlider/CompanySlider'
// import Header from '../../ReusableComponents/Home-Header/Header'
// function AboutBanner() {
//   return (
//    <>
//      <main className="PrntrMain">
//         {/* <MainHeader/> */}
//         <Header/>
//        {/* <Sidebar/> */}
//        <div className="Contact">
//             <div className="crtQuote">
//                 <div className="calc" data-aos="fade-in" data-aos-duration="1000">
//                     <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
//                     <p>create <br/> your<br/> own <br/>quote</p></a>
//                 </div>
//             </div>
//         </div>
//         <section className="MainContainer">
//             <div className="container">
//                 <div className="ABHero">
//                     <div className="AbHro-txt"  data-aos="fade-up" data-aos-duration="1000">
//                         <h1>About <br/><span>Sahara Office Equipments</span></h1>
//                     </div>
//                     <div className="AbHroImg">
//                         <img src="/assets/About/AbPrinter.png" alt=""/>
//                     </div>
//                 </div>
//             </div>   
//         </section>

//         <section className="saharaAbout">
//             <div className="container">
//                 <div className="Ab-contain">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-12">
//                             <div className="AbCntnt" data-aos="fade-in" data-aos-duration="1000">
//                                 <div className="cmpny">
//                                     company
//                                 </div>
//                                 <div className="Ab-head">
//                                     <h2>Hassle-Free Printing, Cost-Effective Solutions.</h2>
//                                 </div>
//                                 <div className="AbtImg">
//                                     <img src="/assets/About/man.png" alt=""/>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-8 col-md-12">
//                             <div className="AbCntnt" data-aos="fade-in" data-aos-duration="1000">
//                                 <div className="AbTxt">
//                                     <p>We are one of the leading compaies in UAE providing Managed print service / pay per print agreement. We will take care all your office document printing headaches such as printer breakdown, low toner, device repair, device replacement and device upgradation etc.</p>
//                                     <p>No more worrying about documentation breakdown, No initial investments.</p>
//                                 </div>
//                                 <div className="aboutSahara">
//                                     <h2>What happened in 2012 ?</h2>
//                                     <ul>
//                                         <li>We realized that printing expenses can eat up as much as 3% of a company's total revenue.</li>
//                                         <li>It can even be the third highest expense of a company after rent and payroll.</li>
//                                         <li>We then set out on a mission….</li>
//                                     </ul>
//                                 </div>
//                                 <div className="aboutSahara">
//                                     <h2>Where we are now ?</h2>
//                                     <p>Almost a decade later we have helped more than 300 companies save tons of money, at the same time letting them access latest technology from the likes of their favorite brands and still continues to do so.</p>
//                                 </div>
//                                 <div className="aboutSahara">
//                                     <h2>Benefits</h2>
//                                     <ul>
//                                         <li>Except the paper costs. The costs such as device costs, support, service and consumables are borne by us.</li>
//                                         <li>Easy payment options (Pay per print model)</li>
//                                         <li>Weekly or daily lease agreement for events.</li>
//                                         <li>Dedicated account manager to attend to all your queries.</li>
//                                         <li>Solutions at your finger tip with our 24/7 e-mail and phone support.</li>
//                                         <li>We work with world className processes and SLA and customer service norms.</li>
//                                         <li>We adhere to our promises and keep up to trust of the costumer.</li>
//                                         <li>We know how valuable your time is and hence, On time delivery and service is our priority.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         <section className="SP-msnVsn">
//             <div className="container">
//                 <div className="mvSection">
//                     <div className="row">
//                         <div className="col-lg-4 col-md-12">
//                             <div className="mvRow" data-aos="fade-in" data-aos-duration="1000">
//                                 <h2>Mission</h2>
//                                 <p>To empower businesses in the UAE with seamless, cost-effective, and hassle-free printing solutions. We take full responsibility for document printing needs, ensuring uninterrupted operations with cutting-edge technology, proactive maintenance, and exceptional customer service.</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-12">
//                             <div className="mvRow" data-aos="zoom-in" data-aos-duration="1000">
//                                 <div><img src="/assets/About/MV-sahara.png" alt=""/></div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-12">
//                             <div className="mvRow" data-aos="fade-in" data-aos-duration="1000">
//                                 <h2>Vision</h2>
//                                 <p>To be the most trusted and preferred Managed Print Service provider in the UAE, setting the benchmark for efficiency, reliability, and innovation. We aim to help businesses reduce costs, enhance productivity, and access the latest printing technology without the burden of ownership.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>



//         <section className="Sp-support">
//             <div className="container">
//                 <div className="spprtList">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img1.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Customer-Centric Approach</h3>
//                                     <p>We prioritize our customers’ needs, ensuring prompt service and reliable solutions.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img2.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Integrity & Trust</h3>
//                                     <p>We build lasting relationships based on transparency, honesty, and commitment to our promises.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img3.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Reliability & Excellence</h3>
//                                     <p>We uphold the highest standards of service, ensuring on-time support, repairs, and upgrades.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img4.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Innovation & Technology</h3>
//                                     <p>We bring the latest advancements in printing technology to businesses, enabling them to stay ahead.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img5.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Cost Efficiency</h3>
//                                     <p>We help businesses optimize their printing expenses, ensuring maximum value at minimal costs.</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="listdetails">
//                                 <div className="col-lg-4 col-md-6 iconImg" data-aos="fade-in" data-aos-duration="1000"><img src="/assets/About/img6.png" alt=""/></div>
//                                 <div className="LstTxt" data-aos="fade-in" data-aos-duration="1000">
//                                     <h3>Sustainability & Responsibility</h3>
//                                     <p>We promote responsible printing practices, reducing waste and contributing to a greener future.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>


     
//         <RequestSection/>
//     <CompanySlider/>
    

//     </main>
//    </>
//   )
// }

// export default AboutBanner