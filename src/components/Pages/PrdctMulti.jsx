import React from 'react'
import MainHeader from '../ReusableComponents/HomeReuse/MainHeader/MainHeader'
import PrdctMultiBanner from '../ReusableComponents/PrdctMultiReuse/PrdctMultiBanner/PrdctMultiBanner'
import ProducstsSlider from '../ReusableComponents/CommonReuseComponents/ProducstsSlider/ProducstsSlider'
import Header from '../ReusableComponents/Home-Header/Header'
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed

function PrdctMulti() {
  const width = useWindowWidth();

  return (
    <>
    {/* <MainHeader/> */}
    {width >= 1000 ? <Header /> : <MobileHeader />}

    <PrdctMultiBanner/>
   
    <ProducstsSlider/>
    <RequestSection/>
    <CompanySlider/>

    </>
  )
}

export default PrdctMulti