// import React, { useState, useEffect } from 'react';


// function Header() {
//   const [isProductsOpen, setProductsOpen] = useState(false);
//   const [isServicesOpen, setServicesOpen] = useState(false);

//   useEffect(() => {
//     const toggleButton = document.querySelector('.toggle');
//     const mainMenu = document.querySelector('.mainMenu');

//     const handleToggleClick = () => {
//       toggleButton.classList.toggle('open');
//       mainMenu.classList.toggle('show');
//     };

//     toggleButton.addEventListener('click', handleToggleClick);

//     const handleScroll = () => {
//       const header = document.querySelector('.hdrContain');
//       header.classList.toggle('scrolled', window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       toggleButton.removeEventListener('click', handleToggleClick);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleDropdownClick = (menuType) => {
//     if (window.innerWidth <= 768) {
//       if (menuType === 'products') {
//         setProductsOpen(!isProductsOpen);
//         setServicesOpen(false);
//       } else if (menuType === 'services') {
//         setServicesOpen(!isServicesOpen);
//         setProductsOpen(false);
//       }
//     }
//   };

//   return (
//     <header className="hdrContain">
//       <span className="topbar"></span>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <div className="logo">
//               <a href="/">
//                 <img src="/assets/Home/logo.png" alt="Logo" />
//               </a>
//             </div>
//           </div>
//           <div className="col-md-6 Menu">
//             <div className="mainMenu">
//               <ul>
//                 <li><a href="/">home</a></li>
//                 <li><a href="/aboutus">about</a></li>

//                 <li className={`drpDwn1 ${isProductsOpen ? 'open' : ''}`}>
//                   <a onClick={() => handleDropdownClick('products')}>
//                     products
//                     <span className="dropdown-arrow">
//                       <i className="fa-solid fa-angle-down"></i>
//                     </span>
//                   </a>
//                   <ul className="subMenu1">
//                     <li><a href="/consumables">Copier Printer Consumables</a></li>
//                     <li><a href="/products">Multi Function Devices</a></li>
//                   </ul>
//                 </li>

//                 <li className={`drpDwn ${isServicesOpen ? 'open' : ''}`}>
//                   <a onClick={() => handleDropdownClick('services')}>
//                     services
//                     <span className="dropdown-arrow">
//                       <i className="fa-solid fa-angle-down"></i>
//                     </span>
//                   </a>
//                   <ul className="subMenu">
//                     <li><a href="/service">Copier Printer Lease</a></li>
//                     <li><a href="/servicemaintance">Copier Printer Maintenance</a></li>
//                   </ul>
//                 </li>

//                 <li><a href="/client">clients</a></li>
//                 <li><a href="/contactus">contact</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <div className="contact">
//               <div className="cnt-optn">
//                 <p><a href="mailto:info@saharaprinter.com" id="email">info@saharaprinter.com</a></p>
//                 <p><a href="tel:+971503823969" id="num">+971503823969</a></p>
//               </div>
//               <div className="call-icon">
//                 <a href="#">
//                   <img src="/assets/Home/call.png" alt="Call Icon" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="toggleBtn">
//             <div className="toggle">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;






import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';

// import axios from 'axios';

function Header() {
//   const [productId, setProductId] = useState('');
//   const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Fetch products from API
    // axios
    //   .get('https://sahara-backend-tubt.onrender.com/api/getallproducts')
    //   .then((response) => {
    //     const products = response.data.products || [];
    //     if (products.length > 0) {
    //       const simplifiedProducts = products.map((product) => ({
    //         id: product._id,
    //         name: product.title,
    //       }));
    //       setProductList(simplifiedProducts);
    //       setProductId(simplifiedProducts[0].id); // set first product ID for top-level "products" link
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching products:', error);
    //   });

    // Toggle menu functionality
    const toggleButton = document.querySelector('.toggle');
    const mainMenu = document.querySelector('.mainMenu');
  
    const handleToggleClick = () => {
      toggleButton.classList.toggle('open');
      mainMenu.classList.toggle('show');
    };
  
    toggleButton.addEventListener('click', handleToggleClick);
  
    // Handle dropdown open/close
    const dropdowns = document.querySelectorAll('.drpDwn1, .drpDwn');
  
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('open');
      });
    });
  
    // Scroll effect for header
    const handleScroll = () => {
      const header = document.querySelector('.hdrContain');
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      toggleButton.removeEventListener('click', handleToggleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="hdrContain">
        <span className="topbar"></span>
        <div className="container">
          <div className="row ">
            <div className="col-md-3">
              <div className="logo">
                <a href="/">
                  <img src="/logo.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6 Menu">
              <div className="mainMenu">
                <ul>
                  <li><a href="/">home</a></li>
                  <li><a href="/aboutus">about</a></li>

                  <li className="drpDwn1">
                    <a>
                      products
                      <span className="dropdown-arrow">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="subMenu1">
                        <li>
                            <a href={`/consumables`}>
                                Copier Printer Consumables
                            </a>
                        </li>
                        <li>
                            <a href={`/products`}>
                                Multi Function Devices
                            </a>
                        </li>
                     
                    </ul>
                  </li>
                  {/* <li className="drpDwn1">
                    <a href={`/products/${productId}`}>
                      products
                      <span className="dropdown-arrow">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="subMenu1">
                      {productList.map((product) => (
                        <li key={product.id}>
                          <a href={`/products/${product.id}`}>{product.name}</a>
                        </li>
                      ))}
                    </ul>
                  </li> */}

                  <li className="drpDwn">
                    <a>
                      services
                      <span className="dropdown-arrow">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                    </a>
                    <ul className="subMenu">
                    <li>
                            <a href={`/service`}>
                                Copier Printer Lease
                            </a>
                        </li>
                        <li>
                            <a href={`/servicemaintance`}>
                                Copier Printer Maintanence
                            </a>
                        </li>
                    </ul>
                  </li>

                  <li><a href="/client">clients</a></li>
                  <li><a href="/contactus">contact</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="contact">
                <div className="cnt-optn">
                  <p><a href="mailto:info@saharaedoc.com" id="email">info@saharaedoc.com</a></p>
                  <p><a href="tel:+971503823969" id="num">+971503823969</a></p>
                </div>
                <div className="call-icon">
                  <a href="tel:+971503823969">
                    <img src="/assets/Home/call.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="toggleBtn">
              <div className="toggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
