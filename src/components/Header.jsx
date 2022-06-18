import React from "react";

const header = ({ logo, item1, item2, item3, item4, heroButton, login }) => {
  return (
    <div>
    <header className="header__wrapper">
      <div className="header__logo">{logo}</div>
      <nav className="header__menu-items__wrapper">
        <ul className="header__menu-items">
          <li className="header__menu-item">{item1}</li>
          <li className="header__menu-item">{item2}</li>
          <li className="header__menu-item">{item3}</li>
          <li className="header__menu-item">{item4}</li>
        </ul>
      </nav>
      <div className="header__button-wrapper">
        <a href="#" className="header__button-login">
          {login}
        </a>
        <button className="header__button-member">{heroButton}</button>
      </div>
    </header>

     <header className="mobile-header">
     <div className="mobile-header__wrapper">
       <div className="mobile-header__logo">{logo}</div>
       <div className="mobile-header__icon-wrapper">
         <i className="fa-solid fa-magnifying-glass"></i>
         <i className="fa-solid fa-cart-shopping"></i>
         <i className="fa-solid fa-bars-staggered"></i>
       </div>
     </div>

     <nav className="mobile-header__menu-items__wrapper">
       <ul className="mobile-header__menu-items">
         <li className="mobile-header__menu-item">{item1}</li>
         <li className="mobile-header__menu-item">{item2}</li>
         <li className="mobile-header__menu-item">{item3}</li>
         <li className="mobile-header__menu-item">{item4}</li>
       </ul>
     </nav>
   </header>
    </div>
  );
};

export default header;
