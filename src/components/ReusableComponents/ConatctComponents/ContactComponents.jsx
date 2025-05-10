import React from "react";
import Sidebar from "../Sidebar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ProductReqForm from "../../../validationSchemas/Product-Req-Form";
import "./ContactComponent.css";
import { useLoader } from '../../hooks/LoaderContext'; 


import axios from "axios";
function ContactComponents() {
          const { setLoading } = useLoader(); 
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ProductReqForm),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true)
          const response = await axios.post("https://sahara-backend-tubt.onrender.com/api/email/send-email", data);
      
          if (response.status === 200) {
            alert("Email sent successfully!");
            reset();
          } else {
            alert("Failed to send email.");
          }
        } catch (error) {
          console.error("Email send error:", error);
          alert("An error occurred while sending the email.");
        }finally{
            setLoading(false)

        }
      };

    return (
        <>
            <main className="PrntrMain">
                <div className="Contact">
                    {/* <Sidebar /> */}
                    <div className="crtQuote">
                        <div className="calc" data-aos="fade-in" data-aos-duration="1000">
                            <a href='/ProductEnquiry'><img src="/assets/Home/calculator.png" alt=""/>
                            <p>create <br/> your<br/> own <br/>quote</p></a>
                        </div>
                    </div>
                </div>
                <section className="MainContainer">
                    <div className="container">
                        <div className="ABHero">
                            <div
                                className="AbHro-txt"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <h1>
                                    Contact Info <br />
                                    <span>Sahara Office Equipments</span>
                                </h1>
                            </div>
                            <div className="contHero">
                                <img src="/assets/Contact/customerCare.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="saharaAbout">
                    <div className="container">
                        <div className="Ab-contain">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div
                                        className="CTCntnt "
                                        data-aos="fade-in"
                                        data-aos-duration="1000"
                                    >
                                        <div
                                            className="cmpny"
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                        >
                                            contact
                                        </div>
                                        <div className="cntctHd">
                                            <h2 data-aos="fade-in" data-aos-duration="1000">
                                                Printing Worries?
                                                <br /> Let's Solve Them Together!
                                            </h2>
                                        </div>
                                        <div className="locateSahara">
                                            <div className="location">
                                                <div
                                                    className="locIcon"
                                                    data-aos="fade-in"
                                                    data-aos-duration="1000"
                                                >
                                                    <img src="/assets/Contact/locate.png" alt="" />
                                                </div>
                                                <div
                                                    className="address"
                                                    data-aos="fade-in"
                                                    data-aos-duration="1000"
                                                >
                                                    <h2>
                                                        <span>Corporate office</span>
                                                        <br />
                                                        SAHARA OFFICE EQUIP. TR. LLC
                                                    </h2>
                                                    <p>
                                                        Industrial area 11, Sharjah Industrial Center Road ,
                                                        <br />
                                                        Al Arabi Building ,<br />
                                                        PO Box 47373 - Sharjah - UAE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="locIcon">
                                                    <img src="/assets/Contact/locate.png" alt="" />
                                                </div>
                                                <div
                                                    className="address"
                                                    data-aos="fade-in"
                                                    data-aos-duration="1000"
                                                >
                                                    <h2>
                                                        <span>Abu dhabi</span>
                                                        <br />
                                                    </h2>
                                                    <p>Branch Office</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="contactOptions">
                                            <div
                                                className="options"
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                            >
                                                <div className="circle mobile">
                                                    <img src="/assets/Contact/phone.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    <h3>+971 6 5426169, +971 6 5276444</h3>
                                                </div>
                                            </div>
                                            <div
                                                className="options"
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                            >
                                                <div className="circle">
                                                    <img src="/assets/Contact/call.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3>+971 50 3823969</h3>
                                                </div>
                                            </div>
                                            <div
                                                className="options "
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                            >
                                                <div className="circle">
                                                    <img src="/assets/Contact/Email-white.png" alt="" />
                                                </div>
                                                <div>
                                                    <h3>info@saharaedoc.com</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-6 col-md-12">
                                    <div
                                        className="CTCntnt"
                                        data-aos="fade-in"
                                        data-aos-duration="1000"
                                    >
                                        <div className="Cntct-Form">
                                            <h2 data-aos="fade-in" data-aos-duration="1000">
                                                Need Support? We're Here 24/7!
                                            </h2>
                                            <p data-aos="fade-in" data-aos-duration="1000">
                                                Tell us everything about your problem, we’ll be glad to
                                                help. Fill out the form, or if you prefer send us{" "}
                                                <a href="mailto:info@saharaedoc.com">
                                                    <span style={{ color: "#f55e0d" }}> an email.</span>
                                                </a>
                                            </p>

                                            <div
                                                className="Cnt-Frm"
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                            >
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="input-box">
                                                        <div>
                                                            <img src="/assets/Contact/user.png" alt="" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="your name"
                                                            {...register("name", ProductReqForm.name)}
                                                        />

                                                        {errors.name && (
                                                            <span className="error-message">
                                                                {errors.name.message}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="input-box">
                                                        <div>
                                                            <img src="/assets/Contact/company.png" alt="" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Company Name"
                                                            {...register("company")}
                                                        />

                                                        {errors.company && (
                                                            <span className="error-message">
                                                                {errors.company.message}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="input-box">
                                                        <div>
                                                            <img src="/assets/Contact/mobile.png" alt="" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Mobile Number"
                                                            {...register("mobile")}
                                                        />
                                                        {errors.mobile && (
                                                            <span className="error-message">
                                                                {errors.mobile.message}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="input-box">
                                                        <div>
                                                            <img src="/assets/Contact/email.png" alt="" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            placeholder="Email Address"
                                                            {...register("email")}
                                                        />
                                                        {errors.email && (
                                                            <span className="error-message">
                                                                {errors.email.message}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="input-box txtarea">
                                                        <div>
                                                            <img src="/assets/Contact/message.png" alt="" />
                                                        </div>
                                                        <textarea
                                                            placeholder="Your Message"
                                                            {...register("message")}
                                                        ></textarea>
                                                        {errors.message && (
                                                            <span className="error-message">
                                                                {errors.message.message}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="snd-btn">
                                                        <button>Send</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mapSection">
                    <div className="container">
                        <div className="mapContainer">
                            <div className="mapHead">
                                <h3 data-aos="fade-in" data-aos-duration="1000">
                                    Smart Printing Starts Here Locate Us Now!
                                </h3>
                            </div>
                            <div className="map" data-aos="fade-in" data-aos-duration="1000">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14429.370022584379!2d55.4239467!3d25.2926942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f62e0d0595f%3A0xa40ba77aedf65618!2sSAHARA%20office%20equipments!5e0!3m2!1sen!2sin!4v1744113007184!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    frameBorder="0"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ContactComponents;
