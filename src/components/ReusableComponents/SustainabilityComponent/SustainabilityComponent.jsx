import React from 'react'
import Header from '../../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../../ReusableComponents/Home-Header/Mobile-Header';


function SustainabilityComponent() {
    const width = useWindowWidth();
  return (
    <>
    <main className="PrntrMain">
    {width >= 1000 ? <Header /> : <MobileHeader />}

       <div className="Contact">
           <div className="crtQuote">
               <div className="calc" data-aos="fade-in" data-aos-duration="1000">
                   <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
                     <p>Usage <br /> &  <br/> Pricing<br/> Calculator</p></a>
               </div>
           </div>
       </div>

       <section className="MainContainer">
           <div className="container">
               <div className="ABHero">
                   <div className="AbHro-txt" data-aos="fade-up" data-aos-duration="1000">
                       <h1> <span> SMARTER OFFICES, <br /> GREENER FUTURES</span></h1>
                   </div>
                   <div className="AbHroImg sustain">
                    <img  src="/assets/sustain/sustainBnr.png" alt="" />
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
                               SUSTAINABILITY
                               </div>
                               <div className="Ab-head">
                                   <h2>Eco Gear for Every Desk</h2>
                               </div>
                               <div className="AbtImg">
                                   <img src="/assets/sustain/sideBnr1.jpg" alt=""/>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-8 col-md-12">
                           <div className="AbCntnt" data-aos="fade-in" data-aos-duration="1000">
                               <div className="AbTxt">
                                   <p>Sahara Printers is making a significant contribution to sustainability by using 1000+ refurbished copiers that are still operational and productive. With each copier preventing between 110 kg and 220 kg of CO₂e emissions, we have collectively saved up to 220,000 kg of CO₂e till date and counting . This initiative highlights our commitment to reducing our environmental impact and promoting sustainability in our operations”
                                  </p>
                                  <p>Sahara Office Equip. TR LLC prioritizes sustainability by implementing smart, environmentally friendly business practices. Here’s how Sahara contributes to a greener planet:</p>
                               </div>
                               <div className="aboutSahara">
                                   <h2>Refurbished Printers Instead of New One</h2>
                                   <ul>
                                       <li>Extends the life of high-quality copiers, reducing electronic waste (e-waste)</li>
                                       <li>Lowers carbon emissions associated with manufacturing new printers.</li>
                                       <li>Promotes circular economy principles by refurbishing and reusing devices instead of discarding them.</li>
                                       <li>We integrate sustainability into its business model by refurbishing equipment, optimizing resources, and promoting eco-friendly printing practices. 
                                        This approach not only benefits the environment but also allows businesses to operate more sustainably while saving costs.</li>
                                   </ul>
                               </div>
                               <div className="aboutSahara">
                                   <h2>Optimized Toner Usage & Recycling</h2>
                                   <ul>
                                       <li>Uses high-yield toner cartridges, reducing frequent replacements and waste.</li>
                                       <li>Encourages customers to return used toner cartridges for proper recycling and disposal.</li>
                                   </ul>
                               </div>


                               <div className="aboutSahara">
                                   <h2>Energy-Efficient Printing Solutions</h2>
                                   <ul>
                                       <li>Deploys energy-efficient printers that consume less power compared to traditional models.</li>
                                       <li>Uses printers with automatic sleep mode, reducing energy consumption when idle.</li>
                                       <li>Promotes duplex (double-sided) printing to reduce paper waste.</li>
                                   </ul>
                               </div>


                               <div className="aboutSahara">
                                   <h2>Reducing E-Waste & Promoting Responsible Disposal</h2>
                                   <ul>
                                       <li>Properly disposes of outdated or non-functional printer components through certified recycling partners.</li>
                                       <li>Reduces landfill waste by repairing and reusing printer parts whenever possible.</li>
                                   </ul>
                               </div>
                              


                               <div className="aboutSahara">
                                   <h2>Encouraging Paperless Workflows</h2>
                                   <ul>
                                       <li>Provides document management solutions that help businesses transition to digital workflows.</li>
                                       <li>Supports scan-to-email and cloud printing options to reduce paper usage.</li>
                                   </ul>
                               </div>

                               <div className="aboutSahara">
                                   <h2>Bulk Purchasing & Logistics Efficiency</h2>
                                   <ul>
                                       <li>Reduces transportation emissions by sourcing consumables and spare parts in bulk.</li>
                                       <li>Streamlined logistics minimize the environmental impact of multiple small shipments.</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

   
   </main>
  </>
  )
}

export default SustainabilityComponent
