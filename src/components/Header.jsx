import React from 'react'

const header = ({logo, item1, item2, item3, item4, heroButton}) => {
    return (
        <header class="header__wrapper">
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
          <a href="#" className="header__button-login">{login}</a>
          <button className="header__button-member">{heroButton}</button>
        </div>
      </header>
    )
}

export default header