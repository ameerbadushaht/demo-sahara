import React from "react";
import CompanySlider from "../ReusableComponents/CommonReuseComponents/CompanySlider/CompanySlider";
// import useWindowWidth from "../hooks/useWindowWidth"; // Adjust the path as needed
// import MobileHeader from "../ReusableComponents/Home-Header/Mobile-Header";
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection';
// import Header from "../ReusableComponents/Home-Header/Header";
import SustainabilityComponent from "../ReusableComponents/SustainabilityComponent/SustainabilityComponent";
function Sustainability() {
//   const width = useWindowWidth();
  return (
    <>
      {/* <MainHeader/> */}
      {/* {width >= 1000 ? <Header /> : <MobileHeader />} */}
    <SustainabilityComponent />
      <RequestSection />
      <CompanySlider />
    </>
  );
}

export default Sustainability;
