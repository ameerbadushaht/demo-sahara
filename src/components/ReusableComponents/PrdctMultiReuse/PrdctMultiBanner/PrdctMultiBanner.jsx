import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from '../../Sidebar';
import Loader from '../../../ReusableComponents/Loader'; 

function PrdctMultiBanner() {
  const [product, setProduct] = useState(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productId = localStorage.getItem('ProductId');
      if (!productId) return;

      try {
        const response = await fetch(`https://sahara-backend-tubt.onrender.com/api/get/${productId}`);
        const data = await response.json();
        if (data.success) {
          setProduct(data.product);
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    if (slider1.current && slider2.current && product) {
      // Delay to ensure both sliders are mounted
      setTimeout(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
      }, 0);
    }
  }, [product]);

  if (!product) return <Loader />;

  const images = [product.img, product.img1, product.img2, product.img3, product.img4].filter(Boolean);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    swipeToSlide: true,
    asNavFor: nav2,
  };

  const thumbSliderSettings = {
    slidesToShow: Math.min(images.length, 4),
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    asNavFor: nav1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <>
      <section className="MainContainer">
        <div className="container">
          <div className="ABHero">
            <div className="AbHro-txt PrdctTxt" data-aos="fade-up" data-aos-duration="1000">
              <h1>{product.title}</h1>
            </div>
            <div className="AbHroImg multiImg">
              <img src={product.img2} alt="" />
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
                  <div className="cmpny ClntDiv">Products</div>
                  <h2>Print, Scan, Copy—All in One, All for You.</h2>
                  <div className="ProductsSldr">
                    <Slider {...mainSliderSettings} ref={slider1}>
                      {images.map((imgSrc, index) => (
                        <div key={`main-${index}`} className="partImgSlider">
                          <img src={imgSrc} alt={`Product Image ${index + 1}`} />
                        </div>
                      ))}
                    </Slider>

                    <Slider {...thumbSliderSettings} ref={slider2}  className="thumbSlider">
                      {images.map((imgSrc, index) => (
                        <div key={`thumb-${index}`} className="thumbImg">
                          <img
                            src={imgSrc}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "80px",
                              objectFit: "contain",
                              display: "block",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ClntSec PrdctDetal ClntTopMarg">
                  <h3>{product.productFullName}</h3>
                  <p>{product.description}</p>

                  <div className="PrList">
                    {product.features?.map((feature, idx) => (
                      <div key={idx}>
                        <div style={{ fontWeight: 'bold' }}>{feature.title}:</div>
                        {/\d+\.\s/.test(feature.detail) ? (
                          <ul style={{ paddingLeft: '1.2rem', textAlign: 'justify' }}>
                            {feature.detail.split(/\n+/).filter(line => line.trim()).map((line, i) => {
                              const match = line.match(/^(\d+\.\s*)([^–-]+)[–-]\s*(.*)/);
                              if (match) {
                                const [, , heading, text] = match;
                                return (
                                  <li key={i}>
                                    <strong>{heading.trim()}</strong> – {text.trim()}
                                  </li>
                                );
                              } else {
                                return <li key={i}>{line}</li>;
                              }
                            })}
                          </ul>
                        ) : (
                          <p style={{ marginLeft: '1rem', textAlign: 'justify' }}>{feature.detail}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="enquiry">
                    <a href="/ProductEnquiry">Quick Enquiry</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrdctMultiBanner;
