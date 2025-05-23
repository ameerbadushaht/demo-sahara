import React from 'react'
import ContactComponents from '../ReusableComponents/ConatctComponents/ContactComponents'
import MainHeader from '../ReusableComponents/HomeReuse/MainHeader/MainHeader'
import ProducstsSlider from '../ReusableComponents/CommonReuseComponents/ProducstsSlider/ProducstsSlider'
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection'
import CompanySlider from '../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider'
import Header from '../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';

function Contact() {
  const width = useWindowWidth();

    return (
        <>
            {/* <MainHeader /> */}
            {width >= 1000 ? <Header /> : <MobileHeader />}
            <ContactComponents />
            <ProducstsSlider />
            <RequestSection />
            <CompanySlider />

        </>
    )
}

export default Contact