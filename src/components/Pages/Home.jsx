import React from 'react'
// import { useLocation } from 'react-router-dom';
import HomeBanner from '../ReusableComponents/HomeReuse/HomeBanner/HomeBanner'
import HomeAbout from '../ReusableComponents/HomeReuse/HomeAboutsection/HomeAbout'
import HomeProductCard from '../ReusableComponents/HomeReuse/HomeProductCard/HomeProductCard'
import Header from '../ReusableComponents/Home-Header/Header'
import ProducstsSlider from '../ReusableComponents/CommonReuseComponents/ProducstsSlider/ProducstsSlider'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';

// import HomeAlt from '../ReusableComponents/HomeReuse/Home2/HomeAlt'


function Home() {
  const width = useWindowWidth();
//   const location = useLocation();

//   const isHome2 = location.pathname.includes('/home2');
  return (
    <>
          {width >= 1000 ? <Header /> : <MobileHeader />}

   
          {/* {isHome2 ? <HomeAlt /> : <HomeBanner />} */}
    <HomeBanner />
    <HomeAbout/>
    <HomeProductCard/>
    <ProducstsSlider/>
    <RequestSection/>
    <CompanySlider/>
    
    
    </>
  )
}

export default Home