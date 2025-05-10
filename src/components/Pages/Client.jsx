import React from 'react';

import ClientBanner from '../ReusableComponents/ClientReuse/ClientBanner/ClientBanner';
import ClientCompanies from '../ReusableComponents/ClientReuse/ClientCompanies/ClientCompanies';
import RequestSection from '../ReusableComponents/CommonReuseComponents/RequestSection/RequestSection';
import Header from '../ReusableComponents/Home-Header/Header';
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';

import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed

function Client() {
  const width = useWindowWidth();

  return (
    <>
      {width >= 1000 ? <Header /> : <MobileHeader />}
      <ClientBanner />
      <ClientCompanies />
      <RequestSection />
    </>
  );
}

export default Client;
