import React from 'react';
import './HomeBanner.css';
import { Link } from 'react-router-dom';

function HomeBanner() {
  // Just using the first image from the original sliderData
  const bannerImage = {
    img: "/assets/Home/heroPrntr.png",
    title: "Canon 5540",
    desc: "Made to provide your digital workplace with cutting-edge printing capabilities",
  };

  return (
    <>
      <main className="PrntrMain">
        <div className="Contact">
          <div className="crtQuote">
            <div className="calc" data-aos="fade-in" data-aos-duration="1000">
              <a href='/ProductEnquiry'>
                <img src="/assets/Home/calculator.png" alt="" />
                <p>create <br /> your<br /> own <br />quote</p>
              </a>
            </div>
          </div>
        </div>

        <section className="hero-Container">
          <div className="container">
            <div className="heroSection firstHead">
            <h1>UAE'S #1  PRINTER RENTAL FIRM</h1>
              <div className="heroRow ">
                <div className="heroTxt" data-aos="fade-right" data-aos-duration="1000">
                <div className="ServList">
                        {/* <h2 data-aos="fade-in" data-aos-duration="1000">WHAT YOU GET</h2> */}
                        <h2 data-aos="fade-in" data-aos-duration="1000">What you get</h2>
                    
                        <div className="PrnServ1">
                            <p>
                            Seamless printing solutions that let you focus on your core operations, with no IT headaches,
                            flexible no-exit-free agreements, premium service at competitive prices and
                            rental plans tailored to your needs.
                            </p>
                            <div className="primaryBtn2"><a href="/service">Explore</a></div>
                        </div>

                    </div>

                  {/* <p>Hassle-free printer rental solutions with maintenance, repairs, and toner management included – ensuring seamless printing for your business.</p> */}
                  {/* <div className="ServList">
                        <h2 data-aos="fade-in" data-aos-duration="1000">What you get</h2>
                        <div className="PrnServ">
                            <div className="PrntList" data-aos="fade-in" data-aos-duration="1000">
                                
                                <div className="BulletPoint">•</div>
                                <div className="SrvCnt"><p>Your business can focus on your core operations</p></div>
                            </div>
                            <div className="PrntList" data-aos="fade-in" data-aos-duration="1000">
                            
                                <div className="BulletPoint">•</div>

                                <div className="SrvCnt"><p>No IT resources wasted on printer issues</p></div>
                            </div>
                            <div className="PrntList" data-aos="fade-in" data-aos-duration="1000">
                         
                                <div className="BulletPoint">•</div>

                                <div className="SrvCnt"><p>Flexible & Stress-Free Agreements with no exit fees</p></div>
                            </div>
                            <div  className="PrntList" data-aos="fade-in" data-aos-duration="1000">
                       
                                <div className="BulletPoint">•</div>

                                <div className="SrvCnt"><p>Premium service at the best market pricing</p></div>
                            </div>
                            <div  className="PrntList" data-aos="fade-in" data-aos-duration="1000">
                               
                                <div className="BulletPoint">•</div>

                                <div className="SrvCnt"><p className="brdrnone">Flexible rental plans tailored to your needs</p></div>
                            </div>
                        </div>
                    </div> */}
          
                </div>

                <div className="heroSldr">
                  <div className="PrntSlider">
                  {/* <h1>UAE's #1 PRINTER RENTAL FIRM</h1> */}
                    <div className="imageWrapper">
                      <img src={bannerImage.img} alt={bannerImage.title} />
                    </div>
                    <div className="desc">
                     
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="manImg" data-aos="fade-in" data-aos-duration="1000">
                <div><img src="/assets/Home/man.png" alt="" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="ecoPrint">
          <div className="container">
          <a href="/Sustainability" className="text-decoration-none text-dark">
            <div className="echoPrntSec">
                <div className="row">
                <div className="col-md-5 eco">
                    <div><img src="/assets/Home/leaf.png" alt="" /></div>
                    <div><h3>Join the Eco-Print Revolution</h3></div>
                </div>
                <div className="col-md-7 ecoCnt">
                    <p>
                    Rent with us to reduce e-waste, save energy, and support a circular economy—your choice helps protect the planet, one print at a time.
                    </p>
                </div>
                </div>
            </div>
            </a>

          </div>
        </section>
      </main>
    </>
  );
}

export default HomeBanner;
