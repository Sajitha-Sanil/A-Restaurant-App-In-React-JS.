import React from "react";

function Contact() {
  return (
    <>
      <section className="contact" id="contacts">
        <h1 className="heading">
          {" "}
          Contact <span>Us</span>
        </h1>

        <div className="row">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.0724742309044!2d76.86463217818664!3d8.872845468702145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05de7dd42735b9%3A0x9b8652b8c3b6e32c!2sChadayamangalam%2C%20Kerala%20691534!5e0!3m2!1sen!2sin!4v1698410951790!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe></div>
            <form>
              <h3>Get In Touch</h3>
              <div className="inputBox">
                <span className="fas fa-user"></span>
                <input type="text" placeholder="name" />
              </div>
              <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="text" placeholder="email" />
              </div>
              <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="phone number" />
              </div>
              <input type="submit" value="Contact Now" className='btn' />
            </form>
          </div>
      
      </section>
    </>
  );
}

export default Contact;
