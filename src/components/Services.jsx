import React from "react";
import users from "../images/users.png";

const services = ({
  servicesHead,
  servicesSub,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  servicesText,
}) => {
  return (
    <section className="services__wrapper">
      <div className="services__heading-wrapper">
        <h1 className="services__heading">{servicesHead}</h1>
        <p className="services__subHeading">{servicesSub}</p>
      </div>
      <div className="services__cards-wrapper">
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service1}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service2}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service3}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service4}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service5}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
        <div className="services__card-wrapper">
          <img src={users} alt="Services Icon" />
          <div className="services__card-text__wrapper">
            <h1 className="services__card-header">{service6}</h1>
            <p className="services__card-text">{servicesText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
