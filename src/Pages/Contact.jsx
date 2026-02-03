 import React from "react";
 import "./Auth.css"; 

 function Contact() {
   const handleSubmit = (e) => {
     e.preventDefault();
     alert("Message Sent Successfully ✅");
   };

   return (
     <div className="page">
       <div className="auth-card">
         <h2>Contact Us</h2>

         <form onSubmit={handleSubmit}>
           <input type="text" placeholder="Your Name" required />
           <input type="email" placeholder="Your Email" required />
           <input type="text" placeholder="Subject" required />
           <textarea
             placeholder="Your Message"
             rows="4"
             style={{
               width: "100%",
               padding: "12px",
               borderRadius: "10px",
               border: "none",
               marginBottom: "15px"
             }}
             required
           ></textarea>

           <button type="submit">Send Message</button>
         </form>

         <p style={{ marginTop: "15px", textAlign: "center", opacity: 0.8 }}>
           Email: support@learnsphere.com <br />
           Phone: +91 98765 43210
         </p>
       </div>
     </div>
   );
 }

 export default Contact;



