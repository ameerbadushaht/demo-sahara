import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProducstsSlider() {
  const [sliderItems, setsliderItems] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile(); // Initial check
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: isMobile,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    speed: 500,
    responsive: [
      { breakpoint: 1350, settings: { slidesToShow: 3 } },
      { breakpoint: 999, settings: { slidesToShow: 2 } },
      { breakpoint: 770, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  const sliderRef = React.useRef(null);

  useEffect(() => {
    axios.get('https://saharaoffice-backend.onrender.com/api/getallproducts',{ headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        let products = response.data.products || [];
  
        // Sort by customOrder (converted to number)
        products.sort((a, b) => parseInt(a.customOrder) - parseInt(b.customOrder));
  
        setsliderItems(products);
  
        if (products.length > 0) {
          const simplifiedProducts = products.map(product => ({
            id: product._id,
            name: product.title,
          }));
  
          localStorage.setItem('ProductInfo', JSON.stringify(simplifiedProducts));
          localStorage.setItem('ProductId', products[0]._id);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  

  return (
    <>
      <section className="Prdcts-contain">
        <div className="container">
          <div className="Fetr-prd">
            <div className="PrdctHead">
              <h2 data-aos="fade-in" data-aos-duration="1000">Featured Products</h2>
              <p data-aos="fade-in" data-aos-duration="1000">
                Our cutting-edge machines are designed to deliver exceptional print quality and speed with advanced features and reliable performance.
              </p>
            </div>

            <div className="SldrContainer">
              <div className="Prev" onClick={() => sliderRef.current.slickPrev()}>
                <img src="/assets/Home/previous.png" alt="Previous" />
              </div>

              <Slider ref={sliderRef} {...sliderSettings} className="PrntrSldr">
                {sliderItems.map((item, index) => (
                  <div className="slider-Wrapper" key={index}>
                  <Link
                    to={`/products/${item._id}`}
                    onClick={(e) => {
                        e.preventDefault(); // prevent default navigation
                        localStorage.setItem('ProductId', item._id);
                        window.location.href = `/products/${item._id}`; // navigate and refresh
                    }}
                    >
                      <div className="PrImg" data-aos="fade-in" data-aos-duration="1000">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="PrTxt" data-aos="fade-in" data-aos-duration="1000">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>

              <div className="Next" onClick={() => sliderRef.current.slickNext()}>
                <img src="/assets/Home/next.png" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProducstsSlider;
