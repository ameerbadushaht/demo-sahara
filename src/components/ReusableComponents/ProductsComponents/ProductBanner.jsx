import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MainHeader from '../HomeReuse/MainHeader/MainHeader'
// import Sidebar from '../Sidebar'
import { Link } from "react-router-dom";
import Header from '../../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../../ReusableComponents/Home-Header/Mobile-Header';

function ProductBanner() {
      const width = useWindowWidth();
    
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
      }, []);

      const images = [
        "/assets/Product/PrntrPart.png",
        "/assets/Product/PrntrPart1.png",
        "/assets/Product/PrntrPart2.png",
        "/assets/Product/PrntrPart4.png"
    ];
  

    const mainSliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: nav2
    };

    const thumbSliderSettings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        infinite: false,
        asNavFor: nav1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 500, settings: { slidesToShow: 3 } },
            // { breakpoint: 350, settings: { slidesToShow: 2 } },
          
        ],
    };

    return (
        <>
            <main className="PrntrMain">
                {/* <MainHeader /> */}
                {width >= 1000 ? <Header /> : <MobileHeader />}

                {/* <Sidebar /> */}
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
                            <div className="AbHro-txt PrdctTxt" data-aos="fade-up" data-aos-duration="1000">
                                <h1>Copier printer <br /><span>consumables</span></h1>
                            </div>
                            <div className="AbHroImg">
                                <img src="/assets/Product/PrdctBnr.png" alt="" />
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
                                            products
                                        </div>
                                        <h2 data-aos="fade-in" data-aos-duration="1000">High Performance, Crisp Results</h2>
                                        <div className="ProductsSldr">

                                        <Slider
                                                {...mainSliderSettings}
                                                ref={slider1}
                                                className="PartSlider"
                                            >
                                                {images.map((img, index) => (
                                                    <div key={index} className="partImgSlider">
                                                        <img src={img} alt={`Product ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </Slider>


                                         <Slider
                                                {...thumbSliderSettings}
                                                ref={slider2}
                                                className="thumbSlider"
                                            >
                                                {images.map((img, index) => (
                                                    <div key={index} className="thumbImg">
                                                        <div>
                                                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="ClntSec consumDesc PrdctDetal ClntTopMarg" data-aos="fade-in" data-aos-duration="1000">
                                        <h3>Extensive Stock of Copier & Printer Parts – Find What You Need!</h3>
                                        <p>Look no further! We provide high-quality copier and printer spare parts to ensure your devices keep running smoothly. Whether you need toner cartridges, fuser units, drum kits, rollers, or any other essential component, we’ve got you covered. Our extensive inventory includes parts for a wide range of copier and printer brands, ensuring you find exactly what you need without unnecessary delays.</p>
                                        <p>Our team of experienced technicians is always ready to assist you. With in-depth expertise, they will help identify the right part and ensure your copier or printer functions efficiently. Whether you're dealing with wear and tear or unexpected breakdowns, we provide reliable solutions tailored to your specific needs.</p>
                                        <p>For all your copier and printer consumables and spare parts inquiries, reach out to us today! Let’s discuss the best customized solution for your device and get it back to peak performance in no time.</p>
                                        <div className="enquiry">
                                            <Link to={"/ProductEnquiry"}>Quick Enquiry</Link>
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

export default ProductBanner