import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3nzgps5",
        "template_atjcki6",
        form.current,
        "Ums6hXEfihhmsTSfP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert('Your message has been sent successfully!')
      window.location.reload()
  };
  
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Get in touch</h1>
      </div>
      <div className="footer-contact">
        <form  className="form" ref={form} onSubmit={sendEmail} >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          {/* <input type="submit" value="Send" />  */}
          <button type="submit" value="Send" >
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
      <div className="footer-sns">
        <div className="design-by">Gracias por visitar! </div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/gonzalo-hollmann-655a0421b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/GonzaloHollmann"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;