import React from "react";
import swisoLogo from "../../assets/white-logo.png";
import x from "../../assets/x.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import dial from "../../assets/dial.png";
import mail from "../../assets/mail.png";
import pin from "../../assets/pin.png";
import { useForm } from "react-hook-form";

export const Footer = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="social-media">
          <img className="swiso-logo" src={swisoLogo} />
          <div className="sm-group">
            <img src={fb} className="sm-logo" />
            <img src={ig} className="sm-logo" />
            <img src={x} className="sm-logo" />
          </div>
        </div>
        <div className="footer-content">
          <div className="contact">
            <div className="contact-header">Want to talk with Us ?</div>
            <div className="contact-description">
              We are always at your service
            </div>
            <div className="contacts">
              <div className="contacts-header">Contacts</div>
              <div className="contacts-details">
                <img src={dial} />
                <span className="detail">+201101179476</span>
              </div>
              <div className="contacts-details">
                <img src={mail} />
                <span className="detail">info@swisodev.com</span>
              </div>
              <div className="contacts-details">
                <img style={{ height: 17 }} src={pin} />
                <span className="detail">
                  4 Ahmed Fathi St ,Gleem , Alexandria , Egypt
                </span>
              </div>
            </div>
          </div>
          <div className="brief">
            <div className="pages">
              <div className="pages-header">Pages</div>
              <div>• Home</div>
              <div>• Company</div>
              <div>• Our Services</div>
              <div>• Case Studies</div>
              <div>• Privacy Policy</div>
              <div>• About Us</div>
            </div>
            <div className="pages">
              <div className="pages-header">Our Services</div>
              <div>• Web</div>
              <div>• Mobile</div>
              <div>• AL / ML</div>
              <div>• Analyze</div>
              <div>• Monitor</div>
              <div>• Support</div>
            </div>
          </div>
          <div className="f-about-us">
            <div className="about-us-header">About Us</div>
            <form
              className="us-form-container"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="us-input-container">
                <input
                  className="us-input-field"
                  {...register("email", { required: true })}
                  placeholder="email"
                />
              </div>
              <div className="us-input-container">
                <textarea
                  className="us-input-field"
                  {...register("message", { required: true })}
                  rows={5}
                  placeholder="message"
                />
              </div>
              <button className="us-submit-button" type="submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-rights">Copyright You SWISO dev 2024</div>
    </div>
  );
};
