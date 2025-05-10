import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

function RequestSection() {
    // const navigate = useNavigate();
    // const handleNavigateToQuote = () => {
    //     navigate('/ProductEnquiry');
    //     setTimeout(() => {
    //       const element = document.getElementById('quote');
    //       if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //       } else {
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //       }
    //     }, 100); // wait for page to load
    //   };


  return (
    <>

    
<section className="priceList">
        <div className="container">
            <div className="PrcLst-contain">
                <div className="row">
                    <div className="col-md-3">
                        <div data-aos="fade-in" data-aos-duration="1000"><img src="/assets/Home/seal.png" alt=""/></div>
                    </div>
                    <div className="col-md-6">
                        <div className="PrcCnt" data-aos="fade-in" data-aos-duration="1000">
                            <h2>Get Price Lists,<br/> Estimates and Quotations</h2>
                            <p>Easily access price lists, estimates, and quotations to make informed decisions for your business needs.</p>
                            <div className="getBtn"><a href="requestquote">Request now</a></div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <a  href="ProductEnquiry" data-aos="fade-in" data-aos-duration="1000"><div className="addBnr">
                            <img src="/assets/Home/AddBnr.png" alt=""/>
                        </div>
                        <div className="AddTxt">
                            <div><img src="/assets/Home/calculator.png" alt=""/></div>
                            <div><h3>Create your <br/>
                               <span> own quote </span><br/>now</h3></div>
                        </div></a>
                        
                    </div>
{/* 
                    <div className="col-md-3" onClick={handleNavigateToQuote} style={{ cursor: "pointer" }}>
                    <div className="addBnr" data-aos="fade-in" data-aos-duration="1000">
                        <img src="/assets/Home/AddBnr.png" alt="" />
                    </div>
                    <div className="AddTxt">
                        <div><img src="/assets/Home/calculator.png" alt="" /></div>
                        <div><h3>Create your <br />
                        <span> own quote </span><br />now</h3></div>
                    </div>
                    </div> */}

                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default RequestSection