
import React, { useEffect, useState } from "react";
import MainHeader from "../ReusableComponents/HomeReuse/MainHeader/MainHeader";
import Sidebar from "../ReusableComponents/Sidebar";
import CommonForm from "../ReusableComponents/CommonReuseComponents/CommonForm/CommonForm";
import axios from "axios";
import Header from '../ReusableComponents/Home-Header/Header'
import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed

import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';


function ProductEnquiry() {
  const [activeTab, setActiveTab] = useState("Qute1");
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [blackPrints, setBlackPrints] = useState(0);
  const [colorPrints, setColorPrints] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);
  const [baseCost, setbaseCost] = useState(0);
  const [blackPrice, setblackPrice] = useState(0);
  const [colorPrice, setcolorPrice] = useState(0);

  const [printers, setPrinters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPrinterData, setCurrentPrinterData] = useState(null);
  const [stepsCompleted, setStepsCompleted] = useState({
    step1: false,
    step2: false,
    step3: false
  });

  const width = useWindowWidth();


  // for form data

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
    message: ''
  });

  

  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const response = await axios.get(
          "https://sahara-backend-tubt.onrender.com/api/getallproducts"
        );
        
        // Access the products array from the response
        const products = response.data.products || [];
        setPrinters(products);
        if (products.length > 0) {
            const first = products[0];
            const itemPrice = Number(first.itemPrice) || 0;
            setbaseCost(itemPrice)
            setMonthlyCost(itemPrice );
          }
        // Set first printer as default selection if available
        if (products.length > 0) {
          setSelectedPrinter(products[0]._id);
          setCurrentPrinterData(products[0]);
          // Set initial values based on first printer
          setBlackPrints(products[0].blackPrint );
          setColorPrints(products[0].colorPrint );
          setblackPrice(products[0].blackPrice);
          setcolorPrice(products[0].colorPrice);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching printers:", err);
        setError(err.message);
        setPrinters([]);
        setLoading(false);
      }
    };

    fetchPrinters();
  }, []);




  const handleBlackPrintsChange = (e) => {
    const value = parseInt(e.target.value);
    setBlackPrints(value);

    const defaultBlackPages = Number(currentPrinterData.blackPrint) || 0; // 1000
    const defaultColorPages = Number(currentPrinterData.colorPrint) || 0; // 500

    const differenceBlackPages = Number(value-defaultBlackPages )// 10
    const differenceColorPages = Number(colorPrints - defaultColorPages) //0

    const totalBlackPrice = differenceBlackPages * blackPrice; // 1000 *1
    const totalColorPrice = differenceColorPages * colorPrice; // 0*2

    const total = (baseCost + totalBlackPrice + totalColorPrice) ;

    if(total < baseCost){  
        const difPrice = baseCost - total;
        const pIcolor =difPrice/colorPrice
        
        const colorPrintsNum = Number(colorPrints);
        const pIcolorNum = Math.ceil(Number(pIcolor));
        
        const newColorPrints = colorPrintsNum + pIcolorNum;
        
        // console.log(`${colorPrintsNum} + ${pIcolorNum} = ${newColorPrints}`);
        
        setColorPrints(newColorPrints);

        setMonthlyCost(baseCost);
        
    }else{
        calculateCost(value, colorPrints, currentPrinterData);
    }

  };

  const handleColorPrintsChange = (e) => {
    const value = parseInt(e.target.value);

    
    setColorPrints(value);

    const defaultBlackPages = Number(currentPrinterData.blackPrint) || 0; // 1000
    const defaultColorPages = Number(currentPrinterData.colorPrint) || 0; // 500

    const differenceBlackPages = Number(blackPrints-defaultBlackPages )// 0
    const differenceColorPages = Number(value - defaultColorPages) //10

    const totalBlackPrice = differenceBlackPages * blackPrice; // 0 *1
    const totalColorPrice = differenceColorPages * colorPrice; // 10*2

    const total = (baseCost + totalBlackPrice + totalColorPrice) ;

    if(total < baseCost){  
        const difPrice = baseCost - total;
        const pIcolor =difPrice/blackPrice
        
        const blackPrintsNum = Number(blackPrints);
        const pIblackNum = Math.ceil(Number(pIcolor));
        
        const newblackPrints = blackPrintsNum + pIblackNum;
        
        // console.log(`${blackPrintsNum} + ${pIblackNum} = ${newblackPrints}`);
    
        setBlackPrints(newblackPrints);

        setMonthlyCost(baseCost);
        
    }else{
        calculateCost(blackPrints, value, currentPrinterData);
    }
  };

  const calculateCost = (black, color, printer) => {

    if (!printer) return;

    // Convert all values to numbers with fallbacks
    const baseCost = Number(printer.itemPrice) ;

    setbaseCost(baseCost)
    
    // const defaultBlackPages = Number(printer.blackPrint) || 0; // default black pages
    // const defaultColorPages = Number(printer.colorPrint) || 0; // default color pages
    // const differenceBlackPages = Number(black-defaultBlackPages )// user input black pages = 10
    // const differenceColorPages = Number(color - defaultColorPages) || 0; // user input color pages
    
    // const blackPrintCost = Number(blackPrice) ;  // unit black
    // const colorPrintCost = Number(colorPrice) ;   // unit color

    // // calculation 

    // const totalBlackPrice = differenceBlackPages * blackPrintCost; // cost per page for black
    // const totalColorPrice = differenceColorPages * colorPrintCost; // cost per page for color

    // const total = (baseCost + totalBlackPrice + totalColorPrice) ;



    const defaultBlackPages = Number(printer.blackPrint) || 0;
    console.log(`defaultBlackPages = Number(${printer.blackPrint}) || 0 = ${defaultBlackPages}`);

    const defaultColorPages = Number(printer.colorPrint) || 0;
    console.log(`defaultColorPages = Number(${printer.colorPrint}) || 0 = ${defaultColorPages}`);

    console.log(`User Input - black = ${black}`);
    console.log(`User Input - color = ${color}`);

    const differenceBlackPages = Number(black - defaultBlackPages);
    console.log(`differenceBlackPages = ${black} - ${defaultBlackPages} = ${differenceBlackPages}`);

    const differenceColorPages = Number(color - defaultColorPages) || 0;
    console.log(`differenceColorPages = ${color} - ${defaultColorPages} = ${differenceColorPages}`);

    const blackPrintCost = Number(blackPrice);
    console.log(`blackPrintCost = Number(${blackPrice}) = ${blackPrintCost}`);

    const colorPrintCost = Number(colorPrice);
    console.log(`colorPrintCost = Number(${colorPrice}) = ${colorPrintCost}`);

    const totalBlackPrice = differenceBlackPages * blackPrintCost;
    console.log(`totalBlackPrice = ${differenceBlackPages} * ${blackPrintCost} = ${totalBlackPrice}`);

    const totalColorPrice = differenceColorPages * colorPrintCost;
    console.log(`totalColorPrice = ${differenceColorPages} * ${colorPrintCost} = ${totalColorPrice}`);

    console.log(`baseCost = ${baseCost}`);

    const total = baseCost + totalBlackPrice + totalColorPrice;
    console.log(`total = ${baseCost} + ${totalBlackPrice} + ${totalColorPrice} = ${total}`);




    if(total < baseCost){  
      setMonthlyCost(baseCost.toFixed(2));
    }
    else{
      setMonthlyCost(total.toFixed(2));
    //   console.log();
      

    }

   
  };

  const handleTabClick = (printerId) => {
    setSelectedPrinter(printerId);
    const printer = printers.find(p => p._id === printerId);
    setCurrentPrinterData(printer);
    // Reset prints to default values when changing printer
    setBlackPrints(printer.blackPrint || 1000);
    setColorPrints(printer.colorPrint || 500);
    setblackPrice(printer.blackPrice);
    setcolorPrice(printer.colorPrice);
    calculateCost(
      printer.blackPrint ,
      printer.colorPrint,
      printer
    );
  };



  const openCity = (cityName) => {
    // Only allow navigation if previous steps are completed
    if (cityName === "Qute2" && !stepsCompleted.step1) return;
    if (cityName === "Qute3" && !stepsCompleted.step2) return;
    setActiveTab(cityName);

};

  const handleFormSubmitSuccess = (data) => {
    setFormData(data);
    setStepsCompleted(prev => ({...prev, step1: true}));
    setActiveTab("Qute2");
  };
  
  const handlePrinterSelectionComplete = () => {
    setStepsCompleted(prev => ({...prev, step2: true}));
    setActiveTab("Qute3");
  };

  return (
    <>
      <main className="PrntrMain">
        {/* <MainHeader /> */}
        {width >= 1000 ? <Header /> : <MobileHeader />}

        <Sidebar />/
        <section className="MainContainer">
          <div className="container">
            <div className="ABHero Quote">
              <div
                className="AbHro-txt "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h1>Request for quote</h1>
              </div>
            </div>
          </div>
        </section>



        <section className="Qte-container"  >
          <div className="container">
            <div className="pre-qute">
              <div className="qute-head">
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  Prepare a Custom Quotation – Fast, Free, and Easy!
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  Looking for the best deal? Create your own free quote tailored
                  to your needs. .
                </p>
              </div>

              <div className="qute-tabs">
                <div
                  className="tab"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <button
                    className={`tablinks ${activeTab === "Qute1" ? "active" : ""}`}
                    onClick={() => openCity("Qute1")}
                  >
                    1
                  </button>
                  <button
                     className={`tablinks ${activeTab === "Qute2" ? "active" : ""} ${!stepsCompleted.step1 ? 'disabled' : ''}`}
                     onClick={() => openCity("Qute2")}
                     disabled={!stepsCompleted.step1}
                  >
                    2
                  </button>
                  <button
                     className={`tablinks ${activeTab === "Qute3" ? "active" : ""} ${!stepsCompleted.step2 ? 'disabled' : ''}`}
                     onClick={() => openCity("Qute3")}
                     disabled={!stepsCompleted.step2}
                  >
                    3
                  </button>
                </div>

                {activeTab === "Qute1" && (
                  <div
                    id="Qute1"
                    className="tabcontent"
                    style={{ display: "block" }}
                  >
                    <CommonForm   onSubmitSuccess={handleFormSubmitSuccess}  />
                  </div>
                )}


                {activeTab === "Qute2" && (
                  <div
                    id="Qute2"
                    className="tabcontent"
                   
                  >
                    <div className="Qut-cnt">
                      <p>
                        Instead of purchasing a printer, you can rent your
                        desired printer from us. You pay a fixed monthly fee and
                        get not only the printer, but also ink or toner and
                        services. All inclusive. After the contract period, the
                        printer belongs to you!
                      </p>
                      <div className="scndTab">
                        {loading ? (
                          <p>Loading printers...</p>
                        ) : error ? (
                          <p>Error loading printers: {error}</p>
                        ) : printers.length === 0 ? (
                          <p>No printers available</p>
                        ) : (
                          <>
                            <div className="InnerTab DeskTab">
                              {printers.map((printer, index) => (
                                <button
                                  key={printer._id || index} // Use printer._id if available from API
                                  className={`InnrTbLnk ${
                                    selectedPrinter === printer._id
                                      ? "show"
                                      : ""
                                  }`}
                                  onClick={() => handleTabClick(printer._id)}
                                >
                                  <div className="TabImg">
                                    <div className="prnImg">
                                      {/* Use printer.image or similar from your API response */}
                                      <img
                                        src={
                                          printer.img ||
                                          `/assets/Home/SliderImg${
                                            index + 1
                                          }.png`
                                        }
                                        alt={printer.title}
                                      />
                                    </div>
                                    <div>
                                      <h3>
                                        {printer.title ||
                                          `Printer ${index + 1}`}
                                      </h3>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>

                            {/* Dynamic details for selected printer */}
                            {printers.map(
                              (printer) =>
                                selectedPrinter === printer._id && (
                                  <div
                                    key={printer._id}
                                    className="InnrTbCnt"
                                    style={{ display: "block" }}
                                  >
                                    <div className="PrnDesc">
                                      <div className="DescRow" >
                                        <div className="dscrption">
                                          <div
                                            className="DescSec"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                          >
                                            <div className="PrntImage">
                                              <img
                                                src={printer.img}
                                                alt={printer.title}
                                              />
                                            </div>


                                            <div className="PrntrDetails">
                                              <h3>{printer.productFullName}</h3>
                                              <ul>
                                               {printer.features.slice(0, 4).map((feature, index) => (
                                                <li key={index}>
                                                    <span>{feature.title}</span> - {feature.detail}
                                                </li>
                                                ))}

                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="dscrption">
                                          <div
                                            className="DescSec PrDesc"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                          >
                                            <div >
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Brand
                                                </li>
                                                <li>- {printer.brand}</li>
                                              </div> */}
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Connectivity technology
                                                </li>
                                                <li>
                                                  - {printer.connectivity}
                                                </li>
                                              </div> */}
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Printing technology
                                                </li>
                                                <li>
                                                  - {printer.connectivity}
                                                </li>
                                              </div> */}
                                              <div className="DetlList">
                                                <li className="DescList">
                                                  Functions 
                                                </li>
                                                <li>
                                                  - {printer.functions}
                                                </li>
                                              </div>
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Colour
                                                </li>
                                                <li>- {printer.color}</li>
                                              </div> */}
                                              <div className="DetlList">
                                                <li className="DescList">
                                                 Make and Model
                                                </li>
                                                <li>- {printer.makeModel}</li>
                                              </div>
                                              <div className="DetlList">
                                                <li className="DescList">
                                                  Output
                                                </li>
                                                <li>
                                                  - {printer.output}
                                                </li>
                                              </div>
                                              <div className="DetlList">
                                                <li className="DescList">
                                                 Speed
                                                </li>
                                                <li>
                                                  - {printer.speed}{" "} Print Per Minute
                                                 
                                                </li>
                                              </div>
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Max. monochrome printing speed
                                                </li>
                                                <li>
                                                  -{" "}
                                                  {
                                                    printer.maxPrintSpeedMonochrome
                                                  }{" "}ppm
                                                  
                                                </li>
                                              </div> */}
                                              {/* <div className="DetlList">
                                                <li className="DescList">
                                                  Item weight
                                                </li>
                                                <li>
                                                  - {printer.itemWeight}{" "}kg
                                                 
                                                </li>
                                              </div> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                            )}
                          </>
                        )}
                      </div>
                    </div>




                    {currentPrinterData && (

                    <div className="totalCount">
                      <h3>
                        Enter here how many pages you print about every month
                      </h3>
                      <div className="itemCalc">
                        <div className="row ">
                          <div className="col-md-8">
                            <div className="range">
                              <input
                                type="range"
                                value={blackPrints}
                                min="0"
                                max="100000"
                                step={currentPrinterData.slideRange}
                                onChange={handleBlackPrintsChange}
                                id="range1"
                              />
                              <label id="label1">
                                {blackPrints} black prints
                              </label>
                            </div>
                            <div className="range">
                              <input
                                type="range"
                                value={colorPrints}
                                min="0"
                                step={currentPrinterData.slideRange}
                                max="100000"
                                onChange={handleColorPrintsChange}
                              />
                              <label id="label2">
                                {colorPrints} color prints
                              </label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="AmntPrn">
                            <h2>
                                {monthlyCost}
                                <span>DHS</span>
                            </h2>

                            </div>
                          </div>
                        </div>
                        <div className=" nxtBtn">
                        <button onClick={handlePrinterSelectionComplete}>Next</button>
                        </div>
                      </div>
                    </div>

)}


                    
                  </div>
                )}


                {activeTab === "Qute3" && (
                  <div
                    id="Qute3"
                    className="tabcontent"
                    style={{ display: "block" }}
                  >
                    <div className="qutTab">
                      <div
                        className="mainCnt"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        {" "}
                        <p>
                          Instead of purchasing a printer, you can rent your
                          desired printer from us. You pay a fixed monthly fee
                          and get not only the printer, but alsoink or toner and
                          services. all inclusive. After the contract period the
                          printer belongs to you!
                        </p>
                      </div>
                      {currentPrinterData && (
                      <div
                        className="recmnd"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <p>Recommended System</p>
                        <h2>{currentPrinterData.productFullName}</h2>
                        <div className="system">
                          <img src={currentPrinterData.img} alt={currentPrinterData.title} />
                        </div>
                        <p>The print volume you have chosen</p>
                        <div className="prntVolm">
                          <div
                            className="volume"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <p>Black Prints</p>
                            <h3>{blackPrints} Pages</h3>
                          </div>
                          <div
                            className="volume"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <p>Color Prints</p>
                            <h3>{colorPrints} Pages</h3>
                          </div>
                          <div
                            className="volume"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                          >
                            <p>Cost</p>
                            <h3>
                            {monthlyCost} <span>DHS</span>
                            </h3>
                          </div>
                        </div>
                        <div
                          className="sndBtns"
                          data-aos="fade-up"
                          data-aos-duration="1000"
                        >
                          <div className="btnSnd">
                          <a href="#" onClick={(e) => {
                                e.preventDefault();

                                const payload = {
                                    name: formData?.name,
                                    email: formData?.email,
                                    mobile: formData?.mobile,
                                    company: formData?.company,
                                    message: formData?.message,
                                    productFullName: currentPrinterData?.productFullName,
                                    blackPrints,
                                    colorPrints,
                                    monthlyCost,
                                };

                       
                                axios.post('https://sahara-backend-tubt.onrender.com/api/email/send-email', payload)
                                    .then(response => {
                                    const data = response.data;
                                    if (data.success) {
                                        alert("Email sent successfully!");
                                    } else {
                                        alert("Email failed to send.");
                                    }
                                    })
                                    .catch(error => {
                                    console.error("Axios email send error:", error);
                                    alert("Error sending email.");
                                    });
                                }}>
                                <img src="/assets/Quote/SntMail.png" alt="" /> Send to Email
                            </a>
                          </div>
                          <div className="btnSnd wtsapp">
                          <a 
                            href={`https://wa.me/+971503823969?text=${encodeURIComponent(
                            `*Printer Quote Request*\n\n` +
                            `*Customer Details:*\n` +
                            `Name: ${formData.name || 'Not provided'}\n` +
                            `Email: ${formData.email || 'Not provided'}\n` +
                            `Phone: ${formData.mobile || 'Not provided'}\n` +
                            `Company: ${formData.company || 'Not provided'}\n` +
                            `Message: ${formData.message || 'No additional message'}\n\n` +
                            `*Printer Selection:*\n` +
                            `Model: ${currentPrinterData?.productFullName || 'Not selected'}\n\n` +
                            `*Print Volume:*\n` +
                            `Black Prints: ${blackPrints} pages\n` +
                            `Color Prints: ${colorPrints} pages\n\n` +
                            `*Monthly Cost:* ${monthlyCost} DHS`
                            )}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                              <img src="/assets/Quote/whatsapp.png" alt="" />{" "}
                              Send to Whatsapp
                            </a>
                          </div>
                        </div>
                      </div>
                        )}
                    </div>
                  </div>
                )}




                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductEnquiry;






// import React, { useEffect, useState } from "react";
// import MainHeader from "../ReusableComponents/HomeReuse/MainHeader/MainHeader";
// import Sidebar from "../ReusableComponents/Sidebar";
// import CommonForm from "../ReusableComponents/CommonReuseComponents/CommonForm/CommonForm";
// import axios from "axios";
// import Header from '../ReusableComponents/Home-Header/Header'
// import useWindowWidth from '../hooks/useWindowWidth'; // Adjust the path as needed

// import MobileHeader from '../ReusableComponents/Home-Header/Mobile-Header';


// function ProductEnquiry() {
//   const [activeTab, setActiveTab] = useState("Qute1");
//   const [selectedPrinter, setSelectedPrinter] = useState(null);
//   const [blackPrints, setBlackPrints] = useState(0);
//   const [colorPrints, setColorPrints] = useState(0);
//   const [monthlyCost, setMonthlyCost] = useState(0);
//   const [baseCost, setbaseCost] = useState(0);
//   const [blackPrice, setblackPrice] = useState(0);
//   const [colorPrice, setcolorPrice] = useState(0);
//   const [isEditingCost, setIsEditingCost] = useState(false);
//   const [editedCost, setEditedCost] = useState(monthlyCost);
  


//   const [printers, setPrinters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPrinterData, setCurrentPrinterData] = useState(null);
//   const [stepsCompleted, setStepsCompleted] = useState({
//     step1: false,
//     step2: false,
//     step3: false
//   });

//   const width = useWindowWidth();


//   // for form data

//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     mobile: '',
//     email: '',
//     message: ''
//   });

  

//   useEffect(() => {
//     const fetchPrinters = async () => {
//       try {
//         const response = await axios.get(
//           "https://sahara-backend-tubt.onrender.com/api/getallproducts"
//         );
        
//         // Access the products array from the response
//         const products = response.data.products || [];
//         setPrinters(products);
//         if (products.length > 0) {
//             const first = products[0];
//             const itemPrice = Number(first.itemPrice) || 0;
//             setbaseCost(itemPrice)
//             setMonthlyCost(itemPrice );
//           }
//         // Set first printer as default selection if available
//         if (products.length > 0) {
//           setSelectedPrinter(products[0]._id);
//           setCurrentPrinterData(products[0]);
//           // Set initial values based on first printer
//           setBlackPrints(products[0].dbp );
//           setColorPrints(products[0].dcp );
//           setblackPrice(products[0].dbpPrice);
//           setcolorPrice(products[0].dcpPrice);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching printers:", err);
//         setError(err.message);
//         setPrinters([]);
//         setLoading(false);
//       }
//     };

//     fetchPrinters();
//   }, []);




//   const handleBlackPrintsChange = (e) => {
//     const value = parseInt(e.target.value);
//     setBlackPrints(value);

//     const defaultBlackPages = Number(currentPrinterData.dbp) || 0; // 1000
//     const defaultColorPages = Number(currentPrinterData.dcp) || 0; // 500

//     const differenceBlackPages = Number(value-defaultBlackPages )// 10
//     const differenceColorPages = Number(colorPrints - defaultColorPages) //0

//     const totalBlackPrice = differenceBlackPages * blackPrice; // 1000 *1
//     const totalColorPrice = differenceColorPages * colorPrice; // 0*2

//     const total = (baseCost + totalBlackPrice + totalColorPrice) ;

//     if(total < baseCost){  
//         const difPrice = baseCost - total;
//         const pIcolor =difPrice/colorPrice
        
//         const colorPrintsNum = Number(colorPrints);
//         const pIcolorNum = Math.ceil(Number(pIcolor));
        
//         const newColorPrints = colorPrintsNum + pIcolorNum;
        
//         // console.log(`${colorPrintsNum} + ${pIcolorNum} = ${newColorPrints}`);
        
//         setColorPrints(newColorPrints);

//         setMonthlyCost(baseCost);
        
//     }else{
//         calculateCost(value, colorPrints, currentPrinterData);
//     }

//   };

//   const handleColorPrintsChange = (e) => {
//     const value = parseInt(e.target.value);

    
//     setColorPrints(value);

//     const defaultBlackPages = Number(currentPrinterData.dbp) || 0; // 1000
//     const defaultColorPages = Number(currentPrinterData.dcp) || 0; // 500

//     const differenceBlackPages = Number(blackPrints-defaultBlackPages )// 0
//     const differenceColorPages = Number(value - defaultColorPages) //10

//     const totalBlackPrice = differenceBlackPages * blackPrice; // 0 *1
//     const totalColorPrice = differenceColorPages * colorPrice; // 10*2

//     const total = (baseCost + totalBlackPrice + totalColorPrice) ;

//     if(total < baseCost){  
//         const difPrice = baseCost - total;
//         const pIcolor =difPrice/blackPrice
        
//         const blackPrintsNum = Number(blackPrints);
//         const pIblackNum = Math.ceil(Number(pIcolor));
        
//         const newblackPrints = blackPrintsNum + pIblackNum;
        
//         // console.log(`${blackPrintsNum} + ${pIblackNum} = ${newblackPrints}`);
    
//         setBlackPrints(newblackPrints);

//         setMonthlyCost(baseCost);
        
//     }else{
//         calculateCost(blackPrints, value, currentPrinterData);
//     }
//   };

//   const handleCostEditSubmit = () => {
//     const newCost = Number(editedCost);
//     if (!currentPrinterData) return;
  
//     // const base = Number(currentPrinterData.itemPrice);
//     const blackUnit = Number(blackPrice);
//     const colorUnit = Number(colorPrice);
//     // const defaultBlack = Number(currentPrinterData.dbp);
//     // const defaultColor = Number(currentPrinterData.dcp);
  

  

//   let perPage= newCost/2;
//   console.log("perPage",perPage);

//   const perPageBlack = Math.ceil(perPage); // Round up to 200
//   const perPageColor = Math.floor(perPage); // Round down to 199

//   const blackPages = Math.ceil(perPageBlack / blackUnit);
//   console.log("blackPages", blackPages);
  
//   const colorPages = Math.ceil(perPageColor / colorUnit);
//   console.log("colorPages", colorPages);
  
  

  
//     setBlackPrints(blackPages);
//     setColorPrints(colorPages);
//     setMonthlyCost(newCost);
//     setIsEditingCost(false);
//   };
  
  

//   const calculateCost = (black, color, printer) => {

//     if (!printer) return;

//     // Convert all values to numbers with fallbacks
//     const baseCost = Number(printer.itemPrice) ;

//     setbaseCost(baseCost)
    
//     const defaultBlackPages = Number(printer.dbp) || 0; // default black pages
//     const defaultColorPages = Number(printer.dcp) || 0; // default color pages
//     const differenceBlackPages = Number(black-defaultBlackPages )// user input black pages = 10
//     const differenceColorPages = Number(color - defaultColorPages) || 0; // user input color pages
    
//     const blackPrintCost = Number(blackPrice) ;  // unit black
//     const colorPrintCost = Number(colorPrice) ;   // unit color

//     // calculation 

//     const totalBlackPrice = differenceBlackPages * blackPrintCost; // cost per page for black
//     const totalColorPrice = differenceColorPages * colorPrintCost; // cost per page for color

//     const total = (baseCost + totalBlackPrice + totalColorPrice) ;
//     if(total < baseCost){  
//       setMonthlyCost(baseCost.toFixed(2));
//     }
//     else{
//       setMonthlyCost(total.toFixed(2));

//     }

   
//   };

//   const handleTabClick = (printerId) => {
//     setSelectedPrinter(printerId);
//     const printer = printers.find(p => p._id === printerId);
//     setCurrentPrinterData(printer);
//     // Reset prints to default values when changing printer
//     setBlackPrints(printer.dbp || 1000);
//     setColorPrints(printer.dcp || 500);
//     setblackPrice(printer.dbpPrice);
//     setcolorPrice(printer.dcpPrice);
//     calculateCost(
//       printer.dbp ,
//       printer.dcp,
//       printer
//     );
//   };



//   const openCity = (cityName) => {
//     // Only allow navigation if previous steps are completed
//     if (cityName === "Qute2" && !stepsCompleted.step1) return;
//     if (cityName === "Qute3" && !stepsCompleted.step2) return;
//     setActiveTab(cityName);

// };

//   const handleFormSubmitSuccess = (data) => {
//     setFormData(data);
//     setStepsCompleted(prev => ({...prev, step1: true}));
//     setActiveTab("Qute2");
//   };
  
//   const handlePrinterSelectionComplete = () => {
//     setStepsCompleted(prev => ({...prev, step2: true}));
//     setActiveTab("Qute3");
//   };

//   return (
//     <>
//       <main className="PrntrMain">
//         {/* <MainHeader /> */}
//         {width >= 1000 ? <Header /> : <MobileHeader />}

//         <Sidebar />/
//         <section className="MainContainer">
//           <div className="container">
//             <div className="ABHero Quote">
//               <div
//                 className="AbHro-txt "
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//               >
//                 <h1>Request for quote</h1>
//               </div>
//             </div>
//           </div>
//         </section>



//         <section className="Qte-container"  >
//           <div className="container">
//             <div className="pre-qute">
//               <div className="qute-head">
//                 <h2 data-aos="fade-up" data-aos-duration="1000">
//                   Prepare a Custom Quotation – Fast, Free, and Easy!
//                 </h2>
//                 <p data-aos="fade-up" data-aos-duration="1000">
//                   Looking for the best deal? Create your own free quote tailored
//                   to your needs. .
//                 </p>
//               </div>

//               <div className="qute-tabs">
//                 <div
//                   className="tab"
//                   data-aos="fade-up"
//                   data-aos-duration="1000"
//                 >
//                   <button
//                     className={`tablinks ${activeTab === "Qute1" ? "active" : ""}`}
//                     onClick={() => openCity("Qute1")}
//                   >
//                     1
//                   </button>
//                   <button
//                      className={`tablinks ${activeTab === "Qute2" ? "active" : ""} ${!stepsCompleted.step1 ? 'disabled' : ''}`}
//                      onClick={() => openCity("Qute2")}
//                      disabled={!stepsCompleted.step1}
//                   >
//                     2
//                   </button>
//                   <button
//                      className={`tablinks ${activeTab === "Qute3" ? "active" : ""} ${!stepsCompleted.step2 ? 'disabled' : ''}`}
//                      onClick={() => openCity("Qute3")}
//                      disabled={!stepsCompleted.step2}
//                   >
//                     3
//                   </button>
//                 </div>

//                 {activeTab === "Qute1" && (
//                   <div
//                     id="Qute1"
//                     className="tabcontent"
//                     style={{ display: "block" }}
//                   >
//                     <CommonForm   onSubmitSuccess={handleFormSubmitSuccess}  />
//                   </div>
//                 )}







//                 {activeTab === "Qute2" && (
//                   <div
//                     id="Qute2"
//                     className="tabcontent"
                   
//                   >
//                     <div className="Qut-cnt">
//                       <p>
//                         Instead of purchasing a printer, you can rent your
//                         desired printer from us. You pay a fixed monthly fee and
//                         get not only the printer, but also ink or toner and
//                         services. All inclusive. After the contract period, the
//                         printer belongs to you!
//                       </p>
//                       <div className="scndTab">
//                         {loading ? (
//                           <p>Loading printers...</p>
//                         ) : error ? (
//                           <p>Error loading printers: {error}</p>
//                         ) : printers.length === 0 ? (
//                           <p>No printers available</p>
//                         ) : (
//                           <>
//                             <div className="InnerTab DeskTab">
//                               {printers.map((printer, index) => (
//                                 <button
//                                   key={printer._id || index} // Use printer._id if available from API
//                                   className={`InnrTbLnk ${
//                                     selectedPrinter === printer._id
//                                       ? "show"
//                                       : ""
//                                   }`}
//                                   onClick={() => handleTabClick(printer._id)}
//                                 >
//                                   <div className="TabImg">
//                                     <div className="prnImg">
//                                       {/* Use printer.image or similar from your API response */}
//                                       <img
//                                         src={
//                                           printer.img ||
//                                           `/assets/Home/SliderImg${
//                                             index + 1
//                                           }.png`
//                                         }
//                                         alt={printer.title}
//                                       />
//                                     </div>
//                                     <div>
//                                       <h3>
//                                         {printer.title ||
//                                           `Printer ${index + 1}`}
//                                       </h3>
//                                     </div>
//                                   </div>
//                                 </button>
//                               ))}
//                             </div>

//                             {/* Dynamic details for selected printer */}
//                             {printers.map(
//                               (printer) =>
//                                 selectedPrinter === printer._id && (
//                                   <div
//                                     key={printer._id}
//                                     className="InnrTbCnt"
//                                     style={{ display: "block" }}
//                                   >
//                                     <div className="PrnDesc">
//                                       <div className="DescRow">
//                                         <div className="dscrption">
//                                           <div
//                                             className="DescSec"
//                                             data-aos="fade-up"
//                                             data-aos-duration="1000"
//                                           >
//                                             <div className="PrntImage">
//                                               <img
//                                                 src={printer.img}
//                                                 alt={printer.title}
//                                               />
//                                             </div>


//                                             <div className="PrntrDetails">
//                                               <h3>{printer.productFullName}</h3>
//                                               <ul>
//                                                 {printer.features.map(
//                                                   (feature, index) => (
//                                                     <li key={index}>
//                                                       <span>
//                                                         {feature.title}
//                                                       </span>{" "}
//                                                       - {feature.detail}
//                                                     </li>
//                                                   )
//                                                 )}
//                                               </ul>
//                                             </div>
//                                           </div>
//                                         </div>
//                                         <div className="dscrption">
//                                           <div
//                                             className="DescSec PrDesc"
//                                             data-aos="fade-up"
//                                             data-aos-duration="1000"
//                                           >
//                                             <div >
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Brand
//                                                 </li>
//                                                 <li>- {printer.brand}</li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Connectivity technology
//                                                 </li>
//                                                 <li>
//                                                   - {printer.connectivity}
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Printing technology
//                                                 </li>
//                                                 <li>
//                                                   - {printer.connectivity}
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Special features
//                                                 </li>
//                                                 <li>
//                                                   - {printer.specialFeatures}
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Colour
//                                                 </li>
//                                                 <li>- {printer.color}</li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Model name
//                                                 </li>
//                                                 <li>- {printer.modelName}</li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Printer output
//                                                 </li>
//                                                 <li>
//                                                   - {printer.printerOutput}
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Maximum print speed (colour)
//                                                 </li>
//                                                 <li>
//                                                   - {printer.maxPrintSpeedColor}{" "}ppm
                                                 
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Max. monochrome printing speed
//                                                 </li>
//                                                 <li>
//                                                   -{" "}
//                                                   {
//                                                     printer.maxPrintSpeedMonochrome
//                                                   }{" "}ppm
                                                  
//                                                 </li>
//                                               </div>
//                                               <div className="DetlList">
//                                                 <li className="DescList">
//                                                   Item weight
//                                                 </li>
//                                                 <li>
//                                                   - {printer.itemWeight}{" "}kg
                                                 
//                                                 </li>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 )
//                             )}
//                           </>
//                         )}
//                       </div>
//                     </div>




//                     {currentPrinterData && (

//                     <div className="totalCount">
//                       <h3>
//                         Enter here how many pages you print about every month
//                       </h3>
//                       <div className="itemCalc">
//                         <div className="row ">
//                           <div className="col-md-8">
//                             <div className="range">
//                               <input
//                                 type="range"
//                                 value={blackPrints}
//                                 min="0"
//                                 max="5000"
//                                 step={currentPrinterData.slideRange}
//                                 onChange={handleBlackPrintsChange}
//                                 id="range1"
//                               />
//                               <label id="label1">
//                                 {blackPrints} black prints
//                               </label>
//                             </div>
//                             <div className="range">
//                               <input
//                                 type="range"
//                                 value={colorPrints}
//                                 min="0"
//                                 step={currentPrinterData.slideRange}
//                                 max="5000"
//                                 onChange={handleColorPrintsChange}
//                               />
//                               <label id="label2">
//                                 {colorPrints} color prints
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="AmntPrn">
//                             {isEditingCost ? (
//                             <div className="edit-cost-box">
//                                 <input
//                                 type="number"
//                                 value={editedCost}
//                                 onChange={(e) => setEditedCost(e.target.value)}
//                                 className="form-control"
//                                 />
//                                 <button onClick={handleCostEditSubmit} className="btn btn-sm btn-success mt-1">Apply</button>
//                             </div>
//                             ) : (
//                             <h2 onClick={() => setIsEditingCost(true)} style={{ cursor: "pointer" }}>
//                                 {monthlyCost}
//                                 <span>DHS</span> ✎
//                             </h2>
//                             )}


//                             </div>
//                           </div>
//                         </div>
//                         <div className=" nxtBtn">
//                         <button onClick={handlePrinterSelectionComplete}>Next</button>
//                         </div>
//                       </div>
//                     </div>

//                     )}


                    
//                   </div>
//                 )}


//                 {activeTab === "Qute3" && (
//                   <div
//                     id="Qute3"
//                     className="tabcontent"
//                     style={{ display: "block" }}
//                   >
//                     <div className="qutTab">
//                       <div
//                         className="mainCnt"
//                         data-aos="fade-up"
//                         data-aos-duration="1000"
//                       >
//                         {" "}
//                         <p>
//                           Instead of purchasing a printer, you can rent your
//                           desired printer from us. You pay a fixed monthly fee
//                           and get not only the printer, but alsoink or toner and
//                           services. all inclusive. After the contract period the
//                           printer belongs to you!
//                         </p>
//                       </div>
//                       {currentPrinterData && (
//                       <div
//                         className="recmnd"
//                         data-aos="fade-up"
//                         data-aos-duration="1000"
//                       >
//                         <p>Recommended System</p>
//                         <h2>{currentPrinterData.productFullName}</h2>
//                         <div className="system">
//                           <img src={currentPrinterData.img} alt={currentPrinterData.title} />
//                         </div>
//                         <p>The print volume you have chosen</p>
//                         <div className="prntVolm">
//                           <div
//                             className="volume"
//                             data-aos="fade-up"
//                             data-aos-duration="1000"
//                           >
//                             <p>Black Prints</p>
//                             <h3>{blackPrints} Pages</h3>
//                           </div>
//                           <div
//                             className="volume"
//                             data-aos="fade-up"
//                             data-aos-duration="1000"
//                           >
//                             <p>Color Prints</p>
//                             <h3>{colorPrints} Pages</h3>
//                           </div>
//                           <div
//                             className="volume"
//                             data-aos="fade-up"
//                             data-aos-duration="1000"
//                           >
//                             <p>Cost</p>
//                             <h3>
//                             {monthlyCost} <span>DHS</span>
//                             </h3>
//                           </div>
//                         </div>
//                         <div
//                           className="sndBtns"
//                           data-aos="fade-up"
//                           data-aos-duration="1000"
//                         >
//                           <div className="btnSnd">
//                           <a href="#" onClick={(e) => {
//                                 e.preventDefault();

//                                 const payload = {
//                                     name: formData?.name,
//                                     email: formData?.email,
//                                     mobile: formData?.mobile,
//                                     company: formData?.company,
//                                     message: formData?.message,
//                                     productFullName: currentPrinterData?.productFullName,
//                                     blackPrints,
//                                     colorPrints,
//                                     monthlyCost,
//                                 };

                       
//                                 axios.post('https://sahara-backend-tubt.onrender.com/api/email/send-email', payload)
//                                     .then(response => {
//                                     const data = response.data;
//                                     if (data.success) {
//                                         alert("Email sent successfully!");
//                                     } else {
//                                         alert("Email failed to send.");
//                                     }
//                                     })
//                                     .catch(error => {
//                                     console.error("Axios email send error:", error);
//                                     alert("Error sending email.");
//                                     });
//                                 }}>
//                                 <img src="/assets/Quote/SntMail.png" alt="" /> Send to Email
//                             </a>
//                           </div>
//                           <div className="btnSnd wtsapp">
//                           <a 
//                             href={`https://wa.me/+971503823969?text=${encodeURIComponent(
//                             `*Printer Quote Request*\n\n` +
//                             `*Customer Details:*\n` +
//                             `Name: ${formData.name || 'Not provided'}\n` +
//                             `Email: ${formData.email || 'Not provided'}\n` +
//                             `Phone: ${formData.mobile || 'Not provided'}\n` +
//                             `Company: ${formData.company || 'Not provided'}\n` +
//                             `Message: ${formData.message || 'No additional message'}\n\n` +
//                             `*Printer Selection:*\n` +
//                             `Model: ${currentPrinterData?.productFullName || 'Not selected'}\n\n` +
//                             `*Print Volume:*\n` +
//                             `Black Prints: ${blackPrints} pages\n` +
//                             `Color Prints: ${colorPrints} pages\n\n` +
//                             `*Monthly Cost:* ${monthlyCost} DHS`
//                             )}`} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                         >
//                               <img src="/assets/Quote/whatsapp.png" alt="" />{" "}
//                               Send to Whatsapp
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                         )}
//                     </div>
//                   </div>
//                 )}




                
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// export default ProductEnquiry;
