import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/ReusableComponents/Footer/Footer';
import './css/mscol.css';
import './css/main.css';
import './css/responsive.css';
import Home from './components/Pages/Home';
import AboutBanner from './components/ReusableComponents/AboutReuse/AboutBanner';
import Product from './components/Pages/Product';
import Service from './components/Pages/Service';
import Contact from './components/Pages/Contact';
import ProductEnquiry from './components/Pages/ProductEnquiry';
import Client from './components/Pages/Client';
import ServiceMaintance from './components/Pages/ServiceMaintance';
import RequestQuote from './components/Pages/RequestQuote';
import PrdctMulti from './components/Pages/PrdctMulti';
import LoginPage from './components/ReusableComponents/Login/LoginPage';
import AdminDashboard from './components/ReusableComponents/AdminDashboard/AdminDashboard'; // Your dashboard page
import ProtectedRoute from './components/ReusableComponents/ProtectedRoute';
import Loader from './components/ReusableComponents/Loader';
import Sustainability from './components/Pages/Sustainability';
import Privacy from './components/Pages/Privacy'
// import Header from './components/ReusableComponents/Home-Header/Header';
import { LoaderProvider } from './components/hooks/LoaderContext'; // 👈 import context

import { useLoader } from './components/hooks/LoaderContext'; 
import Terms from './components/Pages/Terms';

// ✅ A wrapper to use location
const AppWrapper = () => {
    const { loading } = useLoader();
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/dashboard');
//   const hideHeader = location.pathname.startsWith('/dashboard');
// const [loading, setLoading] = useState(true);



  useEffect(() => {
    AOS.init({ duration: 2000 });

    // const timer = setTimeout(() => {
    //     setLoading(false);
    //   }, 1500); // 1.5 seconds
  
    //   return () => clearTimeout(timer);
  }, 
  []);

  return (
    <>
     {loading ? (
  <Loader />
) : (
  <>
    {/* <Header />  */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="home2" element={<Home />} /> */}
      <Route path="aboutus" element={<AboutBanner />} />
      <Route path="products/:id" element={<PrdctMulti />} />
      <Route path="products" element={<PrdctMulti />} />
      <Route path="consumables" element={<Product />} />
      <Route path="service" element={<Service />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="ProductEnquiry" element={<ProductEnquiry />} />
      <Route path="client" element={<Client />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="servicemaintance" element={<ServiceMaintance />} />
      <Route path="requestquote" element={<RequestQuote />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="Sustainability" element={<Sustainability />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    {!hideFooter && <Footer />}
  </>
)}

      
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <LoaderProvider>
      <AppWrapper />
    </LoaderProvider>
  </BrowserRouter>
  );
}

export default App;
