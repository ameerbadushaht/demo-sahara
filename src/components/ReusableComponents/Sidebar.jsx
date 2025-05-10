import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Sidebar() {
//   const navigate = useNavigate();

  return (
    <>
      <div className="Contact">
        <div className="Cntct-Icons">
          {/* Call */}
          <div data-aos="fade-in" data-aos-duration="1000">
            <a href="tel:++971503823969" title="Call us">
              <img src="/assets/Home/phone.png" alt="Call" />
            </a>
          </div>

          {/* Email */}
          <div data-aos="fade-in" data-aos-duration="1000">
            <a href="mailto:info@saharaedoc.com" title="Email us">
              <img src="/assets/Home/email.png" alt="Email" />
            </a>
          </div>

          {/* WhatsApp */}
          <div data-aos="fade-in" data-aos-duration="1000">
            <a
              href="https://wa.me/971503823969"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
            >
              <img src="/assets/Home/chat.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
