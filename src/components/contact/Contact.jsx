import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";

// import Address from "../../img/address.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fg5ki4b",
        "template_4e4932l",
        formRef.current,
        "bpb_sK-IxTZtzfkPF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              681-804-141
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              gaco.g4@gmail.com
            </div>
            <div className="c-info-item">
              {/* <img src={Address} alt="" className="c-icon" /> */}
              Malaga
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Whats your story?</b> Get in touch with me.<tr></tr> Always
            intrested in oportunietes and new projects
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
