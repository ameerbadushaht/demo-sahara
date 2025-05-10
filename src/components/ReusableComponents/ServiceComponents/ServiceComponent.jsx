import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

function ServiceComponent() {
  return (
   <>   <main className="PrntrMain">
  {/* <Sidebar/> */}
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
               <div className="AbHro-txt ServtTxt"  data-aos="fade-up" data-aos-duration="1000">
                   <h1>Copier Printer Rental and Lease</h1>
               </div>
               <div className="AbHroImg ServHroImg " style={{marginRight: '-35px'}}>
                   <img src="/assets/Services/servBnr.png" alt=""/>
               </div>
           </div>
       </div>   
   </section>
   <section className="customers">
       <div className="container">
           <div className="OurClnts">
               <div className="row">
                   <div className="col-md-6">
                       <div className="ClntSec servSec">
                           <div className="cmpny ClntDiv" data-aos="fade-in" data-aos-duration="1000">
                               services
                           </div>
                           <h2 data-aos="fade-in" data-aos-duration="1000">Streamline, Save, Succeed - Copier Rentals Made Simple!</h2>
                           <div className="PrntrBrefDesc">
                               <div className="BrefDesc">
                                   <div className="IcnImg" data-aos="fade-in" data-aos-duration="1000">
                                       <div><img src="/assets/Services/iconImg1.png" alt=""/></div>
                                       <p>Pay per 
                                           a print model</p>
                                   </div>
                                   <div className="IcnImg" data-aos="fade-in" data-aos-duration="1000">
                                       <div><img src="/assets/Services/iconImg2.png" alt=""/></div>
                                       <p>Fastest
                                           Support</p>
                                   </div>
                                   <div className="IcnImg" data-aos="fade-in" data-aos-duration="1000">
                                       <div><img src="/assets/Services/iconImg3.png" alt=""/></div>
                                       <p>Flexible
                                           Agreement</p>
                                   </div>
                               </div>
                               <div className="BrefDesc PRINTER">
                                   <div><img src="/assets/Home/SliderImg1.png" alt=""/></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="ClntSec PrdctDetal ClntTopMarg" data-aos="fade-in" data-aos-duration="1000">
                           <h3 >Smart Printing, Smarter Savings – Rent or Lease with Sahara!</h3>
                           <p className='ClntSecDesc'>When it comes to copier rental and lease solutions, Sahara stands out as the go-to expert in the UAE. With years of experience in print environment optimization and management, we have successfully assisted businesses of all sizes—from startups to large enterprises—in streamlining their printing operations and reducing costs by up to 30%.</p>
                           <p className='ClntSecDesc'>Our tailored solutions help companies eliminate inefficiencies, lower maintenance expenses, and enhance productivity, ensuring they get the most out of their printing infrastructure. Whether you need a short-term rental or a long-term leasing solution, Sahara provides high-quality copiers, reliable support, and expert guidance to keep your business running smoothly.</p>
                           <p className='ClntSecDesc'>Trust Sahara to optimize your printing needs and save more on operational costs!</p>

                                   <div className="AbtRow servRow" >
                                       <div  className="AbDesc ">
                                           <div className="PrntrDesc ServIcon" data-aos="fade-in" data-aos-duration="1000">
                                           <div ><img src="/assets/Home/arrows.png" alt=""/></div>
                                           <div ><p >Flexible <br/>
                                               Plans</p></div>
                                           </div>
                                       </div>
                                       <div  className="AbDesc">
                                           <div className="PrntrDesc ServIcon" data-aos="fade-in" data-aos-duration="1000">
                                           <div ><img src="/assets/Home/since.png" alt=""/></div>
                                           <div><p >Since <br/>
                                               2012</p></div>
                                           </div>
                                       </div>
                                       <div  className="AbDesc">
                                           <div className="PrntrDesc ServIcon" data-aos="fade-in" data-aos-duration="1000">
                                           <div ><img src="/assets/Home/client.png" alt=""/></div>
                                           <div><p >
                                               1000+ <br/>Clients</p></div>
                                           </div>
                                       </div>
                                       <div  className="AbDesc">
                                           <div className="PrntrDesc ServIcon" data-aos="fade-in" data-aos-duration="1000">
                                           <div ><img src="/assets/Home/sustain1.png" alt=""/></div>
                                           <div><p >
                                               Sustainability</p></div>
                                           </div>
                                       </div>
                                   </div>
                           <div className="enquiry" data-aos="fade-in" data-aos-duration="1000" >
                           <a href="/ProductEnquiry">quick enquiry</a>
                               {/* <Link to={"/ProductEnquiry"}>quick enquiry</Link> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section className="how-we">
       <div className="container">
           <div className="servProvide">
               <div className="servPghed">
                   <h2>This is how we do it</h2>
               </div>
               <div className="row">
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Analyze your 
                           printing Needs</p>
                   </div>
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Provide Multi-function professional copier/printer with zero investment</p>
                   </div>
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Free Consumables such as toners, spare parts etc.</p>
                   </div>
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Free service and maintenance.</p>
                   </div>
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Flexible agreement terms</p>
                   </div>
                   <div className="col-md-2 Serv-colns" data-aos="fade-in" data-aos-duration="1000">
                       <div><img src="/assets/Services/tick.png" alt=""/></div>
                       <p>Pay per print model</p>
                   </div>
               </div>
           </div>
       </div>
   </section>
   </main>
   </>
  )
}

export default ServiceComponent