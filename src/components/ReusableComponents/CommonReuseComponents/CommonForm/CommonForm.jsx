import React from "react";
import axios from "axios";
import ProductReqForm from "../../../../validationSchemas/Product-Req-Form";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { yupResolver } from "@hookform/resolvers/yup";
import "./CommonForm.css";

function CommonForm({ buttonText = "Next", onSubmitSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductReqForm),
  });

  const onSubmit = (data) => {
    // axios.post("http://localhost:5000/api/email/send-email", data)
      axios.post("https://saharaoffice-backend.onrender.com/api/email/send-email", data)
    .then(() => {
      onSubmitSuccess?.(data, reset); 
      console.log("Email sent successfully!", data);
      
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      alert("Failed to send email");
    });
    onSubmitSuccess?.(data, reset);
  };

  return (
    <div className="Qut-cnt">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="quteFrm" data-aos="fade-up" data-aos-duration="1000">
          <div className="row">
            <div className="input-box qutInpt col-md-5">
              <div>
                <img src="/assets/Contact/user.png" alt="" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="input-box qutInpt col-md-5">
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

            <div className="input-box qutInpt col-md-5">
              <div>
                <img src="/assets/Contact/mobile.png" alt="" />
              </div>
              <Controller
                name="mobile"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PhoneInput
                    country={'ae'}
                    {...field}
                    inputProps={{
                      name: 'mobile',
                      required: true,
                      className: 'form-control',
                      style: {marginLeft:'10px' }
                    }}
                  />
                )}
              />
              {errors.mobile && (
                <span className="error-message">{errors.mobile.message}</span>
              )}
            </div>

            <div className="input-box qutInpt col-md-5">
              <div>
                <img src="/assets/Contact/email.png" alt="" />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="input-box qutInpt txtarea TxtQut">
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
          </div>
        </div>
        <div className="nxtBtn">
          <button>{buttonText}</button>
        </div>
      </form>
    </div>
  );
}

export default CommonForm;
