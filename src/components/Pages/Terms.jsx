import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import Header from '../ReusableComponents/Home-Header/Header'
import TandC from  '../ReusableComponents/TermsAndCondition/TandC'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'

function Terms() {
    const width = useWindowWidth();
  return (
    <>
    {/* <MainHeader/> */}
    {width >= 1000 ? <Header /> : <MobileHeader />}
 
<TandC/>
<RequestSection/>

 <CompanySlider/>
    </>
  )
}

export default Terms
