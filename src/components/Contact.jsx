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
    <section class="contact__wrapper">
      <div class="contact__header-wrapper">
        <h1 class="contact__heading">{contactHead}</h1>
        <p class="contact__text">{contactSub}</p>
      </div>

      <div class="contact__cards-wrapper">
        <div class="contact__card-wrapper">
          <i class="fa-solid fa-phone contact__card-image"></i>
          <p class="contact__card-email">{email1}</p>
          <h2 class="contact__card-support">{support}</h2>
          <button class="contact__card-button">{buttonText}</button>
        </div>
        <div class="contact__card-wrapper middle">
          <i class="fa-solid fa-location-dot contact__card-image"></i>
          <p class="contact__card-email">{email2}</p>
          <h2 class="contact__card-support">{support}</h2>
          <button class="contact__card-button">{buttonText}</button>
        </div>
        <div class="contact__card-wrapper">
          <i class="fa-solid fa-envelope contact__card-image"></i>
          <p class="contact__card-email">{email3}</p>
          <h2 class="contact__card-support">{support}</h2>
          <button class="contact__card-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};
export default contact;
