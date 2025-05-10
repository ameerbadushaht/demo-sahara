import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function CompanySlider() {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        responsive: [
          { breakpoint: 1350, settings: { slidesToShow: 5 } },
          { breakpoint: 999, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 605, settings: { slidesToShow: 2 } },
          { breakpoint: 400, settings: { slidesToShow: 1 } },
        ],
      };

      const companyLogos = [
        { src: "/assets/Home/canon.png", alt: "canon" },
        { src: "/assets/Home/xerox.png", alt: "xerox" },
        { src: "/assets/Home/toshiba.png", alt: "toshiba" },
        { src: "/assets/Home/hp.png", alt: "hp" },
        { src: "/assets/Home/kyocera.png", alt: "kyocera" },
        { src: "/assets/Home/sharp.png", alt: "sharp" },
        { src: "/assets/Home/epson.png", alt: "epson" },
        { src: "/assets/Home/konica.png", alt: "konica" },
        { src: "/assets/Home/sharp.png", alt: "sharp" },
      ];    
  return (
    <>

<section className="Prntr-cmpny">
        <div className="container">
        <Slider {...settings} className="CmpnySlder" data-aos="fade-in" data-aos-duration="1000">
          {companyLogos.map((logo, index) => (
            <div className="Sldrtrack" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </Slider>
        </div>
     </section>
    
    </>
  )
}

export default CompanySlider