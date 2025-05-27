import React  from 'react'

import CommonForm from '../ReusableComponents/CommonReuseComponents/CommonForm/CommonForm'
import RequestquoteBanner from '../ReusableComponents/RequestquoteReuse/RequestquoteBanner/RequestquoteBanner'
import MainHeader from '../ReusableComponents/HomeReuse/MainHeader/MainHeader'
import Header from '../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed
import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';
import axios from "axios";
import { useLoader } from '../hooks/LoaderContext'; 


function RequestQuote() {
    //   const [loading, setLoading] = useState(true);
    
      const { setLoading } = useLoader(); 
    const width = useWindowWidth();
    const handleFormSubmit = async (data,reset) => {
        setLoading(true)
        try {
          const response = await axios.post("https://saharaoffice-backend.onrender.com/api/email/send-email", data);
      
          if (response.status === 200) {
           

            alert("Email sent successfully!");
            reset();
          } else {
          

            alert("Failed to send email.");
          }
        } catch (error) {
          console.error("Email send error:", error);
          alert("An error occurred while sending the email.");
        }finally {
            setLoading(false);
          }
      };
      

  return (
    <>
    {/* <MainHeader/> */}
    {width >= 1000 ? <Header /> : <MobileHeader />}
    
   <RequestquoteBanner/>
   <div className="container">
   <CommonForm buttonText='Send' onSubmitSuccess={handleFormSubmit}/>
    
   </div>
    </>
  )
}

export default RequestQuote