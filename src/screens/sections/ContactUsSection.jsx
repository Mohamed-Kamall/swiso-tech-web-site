import React from "react";
import { useForm } from "react-hook-form";

export const ContactUsSection = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      yourEmail: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="section-9">
      <div className="container">
        <div className="left">
          <div className="l-header">
            Contact <span className="blue">Us</span>{" "}
          </div>
          <div className="description">
            Please fill out the quick form and we will be in touch with
            lightning speed.
          </div>
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label className="label">Full Name *</label>
              <input
                className="input-field"
                {...register("fullName", { required: true })}
                placeholder="full name"
              />
            </div>
            <div className="input-container">
              <label className="label">Your Email *</label>
              <input
                className="input-field"
                {...register("yourEmail", { required: true })}
                placeholder="your email"
              />
            </div>
            <div className="input-container">
              <label className="label">Subject *</label>
              <input
                className="input-field"
                {...register("subject", { required: true })}
                placeholder="subject"
              />
            </div>
            <div className="input-container">
              <label className="label">Message *</label>
              <textarea
                className="input-field"
                {...register("message", { required: true })}
                rows={5}
                placeholder="message"
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="right">
          <div className="details-container">
            <div className="text-1">Get In Touch</div>
            <div className="text-2">
              Have a question ? Reach out through one of the options bellow and
              someone from Orion Origin team will be in touch with you soon.
            </div>
          </div>
          <div className="details-container">
            <div className="text-1">Phones</div>
            <div className="text-2">(+2) 01101260002</div>
            <div className="text-2">(+996) 505494870</div>
          </div>
          <div className="details-container">
            <div className="text-1">Addresses</div>
            <div className="text-2">
              <div>Alexandria - Egypt office</div> <div> +2 01060007357</div>
            </div>
            <div className="text-2">
              <div>Dubai - UAE office</div> <div> +2 01060007357</div>{" "}
            </div>
          </div>
          <div className="details-container">
            <div className="text-1">Emails</div>
            <div className="text-2">
              <div>More info about SWISO</div>
              <div>ahmed.magdy@swiso-tech.com</div>
            </div>
            <div className="text-2">
              <div>Contact Sales Team</div>
              <div>ahmed.habiba@swiso-tech.com</div>
            </div>
            <div className="text-2">
              <div>Contact Founders</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span>sales@swisodev.com</span>
                <span>info@swisodev.com</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
