import React from "react";

const clients = ({
  clientHead,
  clientSub,
  client1,
  client2,
  client1Title,
  client2Title,
  client1Feedback,
  client2Feedback,
}) => {
  return (
    <section class="client__wrapper">
      <div class="client__heading-wrapper">
        <h2 class="client__heading">{clientHead}</h2>
        <p class="client__text">
        {clientSub}
        </p>
      </div>
      <div class="client__cards-wrapper">
        <div class="client__cards">
          <img
            src="/public/images/woman.png"
            alt="Woman image"
            class="client-image"
          />
          <div class="client__card-text__wrapper">
            <h3 class="client__name">{client1}</h3>
            <p class="client__title">{client1Title}</p>
            <div class="client__rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p class="client__feedback">
              {client1Feedback}
            </p>
          </div>
        </div>

        <div class="client__cards">
          <img src="/public/images/man.png" alt="Woman image" class="client-image" />
          <div class="client__card-text__wrapper">
            <h3 class="client__name">{client2}</h3>
            <p class="client__title">{client2Title}</p>
            <div class="client__rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p class="client__feedback">
              {client2Feedback}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default clients;
