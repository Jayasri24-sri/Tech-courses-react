// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-page">
//       <h2>Contact Us</h2>
//       <div className="contact-info">
//         <div className="contact-item">
//           <h3>Email</h3>
//           <p>For any inquiries, please email us at:</p>
//           <a href="mailto:sri@gmail.com" className="contact-link">
//             sri@gmail.com
//           </a>
//         </div>

//         <div className="contact-item">
//           <h3>Support</h3>
//           <p>
//             If you need help with our courses, please contact support through
//             email. We're here to assist you!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-page">
//       <h2>Contact Us</h2>
//       <div className="contact-info">

//         <div className="contact-item">
//           <h3>
//             <i className="fas fa-envelope"></i> Email
//           </h3>
//           <p>For any inquiries, please email us at:</p>
//           <a href="mailto:sri@gmail.com" className="contact-link">
//             sri@gmail.com
//           </a>
//         </div>

//         <div className="contact-item">
//           <h3>
//             <i className="fas fa-headset"></i> Support
//           </h3>
//           <p>
//             If you need help with our courses, please contact support through
//             email. We're here to assist you!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import "./Contact.css"; // Assuming you're using an external CSS file for styles

const Contact = () => {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-info">
        {/* Unified Contact Info Section */}
        <div className="contact-item">
          <h3>
            <i className="fas fa-envelope"></i> Email
          </h3>
          <p>For any inquiries, please email us at:</p>
          <a href="mailto:sri@gmail.com" className="contact-link">
            sri@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <h3>
            <i className="fas fa-headset"></i> Support
          </h3>
          <p>
            If you need help with our courses, please contact support through
            email. We're here to assist you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
