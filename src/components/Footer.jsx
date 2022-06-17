import React from "react";

const footer = ({
  head,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  m1item1,
  m1item2,
  m1item3,
  m1item4,
  m2item1,
  m2item2,
  m2item3,
  m2item4,
  m3item1,
  m3item2,
  m3item3,
  m3item4,
  m4item1,
  m4item2,
  m4item3,
  m4item4,
  buttonText,
  formSub,
  disclaimer,
}) => {
  return (
    <footer>
      <div className="footer__heading">
        <h6 className="footer__heading-brand">{head}</h6>
        <ul className="footer__heading-icons__wrapper">
          <li className="footer__heading-icon">
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li className="footer__heading-icon">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="footer__heading-icon">
            <i className="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>

      <hr className="footer__line" />
      <div className="footer__menu__wrapper">
        <div className="footer__menu-items__wrapper">
          <h6>{menu1}</h6>
          <ul className="footer__menu-lists">
            <li className="footer__menu-lists__items">{m1item1}</li>
            <li className="footer__menu-lists__items">{m1item2}</li>
            <li className="footer__menu-lists__items">{m1item3}</li>
            <li className="footer__menu-lists__items">{m1item4}</li>
          </ul>
        </div>
        <div className="footer__menu-items__wrapper">
          <h6>{menu2}</h6>
          <ul className="footer__menu-lists">
            <li className="footer__menu-lists__items">{m2item1}</li>
            <li className="footer__menu-lists__items">{m2item2}</li>
            <li className="footer__menu-lists__items">{m2item3}</li>
            <li className="footer__menu-lists__items">{m2item4}</li>
          </ul>
        </div>
        <div className="footer__menu-items__wrapper">
          <h6>{menu3}</h6>
          <ul className="footer__menu-lists">
            <li className="footer__menu-lists__items">{m3item1}</li>
            <li className="footer__menu-lists__items">{m3item2}</li>
            <li className="footer__menu-lists__items">{m3item3}</li>
            <li className="footer__menu-lists__items">{m3item4}</li>
          </ul>
        </div>
        <div className="footer__menu-items__wrapper">
          <h6>{menu4}</h6>
          <ul className="footer__menu-lists">
            <li className="footer__menu-lists__items">{m4item1}</li>
            <li className="footer__menu-lists__items">{m4item2}</li>
            <li className="footer__menu-lists__items">{m4item3}</li>
            <li className="footer__menu-lists__items">{m4item4}</li>
          </ul>
        </div>
        <div className="footer__menu-items__wrapper">
          <h6>{menu5}</h6>
          <form className="footer__menu-form">
            <input
              type="email"
              placeholder="Your Email"
              className="footer__menu-form__input"
            />
            <button type="button" className="footer__menu-form__button">
              {buttonText}
            </button>
          </form>
          <p>{formSub}</p>
        </div>
      </div>
      <p className="disclaimer">{disclaimer}</p>
    </footer>
  );
};

export default footer;
