import React from 'react'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import Header from '../ReusableComponents/Home-Header/Header'
import PrivacyPolicy from '../ReusableComponents/PrivacyPolicy/PrivacyPolicy'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'

function Privacy() {
    const width = useWindowWidth();
  return (
    <>
    {/* <MainHeader/> */}
    {width >= 1000 ? <Header /> : <MobileHeader />}
 
<PrivacyPolicy/>
<RequestSection/>

 <CompanySlider/>
    </>
  )
}

export default Privacy


