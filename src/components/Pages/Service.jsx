import React from 'react'
import MainHeader from '../ReusableComponents/HomeReuse/MainHeader/MainHeader'
import ServiceComponent from '../ReusableComponents/ServiceComponents/ServiceComponent'
import ProducstsSlider from '../ReusableComponents/CommonReuseComponents/ProducstsSlider/ProducstsSlider'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';

import Header from '../ReusableComponents/Home-Header/Header'
function Service() {
  const width = useWindowWidth();

  return (
   <>
   {/* <MainHeader/> */}
   {width >= 1000 ? <Header /> : <MobileHeader />}

   <ServiceComponent/>
   <ProducstsSlider/>
<RequestSection/>
<CompanySlider/>
   </>
  )
}

export default Service