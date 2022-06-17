import React from "react";

const contact = ({
  contactHead,
  contactSub,
  email1,
  email2,
  email3,
  support,
  buttonText,
}) => {
  return (
    <section className="contact__wrapper">
      <div className="contact__header-wrapper">
        <h1 className="contact__heading">{contactHead}</h1>
        <p className="contact__text">{contactSub}</p>
      </div>

      <div className="contact__cards-wrapper">
        <div className="contact__card-wrapper">
          <i className="fa-solid fa-phone contact__card-image"></i>
          <p className="contact__card-email">{email1}</p>
          <h2 className="contact__card-support">{support}</h2>
          <button className="contact__card-button">{buttonText}</button>
        </div>
        <div className="contact__card-wrapper middle">
          <i className="fa-solid fa-location-dot contact__card-image"></i>
          <p className="contact__card-email">{email2}</p>
          <h2 className="contact__card-support">{support}</h2>
          <button className="contact__card-button">{buttonText}</button>
        </div>
        <div className="contact__card-wrapper">
          <i className="fa-solid fa-envelope contact__card-image"></i>
          <p className="contact__card-email">{email3}</p>
          <h2 className="contact__card-support">{support}</h2>
          <button className="contact__card-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};
export default contact;
